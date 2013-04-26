!function($) {
/* ========================================
	Namespace: Global Variables
======================================== */
var G = {};
!function(gv) {
	gv.header = $('#header'),
	gv.config = $('#config'),
	gv.eventConfigForm = G.config.find('form[name="event-config"]'),
	gv.mid = $('#mid'),
	gv.playerList = $('#player-list'),
	gv.playerConfigForm = G.playerList.find('form[name="player-config"]');
}(G);
/* ========================================
	Namespace: Ladders
======================================== */
var Ladders = {};
!function(ns) {
	console.log(G.config, G.eventConfig);
}(Ladders);

}(jQuery);