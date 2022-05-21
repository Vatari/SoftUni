function matchFullName (text) {
    let names = []
    let pattern = /\b[A-Z][a-z]+[ ]+[A-Z][a-z]+\b/g
    let name = null
   
    while ((name = pattern.exec(text)) !== null) {
        names.push(name[0])
    }
    console.log(names.join(' '));
}
matchFullName('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov, Ivan Ivanov')