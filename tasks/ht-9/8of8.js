console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function escape(comm){
    comm = comm.replace(/&/g, '&amp;');
    comm = comm.replace(/'/g, "&#39;");
    comm = comm.replace(/"/g, '&quot;');
    comm = comm.replace(/</g, '&lt;');
    comm = comm.replace(/>/g, '&gt;');
    return comm;
}

function html(str, ...subst){
    var res = str[0];
    for(var i=0; i<subst.length; i++){
        res += escape(subst[i]);
        res += str[i+1];
    }
    return res;
}