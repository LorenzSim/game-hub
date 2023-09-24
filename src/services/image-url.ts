const croppedImageUrl = ({
  url,
  width = 600,
  height = 400,
}: {
  url: string;
  width?: number;
  height?: number;
}) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const prefix = url.slice(0, index);
  const postfix = url.slice(index);
  
  return `${prefix}crop/${width}/${height}/${postfix}`;
};

export default croppedImageUrl;
