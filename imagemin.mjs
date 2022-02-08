import keepfolder from "imagemin-keep-folder";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";
import gifsicle from "imagemin-gifsicle";
import svgo from "imagemin-svgo";

keepfolder(["src/img/**/*.{jpg,png,gif,svg}"], {
  plugins: [
    mozjpeg({
      quality: 85,
    }),
    pngquant({
      quality: [0.7, 0.8],
    }),
    gifsicle(),
    svgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/img\//, "../dist/img/");
  },
});
