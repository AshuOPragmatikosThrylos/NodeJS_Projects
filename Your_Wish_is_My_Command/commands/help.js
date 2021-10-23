function helpFn() {
    console.log(`
    Following commands are available for use:
                ywmc tree "directoryPath"
                ywmc organize "directoryPath"
                ywmc help
                `);
}
module.exports = {
    helpKey: helpFn
}