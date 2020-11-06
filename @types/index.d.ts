declare module "*.png";
declare module "*.jpg";
declare module "*.jpe";
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.gif";
