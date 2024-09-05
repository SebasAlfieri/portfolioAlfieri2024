export const randomTextAppear = () => {
  const delayAnim = 0.7 + Math.random() * 1.0;
  const yStart = Math.random() < 0.5 ? -5 : 5;
  const xStart = Math.random() < 0.5 ? -10 : 10;

  return {
    visible: {
      opacity: [0, 1],
      y: [yStart, 0],
      x: [xStart, 0],
      transition: {
        opacity: {
          duration: 1,
          delay: delayAnim
        },
        y: {
          duration: 1,
          delay: 0.5
        },
        x: {
          duration: 1,
          delay: 0.5
        }
      }
    }
  };
};
export const oneByOne = (ElementIndex: number, InitialDelay: number, DelayPerChar: number) => {
  return {
    visible: {
      opacity: [0, 1],
      y: [-70, 0],
      transition: {
        delay: InitialDelay + ElementIndex * DelayPerChar,
        type: 'spring',
        bounce: 0.5,
        duration: 0.5
      }
    }
  };
};
