import { useEffect } from "react";

export default function Cards() {
  const handleClick = function () {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  };

  const handleBtnClick = function (e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  };

      useEffect(() => {
      // Your DOM manipulation code goes here
      const $cont = document.querySelector('.cont');
      const $elsArr = [].slice.call(document.querySelectorAll('.el'));
      const $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
  
      // Remove 's--inactive' class after 2000 milliseconds
      setTimeout(() => {
        $cont.classList.remove('s--inactive');
      }, 2000);

        $elsArr.forEach(($el) => {
      $el.addEventListener('click', handleClick);
    });
  
    $closeBtnsArr.forEach(($btn) => {
      $btn.addEventListener('click', handleBtnClick);
    });
  
    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      $elsArr.forEach(($el) => $el.removeEventListener('click', handleClick));
      $closeBtnsArr.forEach(($btn) => $btn.removeEventListener('click', handleBtnClick));
    };
  }, []);

  // Declare $cont here to fix the ESLint error
  const $cont = document.querySelector('.cont');
  
      // // Add click event listeners to each element in $elsArr
      // $elsArr.forEach(($el) => {
      //   $el.addEventListener('click', function () {
      //     if (this.classList.contains('s--active')) return;
      //     $cont.classList.add('s--el-active');
      //     this.classList.add('s--active');
      //   });
      // });
  
      // // Add click event listeners to each element in $closeBtnsArr
      // $closeBtnsArr.forEach(($btn) => {
      //   $btn.addEventListener('click', function (e) {
      //     e.stopPropagation();
      //     $cont.classList.remove('s--el-active');
      //     document.querySelector('.el.s--active').classList.remove('s--active');
      //   });
      // });
  
    // Empty dependency array ensures that the effect runs once after the initial render
  
    return (
      // Your JSX for rendering goes here
      <div className="cont s--inactive">
        <div className="cont__inner">
          <div className="el">
            <div className="el__overflow">
              <div className="el__inner">
                <div className="el__bg"></div>
                <div className="el__preview-cont">
                  <h2 className="el__heading"> My Projects</h2>
                </div>

                <div className="el__content">
                  <div className="el__text"> Whatever </div>
                  <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

      </div>
    );
  };


//    var $cont = document.querySelector('.cont');
//    var $elsArr = [].slice.call(document.querySelectorAll('.el'));
//    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

//    setTimeout(function() {
//        $cont.classList.remove('s--inactive');
//    }, 2000);
   
//    $elsArr.forEach(function($el) {
//        $el.addEventListener('click', function(){
//            if(this.classList.contains('s--active')) return;
//            $cont.classList.add('s--el-active');
//            this.classList.add('s--active');
//        });   
//    });
   
//    $closeBtnsArr.forEach(function($btn) {
//        $btn.addEventListener('click', function(e){
//            e.stopPropagation();
//            $cont.classList.remove('s--el-active');
//            document.querySelector('.el.s--active').classList.remove('s--active');
//        });
//    });