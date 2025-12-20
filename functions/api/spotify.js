export async function onRequest(context) {
    const {
        SPOTIFY_CLIENT_ID,
        SPOTIFY_CLIENT_SECRET,
        SPOTIFY_REFRESH_TOKEN,
    } = context.env;

    const basic = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
    const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
    const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

    // 1. Get Access Token
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
    });

    const { access_token } = await response.json();

    // 2. Try Now Playing
    let spotifyRes = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
    });

    if (spotifyRes.status === 204 || spotifyRes.status > 400) {
        // 3. Fallback to Recently Played
        spotifyRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
            headers: { Authorization: `Bearer ${access_token}` },
        });
        const data = await spotifyRes.json();
        const track = data.items[0].track;
        return new Response(JSON.stringify({
            title: track.name,
            artist: track.artists.map(a => a.name).join(', '),
            link: track.external_urls.spotify,
            isPlaying: false
        }), { headers: { 'Content-Type': 'application/json' } });
    }

    const song = await spotifyRes.json();
    return new Response(JSON.stringify({
        title: song.item.name,
        artist: song.item.artists.map(a => a.name).join(', '),
        link: song.item.external_urls.spotify,
        isPlaying: song.is_playing
    }), { headers: { 'Content-Type': 'application/json' } });
}