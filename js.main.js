function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà !",   
text: "Thái Hoàng vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ",
imageUrl: "https://graph.facebook.com/100005293188983/picture?type=large",
  showCancelButton: true,
  confirmButtonColor: "#d3d030", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Đéo cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Thuỷ ? ", 
  text: "Nhập mã xác nhận nè ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "Thanhhoa") {   
  swal.showInputError("Nhập sai rồi kìa má ơi :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Chúc em một tuổi mới", 
  text: "Bớt xinh, đỗ đại học mình mong muốn, bắn pubg provip, nói chuyện luôn bựa, ngày này là ngày một thiên thần ra đời :D  anh mày định chúc bựa nhưng sợ bị chửi hic ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: " ĐM để tiếp tục " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("ok ! ", + inputValue + " Chúc em một ngày Sinh Nhật thật Vui Vẻ nhé ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ THÁI HOÀNG ,   tải lại trang nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

