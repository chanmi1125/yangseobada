const path = require('path');


console.log(__filename);
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

console.log(process.env.PATH);
process.env.PATH.split(path.delimiter);

console.log(__filename);
console.log(path.dirname(__filename));

console.log(path.extname('index.html'));

path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});

path.format({
    root:'/',
    base: 'file.txt',
    ext: 'ignored'
});

path.format({
    root: '/',
    name: 'file',
    ext:'.txt'
});

path.join('/foo','bar','baz/asdf');
path.parse('/home/user/dir/file.txt');

console.log(path.sep);
'foo\\bar\\baz'.split(path.sep);
