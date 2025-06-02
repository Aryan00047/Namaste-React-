const parent = React.createElement('div',{id:"parent"},
    [React.createElement('div',{id: "child 1", key:'1'}, 
        [React.createElement('h1',{key:'1'},'Heading 1'),
        React.createElement('h2',{key:'2'},'Heading 2')
        ]
    ),
    React.createElement('div',{id:'Child 2', key:'2'},
        [React.createElement('h1',{key:'1'},'Heading 1'),
        React.createElement('h2',{key:'2'},'Heading 2')
    ])]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);