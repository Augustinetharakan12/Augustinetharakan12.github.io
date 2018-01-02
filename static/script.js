$document.getElementById('addpost').addEventListener('submit',funct);
<script>
    document.getElementById('addpost').addEventListener('submit',funct);
    function funct(e){
        e.preventDefault();
        let title=document.getElementById('name').value;
        console.log('working');
        console.log(title);
        document.getElementById('new').innerHTML=title;
    }
</script>