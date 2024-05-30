Middelware wo Function hai jo har route se phle chalta hai
middelware ko .use() method se define krte hain

lekin isme ek dikkat hai .. jb request middelware me jati h to middelware me jate hi ruk jaati hai toh request ko dusre middelware tk pahuchane ya route tk pahuchane ke liye next() function ka use kiya jata hai