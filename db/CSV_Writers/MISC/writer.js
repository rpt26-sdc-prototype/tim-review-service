module.exports = (writer, str) => {
  if (!writer.write(str)) {
    return new Promise((resolve) => {
      writer.once('drain', resolve);
    });
  };
}

// await (async function () {
//   try {
//     await new Promise((resolve, reject) => {
//       if (!stream.write(twentyFiveKStr)) {
//         stream.once('drain', resolve);
//       } else {
//         resolve();
//       }
//       // stream.write(twentyFiveKStr);
//       // resolve();
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }());