import dragonB from '../assets/dragon_796.png';
import dragon from '../assets/dragon_566.png';

export const Picture = () => {
  return (
    <div className={'flex justify-center items-center'}>
      <picture>
        <source srcSet={dragonB} media="(min-width: 1920px)" />
        <source srcSet={dragon} media="(min-width: 1366px)" />
        <img
          src={dragon}
          alt="Зображення"
          className="object-cover max-h-[90vh]"
        />
      </picture>
    </div>
  );
};
