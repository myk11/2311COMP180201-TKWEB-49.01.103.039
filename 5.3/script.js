const btn= document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button, index){
    button.addEventListener( "click",function(event) {{
        var btnItem= event.target
        var product= btnItem.parentElement
        var productImg=product.querySelector("img").src
        var productName=product.querySelector("h1").innerText
        var productPrice=product.querySelector("span").innerText
       // console.log(productPrice.productImg.ProductName)
        addcart(productPrice, productImg, productName)

    }})

})
function addcart (productPrice,productImg,productName){
    var addtr=document.createElement("tr")
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length; i++){
        var productT=document.querySelectorAll(".title")
        if(productT[i].innerHTML==productName){
            alert("Sản phẩm hiện đã có trong giỏ hàng!")
            return

        }
    }
    var trcontent= '<tr><td style="display: flex; align-items: center;" ><img style="width:70px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span ></td><td><p><span class="prices"> '+productPrice+'</span><sup>d</sup></p></td> <td><input style="width:30px; outline:none; " type="number" value="1" min="1" max="20"> </td><td style="cursor: pointer;"><span class="cartdelete">Xoá</span></td></tr>'
    addtr.innerHTML=trcontent
    var cartTable= document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    
    carttotol()
    deleteCart()
}

///////////////////////////*
function carttotol(){
    var cartItem=document.querySelectorAll("tbody tr")
    var totalC= 0
    //console.log("carItem")
    for(var i=0; i<cartItem.length; i++){
        var inputValue= cartItem[i].querySelector("input").value
        var productPrice=cartItem[i].querySelector(".prices").innerHTML
        totalA= inputValue*productPrice*1000
        totalB=totalA.toLocaleString('de-DE')
        
        totalC=totalC+totalA
        //totalD=totalC.toLocaleString('de-DE')
        //console.log(  totalC)

    }
    var cartTotalA=document.querySelector(".price-total span")
    var cartPrice= document.querySelector(".cart-icon span")
    cartTotalA.innerHTML=totalC.toLocaleString('de-DE')
    cartPrice.innerHTML=totalC.toLocaleString('de-DE')
    inputchange()
    //console.log( cartTotalA)


}
/*-0000000000000000-----------------------*/
function deleteCart(){
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length; i++){
        var productT=document.querySelectorAll(".cartdelete")
        productT[i].addEventListener("click",function(event) {
            var cartDelete = event.target
            var carItemR = cartDelete.parentElement.parentElement
            carItemR.remove()
            carttotol()
            //console.log(carItemR)

        })
     
      
    }
   
}
function inputchange(){
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length; i++){
        var inputvalue=cartItem[i].querySelector("input")
        inputvalue.addEventListener("change",function(){
            carttotol()
        })
      
    }

}
const cartbtn=document.querySelector(".fa-times")
const cartshow=document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right="0"
})

cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right="-100%"
})


