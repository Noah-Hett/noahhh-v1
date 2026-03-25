import SkillTag from "./skillTag";
import { usePageTransition } from "../animations/circlePageTransition";

export function WorkCard({
  title,
  titleFont = "font-['Geist:Regular',sans-serif]",
  image,
  descriptionItalic,
  descriptionRegular,
  tags,
  projectUrl,
  hoverColor = "black",
  badge,
  badgeUrl,
}) {
  const { transitionTo } = usePageTransition();

  const handleClick = (e) => {
    if (!projectUrl) return;
    e.preventDefault();
    transitionTo(projectUrl, e, { light: hoverColor, dark: hoverColor });
  };

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="w-full max-w-[calc(55vh*2)] mx-auto pb-20">
        {/* Title */}
        <div className="relative mb-[-5px]">
          {projectUrl ? (
            <a href={projectUrl} onClick={handleClick} className="inline-block">
              <h2 className={`${titleFont} text-black dark:text-white md:text-6xl text-4xl leading-normal not-italic transition-colors duration-300`}>
                {title}
              </h2>
            </a>
          ) : (
            <h2 className={`${titleFont} text-black dark:text-white md:text-6xl text-4xl leading-normal not-italic transition-colors duration-300`}>
              {title}
            </h2>
          )}
        </div>

        {/* Top Divider Line - Anchored Right, extends Left */}
        <div className="relative md:w-[35vw] w-[50vw] h-[2px]">
          <div className="absolute h-[2px] bg-black dark:bg-white right-0 w-screen transition-colors duration-300" />
        </div>

        {/* Image Container Wrapper */}
        <div className="relative w-full my-4">
          {badge && (
            <a href={badgeUrl}
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={badge}
                alt="Award Badge"
                width="120"
                height="120"
                loading="lazy"
                decoding="async"
                className="absolute -top-[5%] -right-[-2%] z-20 md:w-30 md:h-30 w-20 h-20 animate-[spin_15s_linear_infinite]"
              />
            </a>
          )}
          {projectUrl ? (
            <a
              href={projectUrl}
              onClick={handleClick}
              className="w-full flex justify-center overflow-hidden block"
              data-cursor-expand
              data-cursor-color={hoverColor}
            >
              <img
                src={image}
                alt={title}
                width="800"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full md:aspect-[2/1] aspect-[4/3] object-cover"
              />
            </a>
          ) : (
            <div className="w-full flex justify-center overflow-hidden" data-cursor-expand data-cursor-color={hoverColor}>
              <img
                src={image}
                alt={title}
                width="800"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full md:aspect-[2/1] aspect-[4/3] object-cover"
              />
            </div>
          )}
        </div>

        {/* Bottom Divider Line - Anchored Left, extends Right */}
        <div className="relative w-full h-[2px]">
          <div className="absolute h-[2px] bg-black dark:bg-white left-0 w-screen transition-colors duration-300" />
        </div>

        {/* Description and Tags Container */}
        <div className="flex justify-between items-start w-full mt-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 w-[60%]">
            {tags.map((tag, index) => (
              <SkillTag key={index} text={tag.text} color={tag.color} />
            ))}
          </div>

          {/* Description */}
          <div className="w-[40%] flex flex-col ">
            <p className="italic md:text-sm text-xs text-black dark:text-white text-right leading-normal transition-colors duration-300">{descriptionItalic}</p>
            <p className="md:text-sm text-xs text-black dark:text-white text-right leading-normal transition-colors duration-300">{descriptionRegular}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
