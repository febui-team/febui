const path = require('path')
const fs = require('fs')
const dirPath = path.resolve(__dirname,'./src')
const vscodePath = path.resolve(__dirname,'../.vscode')
if(!fs.existsSync(vscodePath)){
    fs.mkdirSync(vscodePath)
}
const author = process.env.npm_config_author

if(!author){
    console.log('代码片段创建失败，请指定作者（author）！');
    return
}

const fileNames = fs.readdirSync(dirPath)
fileNames.forEach((fileName) => {
    const srcPath = path.resolve(dirPath,fileName)
    const content = String(fs.readFileSync(srcPath)).replaceAll(/\r/g,'')
    const value = {}
    content.split('\n---snippets-div---\n').forEach(c => {
        const s0 = content.indexOf('\n')
        const s1 = content.indexOf('\n',s0+1)
        const s2 = content.indexOf('\n',s1+1)
        const name = content.substring(0,s0)
        value[name] = {
            prefix: content.substring(s0+1,s1),
            description:name,
            scope: content.substring(s1+1,s2),
            body: content.substring(s2+1).replaceAll(/\$\{AUTHOR\}/g,author).split("\n")
        }
    })
    
    const targetPath = path.resolve(vscodePath,fileName.replace('.txt','.code-snippets'))
    fs.writeFileSync(targetPath, JSON.stringify(value))
})
console.log('代码片段生成成功');
