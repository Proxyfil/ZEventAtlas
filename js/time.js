/*
	========================================================================
	The 2022 /r/place Atlas

	An atlas of Reddit's 2022 /r/place, with information to each
	artwork	of the canvas provided by the community.

	Copyright (c) 2017 Roland Rytz <roland@draemm.li>
	Copyright (c) 2022 Place Atlas contributors

	Licensed under the GNU Affero General Public License Version 3
	https://place-atlas.stefanocoding.me/license.txt
	========================================================================
*/

const variationsConfig = {"default":{"name":"ZEvent2022 Place","code":"","default":265,"drawablePeriods":[0,265],"expansions":[],"versions":[{"timestamp":1662737400,"url":["https://media.discordapp.net/attachments/874044700309454858/1012703365999890503/Sans_titre.png?width=2000&height=2000"]},{"timestamp":1662739214.203,"url":["https://zevent-cdn.mog.gg/zplace/full/1662736460886.png"]},{"timestamp":1662739814.291,"url":["https://zevent-cdn.mog.gg/zplace/full/1662736460886.png"]},{"timestamp":1662740414.584,"url":["https://zevent-cdn.mog.gg/zplace/full/1662740413919.png"]},{"timestamp":1662741014.498,"url":["https://zevent-cdn.mog.gg/zplace/full/1662741013594.png"]},{"timestamp":1662741614.714,"url":["https://zevent-cdn.mog.gg/zplace/full/1662741614089.png"]},{"timestamp":1662742214.726,"url":["https://zevent-cdn.mog.gg/zplace/full/1662742213970.png"]},{"timestamp":1662742814.79,"url":["https://zevent-cdn.mog.gg/zplace/full/1662742813548.png"]},{"timestamp":1662743415.102,"url":["https://zevent-cdn.mog.gg/zplace/full/1662743414296.png"]},{"timestamp":1662744014.953,"url":["https://zevent-cdn.mog.gg/zplace/full/1662744014229.png"]},{"timestamp":1662744615.024,"url":["https://zevent-cdn.mog.gg/zplace/full/1662744613918.png"]},{"timestamp":1662745215.133,"url":["https://zevent-cdn.mog.gg/zplace/full/1662745213640.png"]},{"timestamp":1662745815.406,"url":["https://zevent-cdn.mog.gg/zplace/full/1662745814727.png"]},{"timestamp":1662746415.312,"url":["https://zevent-cdn.mog.gg/zplace/full/1662746414383.png"]},{"timestamp":1662747015.447,"url":["https://zevent-cdn.mog.gg/zplace/full/1662747014376.png"]},{"timestamp":1662747689.868,"url":["https://zevent-cdn.mog.gg/zplace/full/1662747688800.png"]},{"timestamp":1662748289.914,"url":["https://zevent-cdn.mog.gg/zplace/full/1662748288622.png"]},{"timestamp":1662748890.247,"url":["https://zevent-cdn.mog.gg/zplace/full/1662748889200.png"]},{"timestamp":1662749490.065,"url":["https://zevent-cdn.mog.gg/zplace/full/1662749489143.png"]},{"timestamp":1662750090.142,"url":["https://zevent-cdn.mog.gg/zplace/full/1662750088857.png"]},{"timestamp":1662750690.37,"url":["https://zevent-cdn.mog.gg/zplace/full/1662750689305.png"]},{"timestamp":1662751290.4,"url":["https://zevent-cdn.mog.gg/zplace/full/1662751289582.png"]},{"timestamp":1662751890.448,"url":["https://zevent-cdn.mog.gg/zplace/full/1662751888817.png"]},{"timestamp":1662752490.545,"url":["https://zevent-cdn.mog.gg/zplace/full/1662752488655.png"]},{"timestamp":1662753090.724,"url":["https://zevent-cdn.mog.gg/zplace/full/1662753090156.png"]},{"timestamp":1662753691.21,"url":["https://zevent-cdn.mog.gg/zplace/full/1662753689793.png"]},{"timestamp":1662754290.821,"url":["https://zevent-cdn.mog.gg/zplace/full/1662754289280.png"]},{"timestamp":1662754891.143,"url":["https://zevent-cdn.mog.gg/zplace/full/1662754890457.png"]},{"timestamp":1662755491.008,"url":["https://zevent-cdn.mog.gg/zplace/full/1662755489178.png"]},{"timestamp":1662756091.328,"url":["https://zevent-cdn.mog.gg/zplace/full/1662756090278.png"]},{"timestamp":1662756691.191,"url":["https://zevent-cdn.mog.gg/zplace/full/1662756690081.png"]},{"timestamp":1662757291.347,"url":["https://zevent-cdn.mog.gg/zplace/full/1662757290808.png"]},{"timestamp":1662757891.396,"url":["https://zevent-cdn.mog.gg/zplace/full/1662757890363.png"]},{"timestamp":1662758491.592,"url":["https://zevent-cdn.mog.gg/zplace/full/1662758490625.png"]},{"timestamp":1662759091.618,"url":["https://zevent-cdn.mog.gg/zplace/full/1662759090956.png"]},{"timestamp":1662759691.701,"url":["https://zevent-cdn.mog.gg/zplace/full/1662759690942.png"]},{"timestamp":1662760291.802,"url":["https://zevent-cdn.mog.gg/zplace/full/1662760291248.png"]},{"timestamp":1662760891.975,"url":["https://zevent-cdn.mog.gg/zplace/full/1662760891449.png"]},{"timestamp":1662761491.991,"url":["https://zevent-cdn.mog.gg/zplace/full/1662761491064.png"]},{"timestamp":1662762092.125,"url":["https://zevent-cdn.mog.gg/zplace/full/1662762091586.png"]},{"timestamp":1662762692.172,"url":["https://zevent-cdn.mog.gg/zplace/full/1662762686426.png"]},{"timestamp":1662763292.283,"url":["https://zevent-cdn.mog.gg/zplace/full/1662763291043.png"]},{"timestamp":1662763892.364,"url":["https://zevent-cdn.mog.gg/zplace/full/1662763891277.png"]},{"timestamp":1662764492.454,"url":["https://zevent-cdn.mog.gg/zplace/full/1662764491824.png"]},{"timestamp":1662765092.555,"url":["https://zevent-cdn.mog.gg/zplace/full/1662765091646.png"]},{"timestamp":1662765692.626,"url":["https://zevent-cdn.mog.gg/zplace/full/1662765691008.png"]},{"timestamp":1662766292.716,"url":["https://zevent-cdn.mog.gg/zplace/full/1662766291972.png"]},{"timestamp":1662766892.82,"url":["https://zevent-cdn.mog.gg/zplace/full/1662766891777.png"]},{"timestamp":1662767492.906,"url":["https://zevent-cdn.mog.gg/zplace/full/1662767490521.png"]},{"timestamp":1662768093,"url":["https://zevent-cdn.mog.gg/zplace/full/1662768092233.png"]},{"timestamp":1662768693.106,"url":["https://zevent-cdn.mog.gg/zplace/full/1662768690304.png"]},{"timestamp":1662769293.203,"url":["https://zevent-cdn.mog.gg/zplace/full/1662769292564.png"]},{"timestamp":1662769893.292,"url":["https://zevent-cdn.mog.gg/zplace/full/1662769892506.png"]},{"timestamp":1662770493.396,"url":["https://zevent-cdn.mog.gg/zplace/full/1662770492582.png"]},{"timestamp":1662771093.634,"url":["https://zevent-cdn.mog.gg/zplace/full/1662771090506.png"]},{"timestamp":1662771693.568,"url":["https://zevent-cdn.mog.gg/zplace/full/1662771692727.png"]},{"timestamp":1662772293.624,"url":["https://zevent-cdn.mog.gg/zplace/full/1662772293034.png"]},{"timestamp":1662772893.721,"url":["https://zevent-cdn.mog.gg/zplace/full/1662772892614.png"]},{"timestamp":1662773493.831,"url":["https://zevent-cdn.mog.gg/zplace/full/1662773493296.png"]},{"timestamp":1662774093.905,"url":["https://zevent-cdn.mog.gg/zplace/full/1662774093314.png"]},{"timestamp":1662774693.979,"url":["https://zevent-cdn.mog.gg/zplace/full/1662774693408.png"]},{"timestamp":1662775294.093,"url":["https://zevent-cdn.mog.gg/zplace/full/1662775293348.png"]},{"timestamp":1662775894.211,"url":["https://zevent-cdn.mog.gg/zplace/full/1662775893758.png"]},{"timestamp":1662776494.275,"url":["https://zevent-cdn.mog.gg/zplace/full/1662776493760.png"]},{"timestamp":1662777094.367,"url":["https://zevent-cdn.mog.gg/zplace/full/1662777093753.png"]},{"timestamp":1662777694.475,"url":["https://zevent-cdn.mog.gg/zplace/full/1662777693568.png"]},{"timestamp":1662778294.592,"url":["https://zevent-cdn.mog.gg/zplace/full/1662778293729.png"]},{"timestamp":1662778894.68,"url":["https://zevent-cdn.mog.gg/zplace/full/1662778893550.png"]},{"timestamp":1662779494.793,"url":["https://zevent-cdn.mog.gg/zplace/full/1662779493881.png"]},{"timestamp":1662780094.885,"url":["https://zevent-cdn.mog.gg/zplace/full/1662780094499.png"]},{"timestamp":1662780694.981,"url":["https://zevent-cdn.mog.gg/zplace/full/1662780692071.png"]},{"timestamp":1662781295.063,"url":["https://zevent-cdn.mog.gg/zplace/full/1662781294656.png"]},{"timestamp":1662781895.199,"url":["https://zevent-cdn.mog.gg/zplace/full/1662781894656.png"]},{"timestamp":1662782495.227,"url":["https://zevent-cdn.mog.gg/zplace/full/1662782494862.png"]},{"timestamp":1662783095.335,"url":["https://zevent-cdn.mog.gg/zplace/full/1662783094709.png"]},{"timestamp":1662783695.413,"url":["https://zevent-cdn.mog.gg/zplace/full/1662783694945.png"]},{"timestamp":1662784295.459,"url":["https://zevent-cdn.mog.gg/zplace/full/1662784294752.png"]},{"timestamp":1662784895.55,"url":["https://zevent-cdn.mog.gg/zplace/full/1662784892097.png"]},{"timestamp":1662785495.621,"url":["https://zevent-cdn.mog.gg/zplace/full/1662785494785.png"]},{"timestamp":1662786095.643,"url":["https://zevent-cdn.mog.gg/zplace/full/1662786094965.png"]},{"timestamp":1662786695.745,"url":["https://zevent-cdn.mog.gg/zplace/full/1662786694677.png"]},{"timestamp":1662787697.254,"url":["https://zevent-cdn.mog.gg/zplace/full/1662787696129.png"]},{"timestamp":1662788297.241,"url":["https://zevent-cdn.mog.gg/zplace/full/1662788296086.png"]},{"timestamp":1662789189.367,"url":["https://zevent-cdn.mog.gg/zplace/full/1662789188704.png"]},{"timestamp":1662789789.413,"url":["https://zevent-cdn.mog.gg/zplace/full/1662789788646.png"]},{"timestamp":1662790389.475,"url":["https://zevent-cdn.mog.gg/zplace/full/1662790388792.png"]},{"timestamp":1662790989.585,"url":["https://zevent-cdn.mog.gg/zplace/full/1662790988655.png"]},{"timestamp":1662791589.689,"url":["https://zevent-cdn.mog.gg/zplace/full/1662791588549.png"]},{"timestamp":1662792189.786,"url":["https://zevent-cdn.mog.gg/zplace/full/1662792188860.png"]},{"timestamp":1662792789.884,"url":["https://zevent-cdn.mog.gg/zplace/full/1662792789510.png"]},{"timestamp":1662793389.986,"url":["https://zevent-cdn.mog.gg/zplace/full/1662793389498.png"]},{"timestamp":1662793990.094,"url":["https://zevent-cdn.mog.gg/zplace/full/1662793989460.png"]},{"timestamp":1662794590.172,"url":["https://zevent-cdn.mog.gg/zplace/full/1662794589037.png"]},{"timestamp":1662795190.286,"url":["https://zevent-cdn.mog.gg/zplace/full/1662795189780.png"]},{"timestamp":1662795790.39,"url":["https://zevent-cdn.mog.gg/zplace/full/1662795789453.png"]},{"timestamp":1662796390.601,"url":["https://zevent-cdn.mog.gg/zplace/full/1662796389755.png"]},{"timestamp":1662796990.497,"url":["https://zevent-cdn.mog.gg/zplace/full/1662796989872.png"]},{"timestamp":1662797590.642,"url":["https://zevent-cdn.mog.gg/zplace/full/1662797590126.png"]},{"timestamp":1662798190.699,"url":["https://zevent-cdn.mog.gg/zplace/full/1662798190027.png"]},{"timestamp":1662798790.834,"url":["https://zevent-cdn.mog.gg/zplace/full/1662798789905.png"]},{"timestamp":1662799390.919,"url":["https://zevent-cdn.mog.gg/zplace/full/1662799390498.png"]},{"timestamp":1662799991.009,"url":["https://zevent-cdn.mog.gg/zplace/full/1662799989735.png"]},{"timestamp":1662800591.099,"url":["https://zevent-cdn.mog.gg/zplace/full/1662800590708.png"]},{"timestamp":1662801191.199,"url":["https://zevent-cdn.mog.gg/zplace/full/1662801190419.png"]},{"timestamp":1662801791.309,"url":["https://zevent-cdn.mog.gg/zplace/full/1662801790171.png"]},{"timestamp":1662802391.376,"url":["https://zevent-cdn.mog.gg/zplace/full/1662802390272.png"]},{"timestamp":1662802991.518,"url":["https://zevent-cdn.mog.gg/zplace/full/1662802990049.png"]},{"timestamp":1662803591.672,"url":["https://zevent-cdn.mog.gg/zplace/full/1662803590461.png"]},{"timestamp":1662804191.721,"url":["https://zevent-cdn.mog.gg/zplace/full/1662804191139.png"]},{"timestamp":1662804791.793,"url":["https://zevent-cdn.mog.gg/zplace/full/1662804791003.png"]},{"timestamp":1662805391.962,"url":["https://zevent-cdn.mog.gg/zplace/full/1662805391189.png"]},{"timestamp":1662805992.007,"url":["https://zevent-cdn.mog.gg/zplace/full/1662805991321.png"]},{"timestamp":1662806592.087,"url":["https://zevent-cdn.mog.gg/zplace/full/1662806590973.png"]},{"timestamp":1662807192.249,"url":["https://zevent-cdn.mog.gg/zplace/full/1662807191527.png"]},{"timestamp":1662807792.308,"url":["https://zevent-cdn.mog.gg/zplace/full/1662807789201.png"]},{"timestamp":1662808392.391,"url":["https://zevent-cdn.mog.gg/zplace/full/1662808391792.png"]},{"timestamp":1662808992.492,"url":["https://zevent-cdn.mog.gg/zplace/full/1662808990951.png"]},{"timestamp":1662809592.588,"url":["https://zevent-cdn.mog.gg/zplace/full/1662809591779.png"]},{"timestamp":1662810192.81,"url":["https://zevent-cdn.mog.gg/zplace/full/1662810191217.png"]},{"timestamp":1662810792.772,"url":["https://zevent-cdn.mog.gg/zplace/full/1662810792041.png"]},{"timestamp":1662811392.863,"url":["https://zevent-cdn.mog.gg/zplace/full/1662811391934.png"]},{"timestamp":1662811993.025,"url":["https://zevent-cdn.mog.gg/zplace/full/1662811992326.png"]},{"timestamp":1662812593.069,"url":["https://zevent-cdn.mog.gg/zplace/full/1662812592136.png"]},{"timestamp":1662813193.168,"url":["https://zevent-cdn.mog.gg/zplace/full/1662813192277.png"]},{"timestamp":1662813793.303,"url":["https://zevent-cdn.mog.gg/zplace/full/1662813792468.png"]},{"timestamp":1662814393.329,"url":["https://zevent-cdn.mog.gg/zplace/full/1662814392794.png"]},{"timestamp":1662814993.424,"url":["https://zevent-cdn.mog.gg/zplace/full/1662814990953.png"]},{"timestamp":1662815593.561,"url":["https://zevent-cdn.mog.gg/zplace/full/1662815592930.png"]},{"timestamp":1662816193.592,"url":["https://zevent-cdn.mog.gg/zplace/full/1662816192639.png"]},{"timestamp":1662816793.75,"url":["https://zevent-cdn.mog.gg/zplace/full/1662816792555.png"]},{"timestamp":1662817393.849,"url":["https://zevent-cdn.mog.gg/zplace/full/1662817393265.png"]},{"timestamp":1662817993.935,"url":["https://zevent-cdn.mog.gg/zplace/full/1662817993231.png"]},{"timestamp":1662818594.034,"url":["https://zevent-cdn.mog.gg/zplace/full/1662818592882.png"]},{"timestamp":1662819194.18,"url":["https://zevent-cdn.mog.gg/zplace/full/1662819193595.png"]},{"timestamp":1662819794.215,"url":["https://zevent-cdn.mog.gg/zplace/full/1662819793582.png"]},{"timestamp":1662820394.328,"url":["https://zevent-cdn.mog.gg/zplace/full/1662820393787.png"]},{"timestamp":1662820994.456,"url":["https://zevent-cdn.mog.gg/zplace/full/1662820993826.png"]},{"timestamp":1662821594.532,"url":["https://zevent-cdn.mog.gg/zplace/full/1662821593792.png"]},{"timestamp":1662822194.635,"url":["https://zevent-cdn.mog.gg/zplace/full/1662822193555.png"]},{"timestamp":1662822794.652,"url":["https://zevent-cdn.mog.gg/zplace/full/1662822793893.png"]},{"timestamp":1662823394.732,"url":["https://zevent-cdn.mog.gg/zplace/full/1662823393496.png"]},{"timestamp":1662823994.828,"url":["https://zevent-cdn.mog.gg/zplace/full/1662823993898.png"]},{"timestamp":1662824595.014,"url":["https://zevent-cdn.mog.gg/zplace/full/1662824593270.png"]},{"timestamp":1662825195.041,"url":["https://zevent-cdn.mog.gg/zplace/full/1662825194363.png"]},{"timestamp":1662825795.021,"url":["https://zevent-cdn.mog.gg/zplace/full/1662825793945.png"]},{"timestamp":1662826395.056,"url":["https://zevent-cdn.mog.gg/zplace/full/1662826394390.png"]},{"timestamp":1662826995.146,"url":["https://zevent-cdn.mog.gg/zplace/full/1662826994339.png"]},{"timestamp":1662827595.413,"url":["https://zevent-cdn.mog.gg/zplace/full/1662827593999.png"]},{"timestamp":1662828195.371,"url":["https://zevent-cdn.mog.gg/zplace/full/1662828194574.png"]},{"timestamp":1662828795.468,"url":["https://zevent-cdn.mog.gg/zplace/full/1662828794792.png"]},{"timestamp":1662829395.555,"url":["https://zevent-cdn.mog.gg/zplace/full/1662829394566.png"]},{"timestamp":1662829995.644,"url":["https://zevent-cdn.mog.gg/zplace/full/1662829994189.png"]},{"timestamp":1662830595.75,"url":["https://zevent-cdn.mog.gg/zplace/full/1662830594385.png"]},{"timestamp":1662831195.879,"url":["https://zevent-cdn.mog.gg/zplace/full/1662831195273.png"]},{"timestamp":1662831795.927,"url":["https://zevent-cdn.mog.gg/zplace/full/1662831795355.png"]},{"timestamp":1662832396.06,"url":["https://zevent-cdn.mog.gg/zplace/full/1662832394879.png"]},{"timestamp":1662832996.164,"url":["https://zevent-cdn.mog.gg/zplace/full/1662832995418.png"]},{"timestamp":1662833596.212,"url":["https://zevent-cdn.mog.gg/zplace/full/1662833595389.png"]},{"timestamp":1662834196.325,"url":["https://zevent-cdn.mog.gg/zplace/full/1662834195396.png"]},{"timestamp":1662834796.355,"url":["https://zevent-cdn.mog.gg/zplace/full/1662834795690.png"]},{"timestamp":1662835396.447,"url":["https://zevent-cdn.mog.gg/zplace/full/1662835395683.png"]},{"timestamp":1662835996.546,"url":["https://zevent-cdn.mog.gg/zplace/full/1662835994804.png"]},{"timestamp":1662836596.702,"url":["https://zevent-cdn.mog.gg/zplace/full/1662836595712.png"]},{"timestamp":1662837196.748,"url":["https://zevent-cdn.mog.gg/zplace/full/1662837196068.png"]},{"timestamp":1662837796.84,"url":["https://zevent-cdn.mog.gg/zplace/full/1662837795971.png"]},{"timestamp":1662838396.943,"url":["https://zevent-cdn.mog.gg/zplace/full/1662838396209.png"]},{"timestamp":1662838997.036,"url":["https://zevent-cdn.mog.gg/zplace/full/1662838996202.png"]},{"timestamp":1662839597.165,"url":["https://zevent-cdn.mog.gg/zplace/full/1662839596579.png"]},{"timestamp":1662840197.233,"url":["https://zevent-cdn.mog.gg/zplace/full/1662840196335.png"]},{"timestamp":1662840797.321,"url":["https://zevent-cdn.mog.gg/zplace/full/1662840796038.png"]},{"timestamp":1662841397.416,"url":["https://zevent-cdn.mog.gg/zplace/full/1662841396989.png"]},{"timestamp":1662841997.549,"url":["https://zevent-cdn.mog.gg/zplace/full/1662841996843.png"]},{"timestamp":1662842597.621,"url":["https://zevent-cdn.mog.gg/zplace/full/1662842596965.png"]},{"timestamp":1662843197.732,"url":["https://zevent-cdn.mog.gg/zplace/full/1662843196198.png"]},{"timestamp":1662843797.85,"url":["https://zevent-cdn.mog.gg/zplace/full/1662843797248.png"]},{"timestamp":1662844397.914,"url":["https://zevent-cdn.mog.gg/zplace/full/1662844397284.png"]},{"timestamp":1662844997.993,"url":["https://zevent-cdn.mog.gg/zplace/full/1662844997085.png"]},{"timestamp":1662845598.1,"url":["https://zevent-cdn.mog.gg/zplace/full/1662845596847.png"]},{"timestamp":1662846198.185,"url":["https://zevent-cdn.mog.gg/zplace/full/1662846197050.png"]},{"timestamp":1662846798.298,"url":["https://zevent-cdn.mog.gg/zplace/full/1662846797670.png"]},{"timestamp":1662847398.409,"url":["https://zevent-cdn.mog.gg/zplace/full/1662847398020.png"]},{"timestamp":1662847998.498,"url":["https://zevent-cdn.mog.gg/zplace/full/1662847997520.png"]},{"timestamp":1662848598.627,"url":["https://zevent-cdn.mog.gg/zplace/full/1662848597823.png"]},{"timestamp":1662849198.685,"url":["https://zevent-cdn.mog.gg/zplace/full/1662849197855.png"]},{"timestamp":1662849798.774,"url":["https://zevent-cdn.mog.gg/zplace/full/1662849797909.png"]},{"timestamp":1662850398.886,"url":["https://zevent-cdn.mog.gg/zplace/full/1662850398265.png"]},{"timestamp":1662850998.984,"url":["https://zevent-cdn.mog.gg/zplace/full/1662850998138.png"]},{"timestamp":1662851599.083,"url":["https://zevent-cdn.mog.gg/zplace/full/1662851597917.png"]},{"timestamp":1662852199.171,"url":["https://zevent-cdn.mog.gg/zplace/full/1662852198522.png"]},{"timestamp":1662852799.269,"url":["https://zevent-cdn.mog.gg/zplace/full/1662852798765.png"]},{"timestamp":1662853399.362,"url":["https://zevent-cdn.mog.gg/zplace/full/1662853398479.png"]},{"timestamp":1662853999.383,"url":["https://zevent-cdn.mog.gg/zplace/full/1662853997523.png"]},{"timestamp":1662854599.398,"url":["https://zevent-cdn.mog.gg/zplace/full/1662854597812.png"]},{"timestamp":1662855199.483,"url":["https://zevent-cdn.mog.gg/zplace/full/1662855198678.png"]},{"timestamp":1662855799.622,"url":["https://zevent-cdn.mog.gg/zplace/full/1662855798392.png"]},{"timestamp":1662856399.688,"url":["https://zevent-cdn.mog.gg/zplace/full/1662856398932.png"]},{"timestamp":1662856999.79,"url":["https://zevent-cdn.mog.gg/zplace/full/1662856998944.png"]},{"timestamp":1662857599.863,"url":["https://zevent-cdn.mog.gg/zplace/full/1662857599072.png"]},{"timestamp":1662858199.982,"url":["https://zevent-cdn.mog.gg/zplace/full/1662858198599.png"]},{"timestamp":1662858800.052,"url":["https://zevent-cdn.mog.gg/zplace/full/1662858799002.png"]},{"timestamp":1662859400.202,"url":["https://zevent-cdn.mog.gg/zplace/full/1662859398935.png"]},{"timestamp":1662860000.276,"url":["https://zevent-cdn.mog.gg/zplace/full/1662859999219.png"]},{"timestamp":1662860600.371,"url":["https://zevent-cdn.mog.gg/zplace/full/1662860599558.png"]},{"timestamp":1662861200.471,"url":["https://zevent-cdn.mog.gg/zplace/full/1662861199012.png"]},{"timestamp":1662861800.561,"url":["https://zevent-cdn.mog.gg/zplace/full/1662861798466.png"]},{"timestamp":1662862400.625,"url":["https://zevent-cdn.mog.gg/zplace/full/1662862399941.png"]},{"timestamp":1662863000.761,"url":["https://zevent-cdn.mog.gg/zplace/full/1662863000276.png"]},{"timestamp":1662863600.791,"url":["https://zevent-cdn.mog.gg/zplace/full/1662863599468.png"]},{"timestamp":1662864200.9,"url":["https://zevent-cdn.mog.gg/zplace/full/1662864200267.png"]},{"timestamp":1662864801.026,"url":["https://zevent-cdn.mog.gg/zplace/full/1662864799751.png"]},{"timestamp":1662865401.059,"url":["https://zevent-cdn.mog.gg/zplace/full/1662865400236.png"]},{"timestamp":1662866001.17,"url":["https://zevent-cdn.mog.gg/zplace/full/1662865999541.png"]},{"timestamp":1662866601.263,"url":["https://zevent-cdn.mog.gg/zplace/full/1662866600030.png"]},{"timestamp":1662867201.375,"url":["https://zevent-cdn.mog.gg/zplace/full/1662867199854.png"]},{"timestamp":1662867801.471,"url":["https://zevent-cdn.mog.gg/zplace/full/1662867800159.png"]},{"timestamp":1662868401.565,"url":["https://zevent-cdn.mog.gg/zplace/full/1662868399945.png"]},{"timestamp":1662869001.661,"url":["https://zevent-cdn.mog.gg/zplace/full/1662869000889.png"]},{"timestamp":1662869601.68,"url":["https://zevent-cdn.mog.gg/zplace/full/1662869600937.png"]},{"timestamp":1662870201.766,"url":["https://zevent-cdn.mog.gg/zplace/full/1662870200967.png"]},{"timestamp":1662870801.87,"url":["https://zevent-cdn.mog.gg/zplace/full/1662870800993.png"]},{"timestamp":1662871401.972,"url":["https://zevent-cdn.mog.gg/zplace/full/1662871401042.png"]},{"timestamp":1662872002.042,"url":["https://zevent-cdn.mog.gg/zplace/full/1662872000725.png"]},{"timestamp":1662872602.118,"url":["https://zevent-cdn.mog.gg/zplace/full/1662872596925.png"]},{"timestamp":1662873202.231,"url":["https://zevent-cdn.mog.gg/zplace/full/1662873201028.png"]},{"timestamp":1662873802.341,"url":["https://zevent-cdn.mog.gg/zplace/full/1662873799937.png"]},{"timestamp":1662874402.41,"url":["https://zevent-cdn.mog.gg/zplace/full/1662874401421.png"]},{"timestamp":1662875002.54,"url":["https://zevent-cdn.mog.gg/zplace/full/1662875001964.png"]},{"timestamp":1662875602.644,"url":["https://zevent-cdn.mog.gg/zplace/full/1662875601492.png"]},{"timestamp":1662876202.743,"url":["https://zevent-cdn.mog.gg/zplace/full/1662876201335.png"]},{"timestamp":1662876802.825,"url":["https://zevent-cdn.mog.gg/zplace/full/1662876801666.png"]},{"timestamp":1662877402.898,"url":["https://zevent-cdn.mog.gg/zplace/full/1662877401633.png"]},{"timestamp":1662878002.973,"url":["https://zevent-cdn.mog.gg/zplace/full/1662878002126.png"]},{"timestamp":1662878603.08,"url":["https://zevent-cdn.mog.gg/zplace/full/1662878601106.png"]},{"timestamp":1662879203.101,"url":["https://zevent-cdn.mog.gg/zplace/full/1662879202417.png"]},{"timestamp":1662879804.254,"url":["https://zevent-cdn.mog.gg/zplace/full/1662879801627.png"]},{"timestamp":1662880403.238,"url":["https://zevent-cdn.mog.gg/zplace/full/1662880402086.png"]},{"timestamp":1662881003.32,"url":["https://zevent-cdn.mog.gg/zplace/full/1662881002540.png"]},{"timestamp":1662881603.414,"url":["https://zevent-cdn.mog.gg/zplace/full/1662881602378.png"]},{"timestamp":1662882203.498,"url":["https://zevent-cdn.mog.gg/zplace/full/1662882202172.png"]},{"timestamp":1662882803.591,"url":["https://zevent-cdn.mog.gg/zplace/full/1662882802435.png"]},{"timestamp":1662883404.693,"url":["https://zevent-cdn.mog.gg/zplace/full/1662883403528.png"]},{"timestamp":1662884003.813,"url":["https://zevent-cdn.mog.gg/zplace/full/1662884002570.png"]},{"timestamp":1662884603.89,"url":["https://zevent-cdn.mog.gg/zplace/full/1662884601535.png"]},{"timestamp":1662885204.041,"url":["https://zevent-cdn.mog.gg/zplace/full/1662885203256.png"]},{"timestamp":1662885804.096,"url":["https://zevent-cdn.mog.gg/zplace/full/1662885800457.png"]},{"timestamp":1662886404.201,"url":["https://zevent-cdn.mog.gg/zplace/full/1662886403476.png"]},{"timestamp":1662887004.288,"url":["https://zevent-cdn.mog.gg/zplace/full/1662887003525.png"]},{"timestamp":1662887604.381,"url":["https://zevent-cdn.mog.gg/zplace/full/1662887603069.png"]},{"timestamp":1662888204.335,"url":["https://zevent-cdn.mog.gg/zplace/full/1662888202867.png"]},{"timestamp":1662888804.419,"url":["https://zevent-cdn.mog.gg/zplace/full/1662888803112.png"]},{"timestamp":1662889404.514,"url":["https://zevent-cdn.mog.gg/zplace/full/1662889403605.png"]},{"timestamp":1662890004.616,"url":["https://zevent-cdn.mog.gg/zplace/full/1662890003181.png"]},{"timestamp":1662890604.72,"url":["https://zevent-cdn.mog.gg/zplace/full/1662890603586.png"]},{"timestamp":1662891204.801,"url":["https://zevent-cdn.mog.gg/zplace/full/1662891202673.png"]},{"timestamp":1662891804.878,"url":["https://zevent-cdn.mog.gg/zplace/full/1662891803599.png"]},{"timestamp":1662892404.927,"url":["https://zevent-cdn.mog.gg/zplace/full/1662892403551.png"]},{"timestamp":1662893005.084,"url":["https://zevent-cdn.mog.gg/zplace/full/1662892999776.png"]},{"timestamp":1662893605.153,"url":["https://zevent-cdn.mog.gg/zplace/full/1662893602097.png"]},{"timestamp":1662894205.219,"url":["https://zevent-cdn.mog.gg/zplace/full/1662894202218.png"]},{"timestamp":1662894805.324,"url":["https://zevent-cdn.mog.gg/zplace/full/1662894800962.png"]},{"timestamp":1662895405.39,"url":["https://zevent-cdn.mog.gg/zplace/full/1662895403658.png"]},{"timestamp":1662896005.512,"url":["https://zevent-cdn.mog.gg/zplace/full/1662896003825.png"]},{"timestamp":1662896605.627,"url":["https://zevent-cdn.mog.gg/zplace/full/1662896598433.png"]},{"timestamp":1662897205.761,"url":["https://zevent-cdn.mog.gg/zplace/full/1662897204080.png"]},{"timestamp":1662897805.837,"url":["https://zevent-cdn.mog.gg/zplace/full/1662897804457.png"]},{"timestamp":1662898405.92,"url":["https://zevent-cdn.mog.gg/zplace/full/1662898404216.png"]}],"icon":"<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 11 11' aria-hidden='true'><polygon points='3 0 8 0 8 1 9 1 9 2 10 2 10 3 9 3 9 4 10 4 10 3 11 3 11 4 11 8 10 8 10 9 9 9 9 8 8 8 8 7 7 7 7 5 8 5 8 4 7 4 7 3 6 3 6 2 7 2 7 1 5 1 5 2 4 2 4 5 5 5 5 6 3 6 3 5 1 5 1 7 3 7 3 8 4 8 4 10 8 10 8 11 3 11 3 10 2 10 2 9 1 9 1 8 0 8 0 3 1 3 1 2 2 2 2 1 3 1 3 0'/><polygon points='8 9 8 10 9 10 9 9'/></svg>"}}
	//,
	//tfc: {
	//	name: "The Final Clean",
	//	code: "T",
	//	default: 0,
	//	drawablePeriods: [0, 0],
	//	versions: [
	//		{
	//			timestamp: "Final",
	//			url: "./img/canvas/tfc/final.png",
	//		},
	//	],
	//	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><defs><style>.a{fill-rule:evenodd;}</style></defs><path class="a" d="M69.79,83.55c-.47,.65-.59,1.35-.59,1.35-.26,1.47,.76,2.72,.92,3.12,2.84,7.1,4.49,13.93,3.97,16.39-.47,2.18-5.6,5.65-12.36,8.33-3.63,1.44-6.11,2.99-8.04,5.01-7.17,7.51-10.24,17.86-7.14,24.05,3.93,7.84,18.38,5.86,28.05-3.85,2.09-2.1,3.15-3.83,6.63-10.77,2.97-5.93,4.26-8.05,5.47-8.95,2.04-1.52,9.82,.1,17.41,3.64,1.71,.8,2.31,1.04,2.78,.98,0,0,.22-.05,.43-.14,1.31-.59,17.43-17,25.58-25.34-1.79,.09-3.57,.18-5.36,.28-2.84,2.63-5.68,5.27-8.52,7.9-10.85-10.85-21.7-21.71-32.55-32.56,1.73-1.8,3.46-3.6,5.18-5.4-.29-1.56-.57-3.12-.86-4.69-1.34,1.27-19.42,18.45-21.01,20.66Zm-10.45,44.57c2.5,0,4.53,2.03,4.53,4.53s-2.03,4.53-4.53,4.53-4.53-2.03-4.53-4.53,2.03-4.53,4.53-4.53Z"/><path class="f" d="M132.9,97.36c-.88,.22-7.88,1.92-9.91-1.04-1.11-1.62-1.05-4.71-.52-6.57,.74-2.59,.9-4.06,.25-4.73-.73-.76-2.03-.31-3.73-.18-3.4,.27-8.08-.86-9.6-3.16-2.77-4.21,4.48-13.03,2.31-14.69-.17-.13-.34-.16-.67-.22-4.24-.73-6.79,4.71-11.66,5.1-2.93,.24-6.21-1.39-7.72-4.02-1.11-1.94-1-3.96-.86-4.95h0s7.38-7.39,17.6-17.52c12.75,12.73,25.51,25.47,38.26,38.2l-13.75,13.79Z"/><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/></svg>'
	//}
	// },
	// streamerless: {
	// 	name: "Streamerless",
	// 	code: "S",
	// 	default: 0,
	// 	drawablePeriods: [0, 0],
	// 	versions: [
	// 		{
	// 			timestamp: "Streamerless",
	// 			url: "./img/canvas/streamerless/streamerless.png",
	// 		},
	// 	],
	// 	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><path d="M-.07,0V192H191.93V38h-38V117.2l-28.5,28.8h-29.6l-24.89,25.2v-25.2H38.93V38h115V0H-.07Z"/><path d="M72.56,73.7l-7.64,7.64,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.63-7.64-7.87-7.87,7.87-7.87-7.63-7.64-7.87,7.87-7.87-7.87Z"/><path d="M137.39,73.7l-7.87,7.87-7.87-7.87-7.63,7.63,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.64-7.64-7.87-7.87,7.87-7.87-7.64-7.64Z"/></svg>'
	// }

const codeReference = {}
const imageCache = {}

const variantsEl = document.getElementById("variants")

for (const variation in variationsConfig) {
	codeReference[variationsConfig[variation].code] = variation
	const optionEl = document.createElement('option')
	optionEl.value = variation
	optionEl.textContent = variationsConfig[variation].name
	variantsEl.appendChild(optionEl)
}

const timelineSlider = document.getElementById("timeControlsSlider")
const timelineList = document.getElementById("timeControlsList")
const tooltip = document.getElementById("timeControlsTooltip")
const image = document.getElementById("image")
let abortController = new AbortController()
let currentUpdateIndex = 0
let updateTimeout = setTimeout(null, 0)
let tooltipDelayHide = setTimeout(null, 0)

let currentVariation = "default"
const defaultPeriod = variationsConfig[currentVariation].default
const defaultVariation = currentVariation
let currentPeriod = defaultPeriod
window.currentPeriod = currentPeriod
window.currentVariation = currentVariation

// SETUP
timelineSlider.max = variationsConfig[currentVariation].versions.length - 1
timelineSlider.value = currentPeriod
timelineList.children[0].value = defaultPeriod

timelineSlider.addEventListener("input", (e) => timelineParser(e.target.value))

timelineSlider.addEventListener("wheel", function (e) {
	if (e.deltaY < 0) {
		this.valueAsNumber += 1;
		timelineParser(this.value)
	} else {
		this.value -= 1;
		timelineParser(this.value)
	}
	e.stopPropagation();
}, { passive: true })

function timelineParser(value) {
	updateTooltip(parseInt(value), currentVariation)
	clearTimeout(updateTimeout)
	updateTimeout = setTimeout(() => {
		updateTime(parseInt(timelineSlider.value), currentVariation)
		setTimeout(() => {
			if (timelineSlider.value != currentPeriod && abortController.signal.aborted) {
				updateTime(parseInt(timelineSlider.value), currentVariation)
			}
		}, 50)
	}, 25)
}

variantsEl.addEventListener("input", (event) => {
	updateTime(-1, event.target.value)
})

const dispatchTimeUpdateEvent = (period = timelineSlider.value, atlas = atlas) => {
	const timeUpdateEvent = new CustomEvent('timeupdate', {
		detail: {
			period: period,
			atlas: atlas
		}
	})
	document.dispatchEvent(timeUpdateEvent)
}

async function updateBackground(newPeriod = currentPeriod, newVariation = currentVariation) {
	abortController.abort()
	abortController = new AbortController()
	currentUpdateIndex++
	const myUpdateIndex = currentUpdateIndex
	const variationConfig = variationsConfig[newVariation]

	variantsEl.value = currentVariation
	if (variationConfig.icon) {
		variantsEl.previousElementSibling.innerHTML = variationConfig.icon
		variantsEl.previousElementSibling.classList.remove('d-none')
		variantsEl.parentElement.classList.add('input-group')
	} else {
		variantsEl.previousElementSibling.innerHTML = ""
		variantsEl.previousElementSibling.classList.add('d-none')
		variantsEl.parentElement.classList.remove('input-group')
	}

	const configObject = variationConfig.versions[currentPeriod]
	if (typeof configObject.url === "string") {
		if (imageCache[configObject.url] === undefined) {
			const fetchResult = await fetch(configObject.url, {
				signal: abortController.signal
			})
			if (currentUpdateIndex !== myUpdateIndex) {
				return [configObject, newPeriod, newVariation]
			}
			const imageBlob = await fetchResult.blob()
			imageCache[configObject.url] = URL.createObjectURL(imageBlob)
			console.log(fetchResult)
		}
		image.src = imageCache[configObject.url]
	} else {
		const canvas = document.createElement('canvas')
		const context = canvas.getContext('2d')
		context.canvas.width = 700
		context.canvas.height = 700
		await Promise.all(configObject.url.map(async url => {
			if (imageCache[url] === undefined) {
				const fetchResult = await fetch(url, {
					signal: abortController.signal
				})
				if (currentUpdateIndex !== myUpdateIndex) {
					return
				}
				const imageBlob = await fetchResult.blob()
				imageCache[url] = URL.createObjectURL(imageBlob)
			}
		}))
		for await (const url of configObject.url) {
			const imageLayer = new Image()
			await new Promise(resolve => {
				imageLayer.onload = () => {
					context.drawImage(imageLayer, 0, 0)
					resolve()
				}
				imageLayer.src = imageCache[url]
			})
		}

		if (currentUpdateIndex !== myUpdateIndex) return [configObject, newPeriod, newVariation]
		const blob = await new Promise(resolve => canvas.toBlob(resolve))
		image.src = URL.createObjectURL(blob)
	}
}

async function updateTime(newPeriod = currentPeriod, newVariation = currentVariation, forcePeriod = false) {
	document.body.dataset.canvasLoading = ""

	if (!variationsConfig[newVariation]) newVariation = defaultVariation
	const variationConfig = variationsConfig[newVariation]

	if (newPeriod < 0) newPeriod = 0
	else if (newPeriod > variationConfig.versions.length - 1) newPeriod = variationConfig.versions.length - 1

	currentPeriod = newPeriod
	if (currentVariation !== newVariation) {
		currentVariation = newVariation
		timelineSlider.max = variationConfig.versions.length - 1
		if (!forcePeriod) {
			currentPeriod = variationConfig.default
			newPeriod = currentPeriod
		}
		if (variationConfig.versions.length === 1) bottomBar.classList.add('no-time-slider')
		else bottomBar.classList.remove('no-time-slider')
	}
	timelineSlider.value = currentPeriod
	updateTooltip(newPeriod, newVariation)

	await updateBackground(newPeriod, newVariation)

	atlas = []
	for (const atlasIndex in atlasAll) {
		let chosenIndex

		const validPeriods2 = Object.keys(atlasAll[atlasIndex].path)

		for (const i in validPeriods2) {
			const validPeriods = validPeriods2[i].split(', ')
			for (const j in validPeriods) {
				const [start, end, variation] = parsePeriod(validPeriods[j])
				if (isOnPeriod(start, end, variation, newPeriod, newVariation)) {
					chosenIndex = i
					break
				}
			}
			if (chosenIndex !== undefined) break
		}

		if (chosenIndex === undefined) continue
		const pathChosen = Object.values(atlasAll[atlasIndex].path)[chosenIndex]
		const centerChosen = Object.values(atlasAll[atlasIndex].center)[chosenIndex]

		if (pathChosen === undefined) continue

		atlas.push({
			...atlasAll[atlasIndex],
			path: pathChosen,
			center: centerChosen,
		})
	}

	dispatchTimeUpdateEvent(newPeriod, atlas)
	delete document.body.dataset.canvasLoading
	tooltip.dataset.forceVisible = ""
	clearTimeout(tooltipDelayHide)
	tooltipDelayHide = setTimeout(() => {
		delete tooltip.dataset.forceVisible
	}, 1000)

}

function updateTooltip(newPeriod, newVariation) {
	const configObject = variationsConfig[newVariation].versions[newPeriod]

	// If timestap is a number return a UTC formatted date otherwise use exact timestap label
	if (typeof configObject.timestamp === "number") tooltip.querySelector('div').textContent = new Date(configObject.timestamp * 1000).toString()
	else tooltip.querySelector('div').textContent = configObject.timestamp

	// Clamps position of tooltip to prevent from going off screen
	const timelineSliderRect = timelineSlider.getBoundingClientRect()
	let min = -timelineSliderRect.left + 12
	let max = (window.innerWidth - tooltip.offsetWidth) - timelineSliderRect.left + 4
	tooltip.style.left = Math.min(Math.max((timelineSlider.offsetWidth) * (timelineSlider.value) / (timelineSlider.max) - tooltip.offsetWidth / 2, min), max) + "px"
}

tooltip.parentElement.addEventListener('mouseenter', () => updateTooltip(parseInt(timelineSlider.value), currentVariation))

window.addEventListener('resize', () => updateTooltip(parseInt(timelineSlider.value), currentVariation))

function isOnPeriod(start, end, variation, currentPeriod, currentVariation) {
	if (start > end) [start, end] = [end, start]
	return currentPeriod >= start && currentPeriod <= end && variation === currentVariation
}

function parsePeriod(periodString) {
	let variation = defaultVariation
	periodString = periodString + ""
	if (periodString.split(':').length > 1) {
		const split = periodString.split(':')
		variation = codeReference[split[0]]
		periodString = split[1]
	}
	if (periodString.search('-') + 1) {
		let [start, end] = periodString.split('-').map(i => parseInt(i))
		if (start > end) [start, end] = [end, start]
		return [start, end, variation]
	} else if (codeReference[periodString]) {
		variation = codeReference[periodString]
		const defaultPeriod = variationsConfig[variation].default
		return [defaultPeriod, defaultPeriod, variation]
	} else {
		const periodNew = parseInt(periodString)
		return [periodNew, periodNew, variation]
	}
}

function formatPeriod(start, end, variation) {
	let periodString, variationString
	variationString = variationsConfig[variation].code
	if (start > end) [start, end] = [end, start]
	if (start === end) {
		if (start === variationsConfig[variation].default && variation !== defaultVariation) {
			periodString = ""
		}
		else periodString = start
	}
	else periodString = start + "-" + end
	if (periodString && variationString) return variationsConfig[variation].code + ":" + periodString
	if (variationString) return variationString
	return periodString
}