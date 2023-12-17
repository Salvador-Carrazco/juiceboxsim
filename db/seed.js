 
const { getAllUsers } = require('./index');
   
 const createPsudeoUsers = async () => {
    await createuser({
        username: 'sal',
        password: 'me',
        name: 'salvador',
        location: 'you first, ny'
    });
    await createuser({
        username: 'joe',
        password: 'me',
        name: 'joe',
        location: 'it dont matter, ny'
    });
    await createuser({
        username: 'moe',
        password: 'me',
        name: 'moe',
        location: 'nunya, ny'
    });


};

const createPsudeoPosts = async () => {
   try {
    const [sal, joe, moe] = await getAllUsers();
    await createPost ({
        authorId: sal.id,
        title: 'how to make a sandwich',
        content: 'first, get a knife',
        tags: ['#food', '#sandwich', '#yum']
    });
    await createPost ({
        authorId: joe.id,
        title: 'how to hide your location',
        content: 'first dotn tell anyone',
        tags: [`#secretsquirrel`, `#catchmeifyoucan`, `#nunya`,`#hashttag`]
    });
    await createPost ({
        authorId: moe.id,
        title: 'how to make a post about a post',
        content: 'think of a posts post you want to post about and post it',
        tags: ['#overthinker', '#mybrainisbigger', '#megamind']
    });
   } catch (error) {
        throw error;
   }
}
    
module.exports = {
    createPsudeoUsers,
    createPsudeoPosts
};
