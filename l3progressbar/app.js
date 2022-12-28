var getprogressbar = document.querySelector('.progress-bar');
var getdownloadbtn = document.querySelector('.download-btn');
var seturl = "htttps://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
    // console.log('hi');

    getdownloadbtn.setAttribute("disabled",true);

    var setWidth = 0;

    var setinv =  setInterval(progressinc,100);

    function progressinc(){
        setWidth++;

        if(setWidth >= 100){
            clearInterval(setinv);
            setWidth = 0;
            window.location.href = seturl;
        }else{
            setWidth++;
            getprogressbar.style.width = `${setWidth}%`;
            getprogressbar.setAttribute('data-inc',`${setWidth}%`);
        }
    }

    progressinc();
    // console.log(setWidth);
});

// 10PG

