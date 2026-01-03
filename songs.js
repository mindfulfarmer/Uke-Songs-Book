const songDatabase = [
    // ===========================
    // ENGLISH / GLOBAL HITS
    // ===========================
    {
        id: 1,
        title: "Riptide",
        artist: "Vance Joy",
        language: "English",
        lyrics: `
[Am] I was scared of [G] dentists and the [C] dark
[Am] I was scared of [G] pretty girls and [C] starting conversations
[Am] Oh, all my [G] friends are turning [C] green
[Am] You're the magician's [G] assistant in their [C] dream

[Am] Ooh, [G] ooh, [C] ooh
[Am] Ooh, [G] ooh, and they [C] come unstuck

[Am] Lady, [G] running down to the [C] riptide
Taken away to the [Am] dark side
[G] I wanna be your [C] left hand man
[Am] I love you [G] when you're singing that [C] song
And I got a lump in my [Am] throat
'Cause [G] you're gonna sing the words [C] wrong
`
    },
    {
        id: 2,
        title: "Somewhere Over The Rainbow",
        artist: "Israel Kamakawiwo'ole",
        language: "English",
        lyrics: `
[C] Somewhere [Em] over the rainbow
[F] Way up [C] high
[F] And the [C] dreams that you dream of
[G] Once in a lulla[Am]by [F]

[C] Somewhere [Em] over the rainbow
[F] Bluebirds [C] fly
[F] And the [C] dreams that you dream of
[G] Dreams really do come [Am] true [F]

Someday I'll wish upon a star
And [G] wake up where the clouds are far be[Am]hind me
Where [C] troubles melt like lemon drops
A[G]way above the chimney tops
That's [Am] where you'll [F] find me
`
    },
    {
        id: 3,
        title: "I'm Yours",
        artist: "Jason Mraz",
        language: "English",
        lyrics: `
Well you [C] done done me and you bet I felt it
I [G] tried to be chill but you're so hot that I melted
I [Am] fell right through the cracks
And now I'm [F] trying to get back

Before the [C] cool done run out I'll be giving it my bestest
And [G] nothing's gonna stop me but divine intervention
I [Am] reckon it's again my turn
To [F] win some or learn some

But I [C] won't hesitate no more, no [G] more
It cannot [Am] wait, I'm [F] yours
`
    },
    {
        id: 4,
        title: "Can't Help Falling in Love",
        artist: "Elvis Presley",
        language: "English",
        lyrics: `
[C] Wise [Em] men [Am] say
Only [F] fools [C] rush [G] in
But [F] I [G] can't [Am] help [F] falling in [C] love [G] with [C] you

[C] Shall [Em] I [Am] stay?
Would it [F] be [C] a [G] sin?
If [F] I [G] can't [Am] help [F] falling in [C] love [G] with [C] you

Like a river [G] flows [Am] surely to the [Em] sea
[Am] Darling so it [G] goes
[Am] Some things [F] are meant to [G] be
`
    },
    {
        id: 5,
        title: "Perfect",
        artist: "Ed Sheeran",
        language: "English",
        lyrics: `
[G] I found a [Em] love for [C] me
Oh [D] darling just dive right [G] in, and follow my [D] lead
[G] Well I found a [Em] girl beautiful and [C] sweet 
[D] I never knew you were the [G] someone waiting for [D] me

[G] Baby, I'm [Em] dancing in the [C] dark, with you between my [D] arms
[G] Barefoot on the [Em] grass, listening to our [C] favorite song
When you [D] said you looked a [G] mess, I whispered [Em] underneath my breath
But you [C] heard it, darling [D] you look [G] perfect tonight
`
    },

    // --- THE BEATLES (5 Tracks) ---
    {
        id: 6,
        title: "Let It Be",
        artist: "The Beatles",
        language: "English",
        lyrics: `
When I [C] find myself in [G] times of trouble
[Am] Mother Mary [F] comes to me
[C] Speaking words of [G] wisdom, let it [F] be [C]

And [C] in my hour of [G] darkness
She is [Am] standing right in [F] front of me
[C] Speaking words of [G] wisdom, let it [F] be [C]

Let it [Am] be, let it [G] be, let it [F] be, let it [C] be
[C] Whisper words of [G] wisdom, let it [F] be [C]
`
    },
    {
        id: 7,
        title: "Hey Jude",
        artist: "The Beatles",
        language: "English",
        lyrics: `
Hey [C] Jude, don't make it [G] bad
Take a [G7] sad song and make it [C] better
Re[F]member to let her into your [C] heart
Then you can [G] start to make it [C] better

Hey [C] Jude, don't be a[G]fraid
You were [G7] made to go out and [C] get her
The [F] minute you let her under your [C] skin
Then you be[G]gin to make it [C] better
`
    },
    {
        id: 8,
        title: "Yesterday",
        artist: "The Beatles",
        language: "English",
        lyrics: `
[C] Yesterday, [Em] all my troubles seemed so [Am] far away
[F] Now it [G] looks as though they're [C] here to stay
Oh, [Am] I be[D]lieve in [F] yes[C]terday

[C] Suddenly, [Em] I'm not half the man I [Am] used to be
[F] There's a [G] shadow hanging [C] over me
Oh, [Am] yester[D]day came [F] sud[C]denly
`
    },
    {
        id: 9,
        title: "Yellow Submarine",
        artist: "The Beatles",
        language: "English",
        lyrics: `
In the [C] town where [F] I was [C] born
Lived a [Dm] man who [G] sailed to [C] sea
And he [C] told us [F] of his [C] life
In the [Dm] land of [G] subma[C]rines

[C] We all live in a [G] yellow submarine
[G] Yellow submarine, [C] yellow submarine
[C] We all live in a [G] yellow submarine
[G] Yellow submarine, [C] yellow submarine
`
    },
    {
        id: 10,
        title: "Here Comes The Sun",
        artist: "The Beatles",
        language: "English",
        lyrics: `
[C] Here comes the sun, doo doo doo doo
[F] Here comes the [G7] sun, and I say
[C] It's all right

[C] Little darling, it's been a [F] long cold lonely [G] winter
[C] Little darling, it feels like [F] years since it's been [G] here
[C] Here comes the sun, doo doo doo doo
[F] Here comes the [G7] sun, and I say
[C] It's all right
`
    },

    // --- PINK FLOYD (5 Tracks) ---
    {
        id: 11,
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        language: "English",
        lyrics: `
[C] So, so you think you can [D] tell
Heaven from [Am] hell
Blue skies from [G] pain
Can you tell a green [D] field
From a cold steel [C] rail?
A smile from a [Am] veil?
Do you think you can [G] tell?

[C] How I wish, how I wish you were [D] here
We're just [Am] two lost souls swimming in a fish bowl
[G] Year after year
[D] Running over the same old ground
[C] What have we found?
The same old [Am] fears
Wish you were [G] here
`
    },
    {
        id: 12,
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        language: "English",
        lyrics: `
[Bm] Hello? Is there [A] anybody in there?
Just nod if you can [G] hear me
Is there [Em] anyone [Bm] home?

[D] There is no pain you are re[A]ceding
[D] A distant ship smoke on the ho[A]rizon
[C] You are only coming through in [G] waves
[C] Your lips move but I can't hear what you're [G] saying

[D] When I was a child I had a [A] fever
[D] My hands felt just like two bal[A]loons
[C] Now I've got that feeling once a[G]gain
I can't explain, you would not [C] understand
This is not how I [G] am
[A] I have [C] become comfortably [G] numb [D]
`
    },
    {
        id: 13,
        title: "Another Brick in the Wall (Pt 2)",
        artist: "Pink Floyd",
        language: "English",
        lyrics: `
[Dm] We don't need no education
[Dm] We don't need no thought control
[Dm] No dark sarcasm in the classroom
[Dm] Teachers leave them kids alone

[G] Hey! Teacher! [Dm] Leave them kids alone!
[F] All in all it's just a[C]nother brick in the [Dm] wall
[F] All in all you're just a[C]nother brick in the [Dm] wall
`
    },
    {
        id: 14,
        title: "Time",
        artist: "Pink Floyd",
        language: "English",
        lyrics: `
[F#m] Ticking away the moments that make up a [A] dull day
[E] Fritter and waste the hours in an offhand [F#m] way
[F#m] Kicking around on a piece of ground in your [A] home town
[E] Waiting for someone or something to show you the [F#m] way

[D] Tired of lying in the sunshine [A] staying home to watch the rain
[D] You are young and life is long and [A] there is time to kill today
[D] And then one day you find [C#m] ten years have got behind you
[Bm] No one told you when to run, [E] you missed the starting gun
`
    },
    {
        id: 15,
        title: "Mother",
        artist: "Pink Floyd",
        language: "English",
        lyrics: `
[G] Mother do you think they'll drop the [C] bomb? [G]
[G] Mother do you think they'll like this [C] song? [G]
[C] Mother do you think they'll try to break my [G] balls?
[D] Ooh, ah, mother should I build the [C] wall?
[G] Mother should I run for presi[C]dent? [G]
[G] Mother should I trust the govern[C]ment? [G]
[D] Ooh, ah, is it just a waste of [C] time?
[G] Hush now baby, baby, don't you [C] cry
`
    },

    // ===========================
    // HINDI / BOLLYWOOD HITS
    // ===========================
    {
        id: 16,
        title: "Give Me Some Sunshine",
        artist: "3 Idiots",
        language: "Hindi",
        lyrics: `
[C] Saari umar hum
[F] Mar mar ke jee liye
[G] Ek pal to ab humein [C] jeene do
[C] Jeene do

[C] Give me some sunshine
[F] Give me some rain
[G] Give me another chance
[C] I wanna grow up once again
`
    },
    {
        id: 17,
        title: "Pani Da Rang",
        artist: "Ayushmann Khurrana",
        language: "Hindi",
        lyrics: `
[Em] Pani da [D] rang vekh ke
[C] Ankhiyaan jo [D] anju rul [Em] de
[Em] Pani da [D] rang vekh ke
[C] Ankhiyaan jo [D] anju rul [Em] de

[Em] Maahiya na aaya mera
[D] Maahiya na aaya
[C] Ranjhna na [D] aaya mera
[C] Maahiya na [D] aaya
`
    },
    {
        id: 18,
        title: "Jeena Jeena",
        artist: "Atif Aslam",
        language: "Hindi",
        lyrics: `
[D] Dehleez pe [G] mere dil ki
[Bm] Jo rakhe hain [A] tune kadam
[D] Tere naam pe [G] meri zindagi
[Bm] Likh di [A] mere humdum

Haan [G] seekha maine [A] jeena jeena [D] kaise jeena
Haan [G] seekha maine [A] jeena mere [D] humdum

[D] Na seekha kabhi [G] jeena jeena [A] kaise jeena
[D] Na seekha jeena [G] tere bina [D] humdum
`
    },
    {
        id: 19,
        title: "Channa Mereya",
        artist: "Arijit Singh",
        language: "Hindi",
        lyrics: `
[Am] Acha chalta hoon
[F] Duaon mein yaad [G] rakhna
[Am] Mere zikr ka zubaan pe [F] swaad [G] rakhna

[Am] Dil ke sandookon mein
[F] Mere ache kaam [G] rakhna
[Am] Chitthi taaron mein bhi
[F] Mera tu salaam [G] rakhna

[Am] Andhera tera [F] maine le liya
[C] Mera ujla sitaara [G] tere naam kiya
[Am] Channa mereya [F] mereya
[C] Channa mereya [G] mereya
`
    },
    {
        id: 20,
        title: "Kal Ho Naa Ho",
        artist: "Sonu Nigam / Shankar-Ehsaan-Loy",
        language: "Hindi",
        lyrics: `
[C] Har ghadi badal rahi hai [Am] roop zindagi
[F] Chaav hai kahin hai [G] dhoop zindagi
[C] Har pal yahan [Am] jee bhar jiyo
[F] Jo hai samaa, [G] kal ho naa [C] ho

[C] Chahe jo tumhe [Am] poore dil se
[F] Milta hai woh [G] mushkil se
[C] Aisa jo koi [Am] kahin hai
[F] Bas vahi sabse [G] hasin hai
[C] Us haath ko [Am] tum thaam lo
[F] Woh meherbaan [G] kal ho naa [C] ho
`
    },
    {
        id: 21,
        title: "Mitwa",
        artist: "Shafqat Amanat Ali (KANK)",
        language: "Hindi",
        lyrics: `
[G] Jaaniye [C] Heeriye
[G] Jaaniye [C] Heeriye

[G] Mere mann ye [Em] bata de tu
[C] Kis or chala hai [D] tu
[G] Kya paya nahi [Em] tune
[C] Kya dhundh raha hai [D] tu

Jo [G] hai ankahee jo [Em] hai ansuni
Woh [C] baat kya hai [D] bata
[G] Mitwa... kahe [C] dhadkanein tujhse [G] kya
[G] Mitwa... ye [C] khudse toh na tu [G] chupa
`
    },
    {
        id: 22,
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        language: "Hindi",
        lyrics: `
[Em] Hum tere bin ab [C] reh nahi sakte
[D] Tere bina kya [Bm] wajood me[C]ra
[Em] Tujhse juda gar [C] ho jaayenge
[D] Toh khud se hi ho [Bm] jaayenge ju[C]da

[Em] Kyunki tum hi ho
[Am] Ab tum hi ho
[D] Zindagi ab [Bm] tum hi [C] ho
[Em] Chain bhi, mera [Am] dard bhi
[D] Meri aashiqui ab [Bm] tum hi [Em] ho
`
    },
    {
        id: 23,
        title: "Pehli Nazar Mein",
        artist: "Atif Aslam",
        language: "Hindi",
        lyrics: `
[G] Pehli nazar mein [Em] kaisa jaadoo kar diya
[C] Tera ban baitha hai [D] mera jiya
[G] Jaane kya hoga [Em] kya hoga kya pata
[C] Is pal ko milke [D] aa jee le zara

[G] Mein hoon yahan [Em] tu hai yahan
[C] Meri bahon mein aa [D] aa bhi ja
[G] O jaan-e-jaan [Em] donon jahan
[C] Meri bahon mein aa [D] bhool ja
[Am] Baby I [D] love you...
`
    },
    {
        id: 24,
        title: "Dil Chahta Hai",
        artist: "Shankar Mahadevan",
        language: "Hindi",
        lyrics: `
[G] Dil chahta hai
[C] Kabhi na beete [D] chamkeele din
[G] Dil chahta hai
[C] Hum na rahein ka[D]bhi yaaron ke bin

[C] Din din bhar ho [Bm] pyaari baatein
[Am] Jhoomein shaamein, [D] gaayein raatein
[G] Masti mein rahe [D] dooba dooba [G] hamesha samaa
[C] Humko raahon mein [D] yunhi milti ra[G]hein khushiyan
`
    },
    {
        id: 25,
        title: "Maa",
        artist: "Shankar Mahadevan (Taare Zameen Par)",
        language: "Hindi",
        lyrics: `
[D] Main kabhi batlaata [G] nahin
[A] Par andhere se darta hoon main [D] maa
[D] Yun to main dikhlaata [G] nahin
[A] Teri parwaah karta hoon main [D] maa
[G] Tujhe sab [A] hai pata... hai na [D] maa?

[D] Jab bhi chot [A] lagti hai
[G] Toh muh se [A] maa hi nikalta [D] hai
[D] Bheed mein yun [A] aksar main
[G] Chupke se [A] haath tera thaamta [D] hai
`
    },
    {
        id: 26,
        title: "Tu Hi Re",
        artist: "A.R. Rahman (Hariharan)",
        language: "Hindi",
        lyrics: `
[Am] Tu hi re, [G] tu hi re 
Tere [F] bina main kaise [E] jiyun
[Am] Aaja re, [G] aaja re 
Yun he [F] tadpa na tu [E] mujhko

[Am] Jaan re, [G] jaan re
In [F] saanson mein bas ja [E] tu
[Am] Chaand re, [G] chaand re
Aaja [F] dil ki zameen pe [E] tu

[Am] Chahat hai agar [G] aake mujhse [F] mil ja [G] tu
[Am] Ya phir aisa kar, [G] dharti se mi[F]ta de [G] mujhko
[F] Tu hi re, [G] tu hi re...
`
    },
    {
        id: 27,
        title: "Dil Se Re",
        artist: "A.R. Rahman",
        language: "Hindi",
        lyrics: `
[Am] Ek suraj [G] nikla tha
[F] Kuch paara [E] pighla tha
[Am] Ek aandhi [G] aayi thi
[F] Jab dil se [E] aah nikli thi

[Am] Dil se re...
[G] Dil se re...
[F] Dil se re...
[E] Dil se re...

[Am] Dil toh aakhir [G] dil hai na
[F] Meethi si [E] mushkil hai na
[Am] Piya piya [G] piya piya 
[F] Piya piya [E] piya...
`
    },
    {
        id: 28,
        title: "Agar Tum Saath Ho",
        artist: "A.R. Rahman (Alka Yagnik, Arijit)",
        language: "Hindi",
        lyrics: `
[C] Pal bhar theher [Em] jaao
[D] Dil ye sambhal [Em] jaaye
[C] Kaise tumhe [Em] roka karun
[D] Meri taraf [Em] aata har gham [C] phisal jaaye

[C] Aankhon mein [Em] dooba rahoon
[D] Teri aankhon mein [Em] dooba rahoon
[C] Palkon pe [Em] rakh loon tumhe
[D] Sapnon mein [Em] roz [G] bulaun

[G] Tum saath ho ya na [Em] ho
[Bm] Kya fark hai
[G] Bedard thi zinda[Em]gi
[Bm] Bedard hai
[C] Agar tum saath [D] ho... [Em]
`
    },
    {
        id: 29,
        title: "Roja Janeman",
        artist: "Hariharan / A.R. Rahman",
        language: "Hindi",
        lyrics: `
[Am] Roja jaaneman [G] tu hi mera dil
[F] Tujh bin tarse [G] naina
[Am] Dil se na jaati hai [G] yaadein tumhari
[F] Kaise tum bin [G] jeena

[Am] Aankhon mein tu hai
[G] Aansu mein tu hai
[F] Aankhein band kar [E] loon
[F] Toh mann mein bhi [E] tu hai
[Am] Khwaabon mein tu [G] saanson mein tu
[F] Roja... [G] Roja... [Am] Roja...
`
    },
    {
        id: 30,
        title: "Pal",
        artist: "KK",
        language: "Hindi",
        lyrics: `
[Em] Hum, rahe ya na [D] rahe kal
[C] Kal yaad aayenge [D] ye pal
[Em] Pal, ye hain pyaar [D] ke pal
[C] Chal, aa mere sang [D] chal

[Em] Chal, soche kya [D] chhoti si hai zindagi
[C] Kal mil jaaye [D] to hogi khushnaseebi
[Em] Hum rahe ya na [D] rahe, yaad aayenge [C] ye pal
`
    },
    {
        id: 31,
        title: "Yaaron",
        artist: "KK",
        language: "Hindi",
        lyrics: `
[G] Yaaron dosti [Em] badi hi haseen hai
[C] Yeh na ho to [D] kya phir bolo yeh zindagi hai
[G] Koi to ho raaz[Em]daar
[C] Begaraaz tera [D] yaar
[G] Koi to ho raaz[Em]daar

[G] Yaaron mohabbat [Em] hi to bandagi hai
[C] Yeh na ho to [D] kya phir bolo yeh zindagi hai
`
    },
    {
        id: 32,
        title: "Tadap Tadap",
        artist: "KK (Hum Dil De Chuke Sanam)",
        language: "Hindi",
        lyrics: `
[Em] Bejaan dil ko [D] bejaan dil ko
[C] Bejaan dil ko [D] tere ishq ne zinda [Em] kiya
[Em] Phir tere ishq ne [D] hi is dil ko tabah [Em] kiya

[Em] Tadap tadap ke [D] is dil se aah [C] nikalti rahi
[D] Mujhko saza di [Bm] pyaar ki
[C] Aisa kya gunaah [D] kiya
[C] To lut gaye... [D] haan lut gaye
[C] To lut gaye hum [D] teri mohabbat [Em] mein
`
    },

    // --- KISHORE KUMAR (5 Tracks) ---
    {
        id: 33,
        title: "Mere Sapno Ki Rani",
        artist: "Kishore Kumar",
        language: "Hindi",
        lyrics: `
[Am] Mere sapno ki rani kab [G] aayegi tu
[Am] Aayi rut mastaani kab [G] aayegi tu
[Am] Beeti jaaye zindagaani kab [G] aayegi tu
[F] Chali aa, [E] aa tu chali [Am] aa

[Am] Pyaar ki galiyaan, [G] baagon ki kaliyaan
[F] Sab rang [G] raliyaan [Am] pooch rahi hain
[Am] Geet panghat pe [G] kis din gaayegi tu
[F] Mere sapno ki rani kab [E] aayegi tu
`
    },
    {
        id: 34,
        title: "Humein Tumse Pyaar Kitna",
        artist: "Kishore Kumar",
        language: "Hindi",
        lyrics: `
[C] Humein tumse [Em] pyaar kitna
[F] Yeh hum nahi [G] jaante
[C] Magar jee [Em] nahi sakte
[F] Tumhare [G] bina

[C] Suna gham ju[Em]daayi ka
[F] Uthaate hain [G] log
[C] Jaane zinda[Em]gi kaise
[F] Bitaate hain [G] log
[C] Magar hum toh [Em] mar jaayenge
[F] Tumhare [G] bina
`
    },
    {
        id: 35,
        title: "O Mere Dil Ke Chain",
        artist: "Kishore Kumar",
        language: "Hindi",
        lyrics: `
[Am] O mere, [G] dil ke chain
[Am] O mere, [G] dil ke chain
[F] Chain aaye [G] mere dil ko
[F] Dua kiji[Am]ye

[Am] Apna hi saaya [G] dekh ke tum
[F] Jaane jahan shar[Am]ma gaye
[Am] Abhi toh yeh pehli [G] manzil hai
[F] Tum toh abhi se [Am] ghabra gaye
`
    },
    {
        id: 36,
        title: "Ek Ladki Bheegi Bhaagi Si",
        artist: "Kishore Kumar",
        language: "Hindi",
        lyrics: `
[Am] Ek ladki [C] bheegi bhaagi si
[G] Soti raaton mein [Am] jaagi si
[Am] Mili ek ajna[G]bi se
[F] Koi aage na [E] peeche
[F] Tum hi kaho yeh [E] koi baat hai
[Am] Hmm...
`
    },
    {
        id: 37,
        title: "Chookar Mere Mann Ko",
        artist: "Kishore Kumar",
        language: "Hindi",
        lyrics: `
[G] Chookar mere mann ko
[G] Kiya tune [C] kya ishaara
[Am] Badla yeh [D] mausam
[D] Lage pyaara [G] jag saara

[G] Tu jo kahe [D] jeevan bhar
[Am] Tere liye [C] main gaaoon
[G] Tere mein [D] bheegi re
[Am] Geet kabhi [G] gungunaaoon
[C] Mere dil [Em] mein ab toh
[Am] Rahe bas [D] pyaar tumhara
`
    },
    
    // --- LATA MANGESHKAR (5 Tracks) ---
    {
        id: 38,
        title: "Lag Ja Gale",
        artist: "Lata Mangeshkar",
        language: "Hindi",
        lyrics: `
[Am] Lag ja gale [F] ki phir ye
[E] Haseen raat [Am] ho na ho
[Am] Shayad phir iss [F] janam mein
[E] Mulaqat [Am] ho na ho

[Am] Humko mili [G] hai aaj ye
[F] Ghadiyaan na[E]seeb se
[Am] Jee bhar ke [G] dekh lijiye
[F] Humko ka[E]reeb se
[Am] Phir aapke [F] naseeb mein
[E] Ye baat [Am] ho na ho
`
    },
    {
        id: 39,
        title: "Ajeeb Dastaan Hai Yeh",
        artist: "Lata Mangeshkar",
        language: "Hindi",
        lyrics: `
[C] Ajeeb dastaan hai yeh
[G] Kahan shuru kahan khatam
[G] Yeh manzilein hai kaunsi
[C] Na woh samajh sake na hum

[C] Yeh roshni ke saath kyun
[F] Dhuan utha chiraag se
[C] Yeh khwaab dekhti hoon main
[G] Ke jag padi hoon khwaab se
`
    },
    {
        id: 40,
        title: "Tujhse Naraz Nahin Zindagi",
        artist: "Lata Mangeshkar",
        language: "Hindi",
        lyrics: `
[Am] Tujhse naraz [G] nahin zindagi
[F] Hairaan hoon [E] main
[F] O hairaan [E] hoon main
[Am] Tere masoom [G] sawaalon se
[F] Preshan hoon [E] main
[F] O preshan [E] hoon main

[Am] Jeene ke liye [G] socha hi nahi
[F] Dard sambhalne [E] honge
[Am] Muskurayein toh [G] muskurane ke
[F] Karz utaarne [E] honge
`
    },
    {
        id: 41,
        title: "Tere Bina Zindagi Se",
        artist: "Lata Mangeshkar / Kishore Kumar",
        language: "Hindi",
        lyrics: `
[Am] Tere bina zindagi se [G] koi shikwa [F] to nahin
[E] Shikwa nahin, [Am] shikwa nahin, shikwa nahin
[Am] Tere bina zindagi [G] bhi lekin [F] zindagi to nahin
[E] Zindagi nahin, [Am] zindagi nahin, zindagi nahin

[Am] Jee mein aata hai [G] tere daaman mein
[F] Sar chhupa ke hum [E] rote rahein...
[E] Rote rahein
[Am] Teri bhi aankhon [G] mein aansuon ki
[F] Nami to nahin
[E] Nami to nahin...
`
    },
    {
        id: 42,
        title: "Kora Kagaz Tha Yeh Man Mera",
        artist: "Lata Mangeshkar / Kishore Kumar",
        language: "Hindi",
        lyrics: `
[G] Kora kagaz [C] tha yeh mann mera
[D] Likh liya naam [G] iss pe tera
[G] Kora kagaz [C] tha yeh mann mera
[D] Likh liya naam [G] iss pe tera

[G] Soona aangan [C] tha jeevan mera
[D] Bas gaya pyaar [G] iss pe tera
[G] Toot na jaaye [C] sapne main darta hoon
[D] Nis din sapno mein [G] dekha karta hoon
`
    },

    // --- MOHAMMED RAFI (5 Tracks) ---
    {
        id: 43,
        title: "Gulabi Aankhen",
        artist: "Mohammed Rafi",
        language: "Hindi",
        lyrics: `
[Am] Gulabi aankhen [G] jo teri dekhi
[F] Sharabi yeh dil [E] ho gaya
[Am] Sambhalo mujhko [G] o mere yaaron
[F] Sambhalna mushkil [E] ho gaya

[Am] Dil mein mere [G] khwaab tere
[F] Tasveerein jaise [E] hon deewar pe
[Am] Tujhpe fida [G] main kyun hua
[F] Aata hai gussa [E] mujhe pyaar pe
`
    },
    {
        id: 44,
        title: "Kya Hua Tera Wada",
        artist: "Mohammed Rafi",
        language: "Hindi",
        lyrics: `
[C] Kya hua tera [Dm] waada
[G] Woh kasam woh [C] iraada
[C] Bhoolega dil [Dm] jis din tumhe
[G] Woh din zindagi ka [C] aakhri din hoga
[C] Kya hua tera [Dm] waada...

[C] Yaad hai mujhko [Am] tune kaha tha
[F] Tumse nahi ruthenge [G] kabhi
[C] Dil ki tarah se [Am] haath mile hain
[F] Kaise bhala chootenge [G] kabhi
[F] Teri baahon mein [C] beeti har shaam
[G] Bewafa yeh bhi [C] kya yaad nahin
`
    },
    {
        id: 45,
        title: "Likhe Jo Khat Tujhe",
        artist: "Mohammed Rafi",
        language: "Hindi",
        lyrics: `
[Cm] Likhe jo khat tujhe
[Bb] Woh teri yaad mein
[Ab] Hazaaron rang ke
[G] Nazaare ban gaye
[Cm] Sawera jab hua
[Bb] To phool ban gaye
[Ab] Jo raat aayi to
[G] Sitaare ban gaye

[Cm] Koi nagma kahin [Bb] goonja
[Ab] Kahan dil mein [G] yeh tu aayi
[Cm] Kahin chatki kali [Bb] koi
[Ab] Main yeh samjha [G] tu sharmaayi
`
    },
    {
        id: 46,
        title: "Baharon Phool Barsao",
        artist: "Mohammed Rafi",
        language: "Hindi",
        lyrics: `
[C] Baharon phool [F] barsao
[G] Mera mehboob [C] aaya hai
[G] Mera mehboob [C] aaya hai

[C] Hawaon raagni [F] gaao
[G] Mera mehboob [C] aaya hai
[G] Mera mehboob [C] aaya hai

[C] O laali phool ki [Am] mehndi
[G] Laga in gore [C] haathon mein
[C] Utar aa ae ghata [Am] kaajal
[G] Laga in pyaari [C] aankhon mein
`
    },
    {
        id: 47,
        title: "Pukarta Chala Hoon Main",
        artist: "Mohammed Rafi",
        language: "Hindi",
        lyrics: `
[G] Pukarta chala hoon main
[C] Gali gali bahaar ki
[D] Bas ek chaanv zulf ki
[G] Bas ek nigaah pyaar ki

[G] Yeh dillagi yeh shokhiyaan
[C] Salaam ki yehi to hai
[D] Meri nazar talash mein
[G] Sharar ke yehi to hai
[G] Pukarta chala hoon main...
`
    },

    // --- ASSAMESE / BHUPEN HAZARIKA / ZUBEEN (5+ Tracks) ---
    {
        id: 48,
        title: "Anamika",
        artist: "Zubeen Garg",
        language: "Assamese",
        lyrics: `
[G] Anamika... [C] Anamika
[G] Tumi je aamaar [C] Anamika
[G] Hridoyore [Em] haajaar [D] jonmo
[G] Tumi je aamaar [C] Anamika

[G] Junakor rati [Em] aaji
[C] Saaya hoi [D] aahiba
[G] Moromor dhol [Em] hoi
[C] Bukute [D] namiba
[G] Moi je [D] aasu [C] roi [G] roi
`
    },
    {
        id: 49,
        title: "Pakhi Meli Dite",
        artist: "Zubeen Garg",
        language: "Assamese",
        lyrics: `
[G] Pakhi meli dite [Em] mon jaai
[C] Mukoli aaka[D]khot
[G] Tejimola xare [Em] aase
[C] Aaitaare haa[D]dhut

[G] Duronire [Em] nilimaye
[C] Haath baul [D] di maate
[G] Ki je mitha [Em] xur baaje
[C] Nodiure [D] ghaate
`
    },
    {
        id: 50,
        title: "Mayabini",
        artist: "Zubeen Garg",
        language: "Assamese",
        lyrics: `
[Am] Mayabini... [G] ratir bukut
[F] Khelu aami [E] dhula-bute
[Am] Mayabini... [G] ratir bukut
[F] Khelu aami [E] dhula-bute

[Am] Junakore [G] boroxunot
[F] Titi buri [G] jam
[C] Tumi aami [E] haal jaam

[Am] Dusokute [G] aaki lom
[F] Hopunore [G] kajol
[C] Tumi aami [E] haal jaam
`
    },
    {
        id: 51,
        title: "Manuhe Manuhor Babe",
        artist: "Dr. Bhupen Hazarika",
        language: "Assamese",
        lyrics: `
[C] Manuhe manuhor [Am] babe
[F] Jodihe okono [G] nabhabe
[C] Okoni xohanubhu[Am]tire
[F] Bhabibo kuneno [G] kua?
[C] Manuhe manuhor [Am] babe...

[C] Manuh jodihe [Am] nohole
[Dm] Manuh danav [G] hobo
[C] Danav kahio [Am] manuh nohoi
[F] Rakhito hobo [G] nuare
[C] Manuhe manuhor [Am] babe...
`
    },
    {
        id: 52,
        title: "Bistirno Parore",
        artist: "Dr. Bhupen Hazarika",
        language: "Assamese",
        lyrics: `
[Am] Bistirno [G] parore [Am] oxongkhya jonore
[C] Hahakar xuniu [G] nissabde nirobe
[F] Burha luit tumi [E] buwa kiyo?
[F] Burha luit tumi [E] buwa kiyo?

[Am] Noitikotar [G] skhalan dekhiu
[Am] Manabotar [G] patan dekhiu
[C] Nirlajja alax [G] bhabere tumi
[F] Burha luit tumi [E] buwa kiyo?

[Am] Gyan bihin [G] nirakhyarar
[Am] Khadya bihin [G] nagarikor
[C] Netritwa bihin [G] niata dekhiu
[F] Burha luit tumi [E] buwa kiyo?
`
    },
    {
        id: 53,
        title: "Moi Eti Jajabor",
        artist: "Dr. Bhupen Hazarika",
        language: "Assamese",
        lyrics: `
[C] Moi eti [F] jajabor
[C] Moi eti [G] jajabor
[F] Dharar dihinge [C] dipange loru
[G] Nibishari nija [C] ghor

[C] Moi luitor [Am] pare pare
[F] Mississippir [G] pare pare
[F] Volgar [C] rupali [G] bali
[G] Panami [C] jatoi poru
[C] Moi eti [G] jajabor
`
    },
    {
        id: 54,
        title: "Dil Hoom Hoom Kare",
        artist: "Dr. Bhupen Hazarika (Rudaali)",
        language: "Hindi",
        lyrics: `
[Am] Dil hoom hoom [G] kare, ghab[F]raaye
[E] Ghan dham dham [Am] kare, darr [E] jaaye
[Am] Ek boond kabhi [G] paani ki
[F] More ankhiyon [E] se barsaaye

[Am] Teri jhori [G] daroon
[F] Sab sukhe [E] paat jo aaye
[Am] Tera chhua [G] laage
[F] Meri sukhi [E] daal hariyaaye
[Am] Dil hoom hoom [G] kare...
`
    },
    {
        id: 55,
        title: "Sagar Sangamat",
        artist: "Dr. Bhupen Hazarika",
        language: "Assamese",
        lyrics: `
[C] Sagar sangamat [F] kotuna saaturilo
[G] Tathapi dekhun [C] pyaas
[C] Proshanta sagarot [F] ogooni dekhilo
[G] Ogooni dekhilo [C] haai

[Am] Jyoti pakhila hoi [F] uribole lole
[G] Agni parosh pale [C] sai
[Am] Moru pakhila hoi [F] uribole lole
[G] Agni parosh pale [C] sai
`
    },

    // --- RABINDRANATH TAGORE / RABINDRA SANGEET (5 Tracks) ---
    {
        id: 56,
        title: "Purano Sei Diner Kotha",
        artist: "Rabindranath Tagore",
        language: "Bengali",
        lyrics: `
[C] Purano sei [F] diner kotha
[C] Bhulbi ki re [G] haai
[C] O se [F] chokher dekha, [G] praner kotha
[G] Se ki bhola [C] jaai

[C] Aay aar-ek [F] bar aay re [C] sokha
[F] Praner majhe [C] aay
[C] Mora [F] sukher dukher [G] kotha kobo
[G] Pran jura[C]be taay
`
    },
    {
        id: 57,
        title: "Ekla Cholo Re",
        artist: "Rabindranath Tagore",
        language: "Bengali",
        lyrics: `
[C] Jodi tor daak shune keu [F] na aase
[G] Tobe ekla cholo [C] re
[C] Ekla cholo, ekla cholo, [F] ekla cholo, ekla cholo [C] re

[C] Jodi keu kotha [G] na koy
[F] Ore o [C] obhaga
[C] Jodi sobai thake [G] mukh phiraye
[F] Sobai kore [C] bhoy
[C] Tobe poran khule [F]
[F] O tui mukh phute tor [G] moner kotha
[G] Ekla bolo [C] re
`
    },
    {
        id: 58,
        title: "Aguner Poroshmoni",
        artist: "Rabindranath Tagore",
        language: "Bengali",
        lyrics: `
[C] Aguner porosh[F]moni chhoaao [C] praane
[C] E jibon [F] punno koro [G] dohon [C] daane
[C] Aguner porosh[F]moni...

[C] Aamar ei [G] dehokhani [F] tule dhoro
[C] Tomar oi [G] debaloyer [F] prodip koro
[C] Nishi-din [F] alok-shikha [G] joluk [C] gaane
`
    },
    {
        id: 59,
        title: "Anondoloke Mongolaloke",
        artist: "Rabindranath Tagore",
        language: "Bengali",
        lyrics: `
[C] Anondoloke [F] mongolaloke
[G] Birajo [C] satyo sundaro
[C] Anondoloke [F] mongolaloke

[C] Mohima tobo [F] udbhasito
[G] Maha-gagon [C] majhe
[C] Biswo-jogot [F] moni-bhushan
[G] Bestito [C] chorone
`
    },
    {
        id: 60,
        title: "Phule Phule Dhole Dhole",
        artist: "Rabindranath Tagore",
        language: "Bengali",
        lyrics: `
[C] Phule phule [F] dhole dhole
[G] Bohe kiba [C] mridu baay
[C] Phule phule [F] dhole dhole
[G] Bohe kiba [C] mridu baay

[C] Totini hillol [F] tule killol
[G] Bohiya jaay, [C] bohiya jaay
[C] Phule phule [F] dhole dhole...
`
    }
];

// --- EXTENDED CHORD LIBRARY ---
const chordShapes = {
    // Major
    "C":  { frets: [0, 0, 0, 3], fingers: [0, 0, 0, 3] },
    "G":  { frets: [0, 2, 3, 2], fingers: [0, 1, 3, 2] },
    "F":  { frets: [2, 0, 1, 0], fingers: [2, 0, 1, 0] },
    "D":  { frets: [2, 2, 2, 0], fingers: [1, 2, 3, 0] },
    "E":  { frets: [4, 4, 4, 2], fingers: [2, 3, 4, 1] },
    "A":  { frets: [2, 1, 0, 0], fingers: [2, 1, 0, 0] },
    "B":  { frets: [4, 3, 2, 2], fingers: [3, 2, 1, 1] },
    "Bb": { frets: [3, 2, 1, 1], fingers: [3, 2, 1, 1] }, // Added for Beatles/Rafi
    "Ab": { frets: [5, 3, 4, 3], fingers: [3, 1, 2, 1] }, // Added for Rafi

    // Minor
    "Am": { frets: [2, 0, 0, 0], fingers: [2, 0, 0, 0] },
    "Em": { frets: [0, 4, 3, 2], fingers: [0, 3, 2, 1] },
    "Dm": { frets: [2, 2, 1, 0], fingers: [2, 3, 1, 0] },
    "Bm": { frets: [4, 2, 2, 2], fingers: [3, 1, 1, 1] }, 
    "Fm": { frets: [1, 0, 1, 3], fingers: [1, 0, 2, 4] },
    "Gm": { frets: [0, 2, 3, 1], fingers: [0, 2, 3, 1] },
    "C#m":{ frets: [6, 4, 4, 4], fingers: [3, 1, 1, 1] },
    "F#m":{ frets: [2, 1, 2, 0], fingers: [2, 1, 3, 0] },
    "Cm": { frets: [0, 3, 3, 3], fingers: [0, 1, 2, 3] },

    // 7th & Others
    "G7": { frets: [0, 2, 1, 2], fingers: [0, 2, 1, 3] },
    "E7": { frets: [1, 2, 0, 2], fingers: [1, 2, 0, 3] },
    "A7": { frets: [0, 1, 0, 0], fingers: [0, 1, 0, 0] },
    "D7": { frets: [2, 2, 2, 3], fingers: [1, 1, 1, 2] },
    "C7": { frets: [0, 0, 0, 1], fingers: [0, 0, 0, 1] },
    "Cmaj7": { frets: [0, 0, 0, 2], fingers: [0, 0, 0, 2] }
};