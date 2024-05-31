Middelware wo Function hai jo har route se phle chalta hai, aur usme likha code phle execute hota hai
middelware ko .use() method se define krte hain, iske pas har 'req'/'res' ka access sb se phle aata hai

lekin isme ek dikkat hai .. jb request middelware me jati h to middelware me jate hi ruk jaati hai toh request ko dusre middelware tk pahuchane ya route tk pahuchane ke liye next() function ka use kiya jata hai


=============req res and next==============

#req#
req me sara data hota hai user ke side ka 


#res#
res me controls hote hain jinke help se hum server se response bhejte hai aur server ki taraf se wo response use user ko jata hai jisne request ki thi

#next#
next ek push hota hai jisse request middelware me na atak kr route ki taraf move kar sake ya jo bhi chiz execute honi hai uss taraf move kar sake