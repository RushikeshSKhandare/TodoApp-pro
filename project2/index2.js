let data = [
    {
        name : 'rahul',
        age : 45
    },
    {
        name : 'satish ',
        age : 24
    },
    {
        name : 'rao',
        age : 28
    },
    {
        name : 'saurabh',
        age : 36
    },
    {
        name : 'jay',
        age : 30
    },
    {
        name : 'bghjgjgh',
        age : 12
    },
    {
        name : 'dfgdd',
        age : 12
    },
    {
        name : 'fghbv',
        age : 12
    },
    {
        name : 'fghbv',
        age : 12
    },
    {
        name : 'fghbv',
        age : 12
    },
    {
        name : 'fghbv',
        age : 12
    },
    {
        name : 'fghbv',
        age : 12
    },
    {
        name : 'fghbv',
        age : 12
    },
];
 const info = document.querySelector('#info')

 let details = data.map(function(item){
    return '<div>' + item.name +  " is " + item.age + " Years Old" +'</div>'
 })
 
info.innerHTML = details.join('\n');