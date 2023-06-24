import {} from "../../node_modules/jquery/dist/jquery.js";
const theme=()=> {
        var script = document.createElement('script');
        script.src = '/node_modules/jquery/dist/jquery.js';
        script.type = 'module';
        document.getElementsByTagName('body')[0].appendChild(script);
        console.log("theme.js")
        let theme = localStorage.getItem("theme");
        theme && document.body.classList.toggle(theme);
        
    //edit
            $(document).ready(function () {

                $(".toggle-button").click(function () {
        
                    if (theme == "dark") {
                        $(".toggle-button").toggleClass("fa-toggle-on");
                        $("body").toggleClass("light");
                        theme = "light";
                        localStorage.setItem("theme", "light");
                    }
                    else if (theme == "light") {
                        $(".toggle-button").toggleClass("fa-toggle-on");
                        $("body").toggleClass("light");
                        theme = "dark";
                        localStorage.setItem("theme", "dark");
                    }
                });
        
            });
    

}
export default theme;