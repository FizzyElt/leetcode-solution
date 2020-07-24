var numUniqueEmails = function (emails) {
    let resEmails = emails.map((item) => {
        let res = item.split('@')
        let temp1 = res[0].replace(/\./g,'')
        temp1 = temp1.split('+')[0]
        let domain = res[1]
        return temp1 +'@'+domain
    })
    let res = new Set(resEmails)
    return res.size
}
