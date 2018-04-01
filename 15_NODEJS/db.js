let id = 1;
let createId = () => id++;
let data = [
    {
        id: createId(),
        title: "Message 1",
        content: "Laborum do minim exercitation veniam aliquip in elit consectetur. Consequat eiusmod consequat duis mollit esse deserunt reprehenderit exercitation et anim commodo anim velit. In ipsum sit et officia dolor laborum aute esse eiusmod duis cillum. Est proident et officia sint non est enim. Ex est aliqua nisi consectetur amet irure reprehenderit aliquip esse."
    },
    {
        id: createId(),
        title: "Message 2",
        content: "Laborum do minim exercitation veniam aliquip in elit consectetur. Consequat eiusmod consequat duis mollit esse deserunt reprehenderit exercitation et anim commodo anim velit. In ipsum sit et officia dolor laborum aute esse eiusmod duis cillum. Est proident et officia sint non est enim. Ex est aliqua nisi consectetur amet irure reprehenderit aliquip esse."
    },
    {
        id: createId(),
        title: "Message 3",
        content: "Duis sit sunt reprehenderit nisi ea eu Lorem reprehenderit enim do cupidatat ex. Duis sunt veniam enim sunt voluptate excepteur. Excepteur enim sunt deserunt nisi excepteur consequat Lorem ex voluptate Lorem sunt. Reprehenderit exercitation consequat ipsum velit enim incididunt eu esse ea pariatur quis proident est. Anim ut ex ipsum fugiat velit do commodo velit aute quis aliquip nostrud. Ex consectetur ex sit ea in ad consectetur proident voluptate elit eu mollit. Irure veniam excepteur sit Lorem cillum Lorem minim pariatur."
    },
    {
        id: createId(),
        title: "Message 4",
        content: "Laborum do minim exercitation veniam aliquip in elit consectetur. Consequat eiusmod consequat duis mollit esse deserunt reprehenderit exercitation et anim commodo anim velit. In ipsum sit et officia dolor laborum aute esse eiusmod duis cillum. Est proident et officia sint non est enim. Ex est aliqua nisi consectetur amet irure reprehenderit aliquip esse."
    },
    {
        id: createId(),
        title: "Message 5",
        content: "Duis sit sunt reprehenderit nisi ea eu Lorem reprehenderit enim do cupidatat ex. Duis sunt veniam enim sunt voluptate excepteur. Excepteur enim sunt deserunt nisi excepteur consequat Lorem ex voluptate Lorem sunt. Reprehenderit exercitation consequat ipsum velit enim incididunt eu esse ea pariatur quis proident est. Anim ut ex ipsum fugiat velit do commodo velit aute quis aliquip nostrud. Ex consectetur ex sit ea in ad consectetur proident voluptate elit eu mollit. Irure veniam excepteur sit Lorem cillum Lorem minim pariatur."
    },
    {
        id: createId(),
        title: "Message 6",
        content: "Laborum do minim exercitation veniam aliquip in elit consectetur. Consequat eiusmod consequat duis mollit esse deserunt reprehenderit exercitation et anim commodo anim velit. In ipsum sit et officia dolor laborum aute esse eiusmod duis cillum. Est proident et officia sint non est enim. Ex est aliqua nisi consectetur amet irure reprehenderit aliquip esse."
    },
];
module.exports = {
    data: data,
    createId: createId
};
