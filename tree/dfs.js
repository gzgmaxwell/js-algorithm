const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                }
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                },
                {
                    val: 'g',
                    children: [],
                }
            ],
        }
    ],
};

const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
};


const dfs = (root) => {
    root.children.forEach(v => {
        dfs(v)
    })
}

dfs(tree);