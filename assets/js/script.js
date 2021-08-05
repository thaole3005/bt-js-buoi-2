

window.addEventListener('DOMContentLoaded', (event) => {
    show_result_btns = document.querySelectorAll('.show_result_btn');
    show_result_p_Tags = document.querySelectorAll('.show_result');
    forms = document.getElementsByTagName('form');
    console.log(forms)

    show_result_btns.forEach((btn, index) => {
      
        btn.addEventListener('click', function(e) {
            clickHandle(btn, index);
        })
    })

    function clickHandle(btn,index) {
    //   console.log(((btn.className).split(" "))[3]);
    //   var x = ((btn.className).split(" "))[3];
    //   var p_tag = document.querySelector(`p.${x}`)
    //   console.log(p_tag);

    console.log(show_result_p_Tags[index]);
    var p_tag = show_result_p_Tags[index];
      console.log(index);
      if(index === 0) {
        result = handleBT1(index);
        p_tag.innerHTML = result + ' VND';
      } else if(index === 1) {
        result = handleBT2(index);
        p_tag.innerHTML = result;
      } else if(index === 2) {
        result = handleBT3(index);
        p_tag.innerHTML = result + " VND";
      }else if(index === 3) {
        result = handleBT4(index);
        p_tag.innerHTML = `chu vi: ${result[0]}, diện tích: ${result[1]}` ;
      }else {
        result = handleBT5(index);
        p_tag.innerHTML = result;
      }
    };


    var input = null;
    var form = null;
    var result = 0;
    
    function handleBT1 (index) {
       input = forms[index].elements[0];
        result = 0;
      var workDays = parseInt(input.value);
      result = 100000* workDays;
  
      return result;
    }
    

    function handleBT2 (index) {
       result = 0;
      var sum = 0;
      form = forms[index];
    

      for(var i=0; i< form.elements.length; i++) {
        sum += parseInt(form.elements[i].value);
      }
      result = sum/form.elements.length;
      console.log(result)
      return result;
    }

    function handleBT3 (index) {
      result = 0;
      form = forms[index];
      input = form.elements[0];
      result = 23500 * parseInt(input.value);
      console.log(result)
  
      return result;
    }


    function handleBT4 (index) {
      
      form = forms[index];
     var chuVi = ( parseInt(form.elements[0].value) + parseInt(form.elements[1].value) ) *2;
     var dienTich = parseInt(form.elements[0].value) * parseInt(form.elements[1].value);
      console.log(chuVi, dienTich)
   return [chuVi, dienTich];

   }


   function handleBT5 (index) {
    result = 0;
    form = forms[index];
    input = form.elements[0];
    var chuc = Math.floor(parseInt(input.value) / 10);
    var donVi = parseInt(input.value) % 10;
    result = chuc + donVi;

    return result;
  }










});




