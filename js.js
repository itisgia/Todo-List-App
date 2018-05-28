

      (function() {

        //global variables

        var addBtn = document.getElementById('top-button');
        var divBox = document.getElementById('containerSec');
        var closeBtn = document.getElementsByClassName('close');
        var checkBtn = document.getElementsByClassName('form-check-input');
        var ptags = document.getElementsByTagName('p');
        //add new lists
        function createItem () {
              var input = document.getElementById('adInput').value;
        			var newLine = '<div class="col-sm">';
              newLine += '       <div class="form-check">';
              newLine += '          <input type="checkbox" class="form-check-input" id="exampleCheck1"> ';
              newLine += '        </div>';
              newLine += '        <p id="ptags">';
        			newLine +=          input;
              newLine += '        </p>';
              newLine += '		    <button type="button" class="close" aria-label="Close" id="closeBtn">';
        			newLine += '		        <span aria-hidden="true">&times;';
        			newLine += '            </span>'
        			newLine += '		    </button>';
        			newLine += '	</div>'
        			divBox.insertAdjacentHTML('afterbegin', newLine)
        			document.getElementById('adInput').value = '';
              close();

            // closeBtn[0].addEventListener('click', close ,false);
            checkBtn[0].addEventListener('click',check , false);

        }

      //when the add button clicked, input value is added inside the div with a close button
	    addBtn.addEventListener('click', createItem, false);

     //close Button
      function close () {
        for (var i = 0; i < closeBtn.length; i++) {

            //when Btn is cllicked, btn's parentNode outerHTML none
            closeBtn[i].addEventListener('click', function(){
              // console.log(closeBtn);
              console.dir(this.parentElement);
              var rightParent = this.parentElement;
              rightParent.remove();
              // this.parentNode.outerHTML = '';
        }, false); //addEventLister ENDS
      }//for loop ENDS
    }

  //     function close () {
  //       //when Btn is cllicked, btn's parentNode outerHTML none
  //       this.parentNode.outerHTML = '';
  // }

      function check(elements){
        if (true) {

        } else {

        }
        ptags["0"].style.textDecoration = 'line-through';
      }

   }()); //iife ENDS
