const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('comment')
    try {
        const comments = await collection.find(criteria).toArray();
        return comments
    } catch (err) {
        console.log('ERROR: cannot find comments')
        throw err;
    }
}

async function getById(commentId) {
    const collection = await dbService.getCollection('comment')
    try {
        const comment = await collection.findOne({ "_id": ObjectId(commentId) })
        return comment
    } catch (err) {
        console.log(`ERROR: while finding comment ${commentId}`)
        throw err;
    }
}

async function remove(commentId) {
    const collection = await dbService.getCollection('comment')
    try {
        await collection.deleteOne({ "_id": ObjectId(commentId) })
    } catch (err) {
        console.log(`ERROR: cannot remove comment ${commentId}`)
        throw err;
    }
}

async function update(id, comment) {
    const collection = await dbService.getCollection('comment')
    delete comment._id
    try {
        await collection.replaceOne({ "_id": ObjectId(id) }, { $set: comment })
        comment._id = id;
        return comment
    } catch (err) {
        console.log(`ERROR: cannot update comment ${comment._id}`)
        throw err;
    }
}

async function add(comment) {
    const collection = await dbService.getCollection('comment')
    try {
        await collection.insertOne(comment);
        return comment;
    } catch (err) {
        console.log(`ERROR: cannot insert comment`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.commentName = filterBy.txt
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: +filterBy.minBalance }
    }
    return criteria;
}