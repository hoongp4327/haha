function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà từ Thái Hoàng !",   
text: "Tôi gửi bạn một món quà đặc biệt nhân ngày 1 cô bé đần ra đời ",
imageUrl: "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/299722013_1402027753623099_1874277685974387252_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=UvaBeSSQiDEAX_B7RxU&_nc_ht=scontent.fhan17-1.fna&oh=00_AT80Ng6xxq-H_0O1xkwyTl0JJVttGBxqaOMdgfJ6TgLWDA&oe=6340E0B8",
  showCancelButton: true,
  confirmButtonColor: "#d3d030", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần đâu", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Mai ? ", 
  text: "Nhập mã xác nhận hoặc liên hệ để nhận mã xác nhận ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "vaivtc") {   
  swal.showInputError("Nhập sai rồi bà già :) ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Chúc bạn một tuổi mới", 
  text: "Trap được nhiều chú bé đần, vui vẻ và hạnh phúc bên cạnh gia đình, bạn bè và thằng oắt con, rất xinh đẹp từ trần",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: " Quà trong ngăn bàn của Quân, gõ bất kỳ để đi nhận quà " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("ok ! ", + "OK nè" + " Chúc bạn có một ngày Sinh Nhật thật Vui Vẻ nhé ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN? ", "Bạn vừa từ chối món quà từ THOÀNG, bạn ý đã dỗi hãy tải lại trang nếu muốn nhận lại quà :) ", "error"); 

  } });



},8000);
}
htt_orion();

