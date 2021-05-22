const {readFile ,writeFile} =require('fs');

let posts = [{name :'post 1' , content : 'post 1 content'},
{name :'post 2' , content : 'post 2 content'}];



function createPost(posts){
    //console.log(this)
    let post ={name :'post 3' , content : 'post 3 content'}
    posts.push(post);
}


function Display(posts){
    //console.log(this)

    const content =+ '' ;
    for(let post=0 ; post<=posts.length ; post++){
        console.log('entered')
       console.log(posts[post]);
    }

}

const promisess =(posts) =>{ 
    //console.log(this)

    return new Promise((resolve , reject) =>{
        //console.log(this)
        //let post ={name :'post 3' , content : 'post 3 content'}
        //posts.push(post);
        createPost(posts);
        Display(posts);
        resolve();
        
    
});}

promisess(posts)
.then(()=>{
    console.log('got my result ')
})
.catch(()=>{
    console.log('failed');
})


//const start = async()=>{
//    await promisess(posts)
//    console.log('completed')
//}
////promisess.then('success');
////promisess.catch('error')
//
//start();