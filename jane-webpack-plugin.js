class JaneWebpackPlugin {
  constructor() {}
  apply(compiler) {
    compiler.plugin("compilation", function(compilation) {
      console.log("==================");
      console.log("JaneWebpackPlugin");
      console.log("==================");
    });
  }
}
module.exports = JaneWebpackPlugin;

