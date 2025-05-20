// import fs from "fs";
// import path from "path";

// const fileRemover = (filename) => {
//   fs.unlink(path.join(__dirname, "../uploads", filename), function (err) {
//     if (err && err.code == "ENOENT") {
//       // file doesn't exist
//       console.log(`File ${filename} doesn't exist, won't remove it.`);
//     } else if (err) {
//       console.log(err.message);
//       console.log(`Error occured while trying to remove file ${filename}`);
//     } else {
//       console.log(`removed ${filename}`);
//     }
//   });
// };

// export { fileRemover };
import fs from "fs";
import path from "path";

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const fileRemover = (filename) => {
  fs.unlink(path.join(__dirname, "../uploads", filename), function (err) {
    if (err && err.code == "ENOENT") {
      // file doesn't exist
      console.log(File ${filename} doesn't exist, won't remove it.);
    } else if (err) {
      console.log(err.message);
      console.log(Error occured while trying to remove file ${filename});
    } else {
      console.log(removed ${filename});
    }
  });
};

export { fileRemover };
