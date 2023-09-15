const featureFuncs={};

featureFuncs.getPathCount=(paths)=>{
    return paths.length;
}

featureFuncs.getPointCount=(paths)=>{
    const points=paths.flat();
    return points.length;
}

featureFuncs.getHight=(paths)=>{
    const points=paths.flat();
    const y=points.map(p=>p[1]);
    const min=Math.min(...y);
    const max=Math.max(...y);
    return max-min;
}

featureFuncs.getWidth=(paths)=>{
    const points=paths.flat();
    const x=points.map(p=>p[0]);
    const min=Math.min(...x);
    const max=Math.max(...x);
    return max-min;
}

featureFuncs.inUse=[
    //{name:"Path Count",function:featureFuncs.getPathCount},
    //{name:"Point Count",function:featureFuncs.getPointCount},
    {name:"width", function:featureFuncs.getWidth},
    {name:"hight", function:featureFuncs.getHight}
];

if(typeof module!=='undefined'){
    module.exports=featureFuncs;
}