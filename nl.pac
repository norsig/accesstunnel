/*global shExpMatch*/
function FindProxyForURL(url, host) {
	"use strict";
	if (
		shExpMatch(host, "ads.adengage.com") ||
			shExpMatch(host, "adcode.adengage.com") ||
			shExpMatch(host, "cdn.cpmstar.com") ||
			shExpMatch(host, "cdn.mochiads.com") ||
			shExpMatch(host, "ads.intelco.com.br") ||
			shExpMatch(host, "fr.66.slidein.clickintext.net") ||
			shExpMatch(host, "fr.73.slidein.clickintext.net") ||
			shExpMatch(host, "www.assoc-amazon.fr") ||
			shExpMatch(host, "ws.amazon.fr") ||
			shExpMatch(host, "mc.dailymotion.com") ||
			shExpMatch(host, "deezer.purl.fr") ||
			shExpMatch(host, "pagead2.googlesyndication.com") ||
			shExpMatch(host, "www.easy-dating.org") ||
			shExpMatch(host, "server.cpmstar.com") ||
			shExpMatch(host, "meteof.highmetrics.com") ||
			shExpMatch(host, "fr.bluestreak.com") ||
			shExpMatch(host, "js.128b.com") ||
			shExpMatch(host, "s.megaclick.com") ||
			shExpMatch(host, "ktu.sv2.biz") ||
			shExpMatch(host, "tac2.xcams.com") ||
			shExpMatch(host, "www.extraits-hentai.com") ||
			shExpMatch(host, "ads.networldmedia.net") ||
			shExpMatch(host, "afflog08.dreamstore.ch") ||
			shExpMatch(host, "fr.cte.clickintext.net") ||
			shExpMatch(host, "cdn.rockyou.com") ||
			shExpMatch(host, "network.adsmarket.com") ||
			shExpMatch(host, "s3.buysellads.com") ||
			shExpMatch(host, "openads.dimcab.com") ||
			shExpMatch(host, "adcast.deviantart.com") ||
			shExpMatch(host, "perso.estat.com") ||
			shExpMatch(host, "d.advertstream.com") ||
			shExpMatch(host, "a01.gestionpub.com") ||
			shExpMatch(host, "queries.adwitserver.com") ||
			shExpMatch(host, "yui.yahooapis.com") ||
			shExpMatch(host, "creative.ak.fbcdn.net") ||
			shExpMatch(host, "dailymotion.cdn.auditude.com") ||
			shExpMatch(host, "cashtrafic.net") ||
			shExpMatch(host, "openadext.tf1.fr") ||
			shExpMatch(host, "www.ebuzzing.com") ||
			shExpMatch(host, "elstatic.weborama.fr") ||
			shExpMatch(host, "www.cashtrafic.com") ||
			shExpMatch(host, "broadcast.piximedia.fr") ||
			shExpMatch(host, "hades.bubblestat.com") ||
			shExpMatch(host, "rts.pgmediaserve.com") ||
			shExpMatch(host, "promotools.globalmailer.com") ||
			shExpMatch(host, "media.livepromotools.com") ||
			shExpMatch(host, "prod-pizzaopenx.integra.fr") ||
			shExpMatch(host, "pub.motion-twin.com") ||
			shExpMatch(host, "mfr.a2dfp.net") ||
			shExpMatch(host, "ads.adviva.net") ||
			shExpMatch(host, "smart.allocine.fr") ||
			shExpMatch(host, "adsrv.deviantart.com") ||
			shExpMatch(host, "cdn.qnsr.com") ||
			shExpMatch(host, "ads.clicmanager.fr") ||
			shExpMatch(host, "syndication.exoclick.com") ||
			shExpMatch(host, "www.game-advertising-online.com") ||
			shExpMatch(host, "ads.ankama.com") ||
			shExpMatch(host, "fr.a2dfp.net") ||
			shExpMatch(host, "img.cdn.betclick.com") ||
			shExpMatch(host, "zeus.bubblestat.com") ||
			shExpMatch(host, "www.ypmadserver.com") ||
			shExpMatch(host, "pod.xxxmatch.com") ||
			shExpMatch(host, "www3.smartadserver.com") ||
			shExpMatch(host, "ad.zanox.com") ||
			shExpMatch(host, "ad.yieldmanager.com") ||
			shExpMatch(host, "engine.espace.netavenir.com") ||
			shExpMatch(url, "http://www.nautiljon.com/promo/*") ||
			shExpMatch(url, "http://www.kadoweb.net/bannieres/*") ||
			shExpMatch(url, "http://fr.1sponsor.com/banners/*") ||
			shExpMatch(url, "http://streamate.com/exports/taskbar/*") ||
			shExpMatch(url, "http://kastatic.com/images/downloadBanner.png") ||
			shExpMatch(url, "http://static.thepiratebay.org/img/bar.gif") ||
			shExpMatch(host, "fl01.ct2.comclick.com") ||
			shExpMatch(host, "aka-cdn-ns.adtech.de") ||
			shExpMatch(host, "difflhttp.hvsdigital.com") ||
			shExpMatch(host, "banner.1and1.fr") ||
			shExpMatch(host, "googleads.g.doubleclick.net") ||
			shExpMatch(host, "openx.datacenterknowledge.com") ||
			shExpMatch(host, "show.v1.rtb.revcloud.adaos-ads.net") ||
			shExpMatch(host, "cdn.blogbang.com") ||
			shExpMatch(host, "fsoft4down.com") ||
			shExpMatch(host, "yceml.net") ||
			shExpMatch(url, "http://www.thumbnail-galleries.net/motherless/frame.php")
	) {
	//Random port
		return "PROXY nl.accesstunnel.net:8080";
	} else {
		return "HTTPS nl.accesstunnel.net:44300";
	}
}
