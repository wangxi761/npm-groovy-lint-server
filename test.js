const format=require('./format.js');

(async () => {
    format(`
def a(){
        println "hello"
}    
    `).then((result) => {
        console.log(result);
    });
})();