let innertext11= document.querySelector('row');




$('.selecto').click(function(){
    $('.leftNav').toggle(500,function(){
        $('.search').slideToggle(500,function(){
            $('.categories').slideToggle(200,function(){
                $('.area').slideToggle(200,function(){
                    $('.ingred').slideToggle(200,function(){
                        $('.contact').slideToggle(500)
                    })
                })
            })
        })
    });
    

})
async function search(){
   
    var x= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    var response= await x.json();
    console.log(response.categories);
    var result=response.categories
   
   return response


}
search();

// function displayProduct(){
//     let products='';
//     for(let i=0;i<response.categories;i++){
//         products+=`
        // <div class="col-lg-3 position-relative">
                
        //         <div class="layer fs-2 flex-column justify-content-center px-3 "><div>${response.categories[i].strCategory}</div></div>


        //         <img class="w-100" src="images/asset 1.jpeg" alt="">


//             </div>
//         `
//     }
// }
























