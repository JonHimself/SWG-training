const readline = require("readline");
const fs = require("fs");

const simpleText = `You're Awesome`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your file name?", function (name) {
  fs.writeFile(
    `classwork/node.js-classwork/written-files/${name}`,
    simpleText,
    { flag: "wx" },
    function (err) {
      if (err) {
        console.log("we encountered an error");
        rl.question("What is your new file name?!?!?!?!", function (name) {
          fs.writeFile(
            `classwork/node.js-classwork/written-files/${name}`,
            simpleText,
            { flag: "wx" },
            function (err) {
              if (err) {
                console.log("we encountered an error. Try Again!");
              } else {
                console.log("File made!");
                rl.close();
              }
            }
          );
        });
      } else {
        console.log("File made!");
      }
    }
  );
});

// rl.question("What is your file name? ", function (name) {
//   fs.access(`classwork/node.js-classwork/written-files/${name}`, (err) => {
//     if (!err) {
//       const r2 = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//       });
//       r2.question("That file exists enter a new name ", function (file) {
//         console.log("hit2");
//         fs.writeFile(
//           `classwork/node.js-classwork/written-files/${file}`,
//           simpleText,
//           function (err) {
//             console.log("hit3");
//             if (err) {
//               console.log("we encountered an error");
//             }
//           }
//         );
//         console.log("hit4");
//         r2.close();
//       });
//     } else {
//       fs.writeFile(
//         `classwork/node.js-classwork/written-files/${name}`,
//         simpleText,
//         { flag: "wx" },
//         function (err) {
//           if (err) {
//             console.log("we encountered an error");
//           } else {
//             console.log("File made!");
//           }
//         }
//       );
//     }
//   });
//   rl.close();
// });
