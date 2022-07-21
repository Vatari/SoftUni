function solve() {
    const protoType = {};
    const instance = Object.create(protoType);

    instance.extend = function (templates) {
        Object.entries(templates).forEach(([x, val]) => {
            if (typeof val === 'function') {
                protoType[x] = val;
            } else {
                instance[x] = val;
            }
        })
    };

    return instance;
}