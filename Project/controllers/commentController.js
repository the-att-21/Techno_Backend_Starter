const addComment = async (req, res) => {
    res.send("Comment added!");
}

const deleteComment = async (req, res) => {
    res.send("Comment deleted!");
}

const getComment = async (req, res) => {
    res.send("Single Comment!");
}

const getAllComment = async (req, res) => {
    res.send("All Comments!");
}

module.exports = { addComment, deleteComment, getAllComment, getComment };