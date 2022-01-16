function downLoad(){
    var a = document.createElement('a');
    a.href = myChart.toBase64Image();
    a.download = 'my_file_name.png';
    
    // Trigger the download
    a.click();


}