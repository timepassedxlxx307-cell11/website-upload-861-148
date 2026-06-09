const G = Number.isFinite || function (i) { return typeof i == "number" && isFinite(i); }, RS = Number.isSafeInteger || function (i) { return typeof i == "number" && Math.abs(i) <= wS; }, wS = Number.MAX_SAFE_INTEGER || 9007199254740991;
let q = function (i) { return i.NETWORK_ERROR = "networkError", i.MEDIA_ERROR = "mediaError", i.KEY_SYSTEM_ERROR = "keySystemError", i.MUX_ERROR = "muxError", i.OTHER_ERROR = "otherError", i; }({}), k = function (i) { return i.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", i.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", i.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", i.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", i.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", i.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", i.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", i.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", i.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", i.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", i.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError", i.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError", i.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError", i.MANIFEST_LOAD_ERROR = "manifestLoadError", i.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", i.MANIFEST_PARSING_ERROR = "manifestParsingError", i.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", i.LEVEL_EMPTY_ERROR = "levelEmptyError", i.LEVEL_LOAD_ERROR = "levelLoadError", i.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", i.LEVEL_PARSING_ERROR = "levelParsingError", i.LEVEL_SWITCH_ERROR = "levelSwitchError", i.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", i.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", i.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", i.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", i.FRAG_LOAD_ERROR = "fragLoadError", i.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", i.FRAG_DECRYPT_ERROR = "fragDecryptError", i.FRAG_PARSING_ERROR = "fragParsingError", i.FRAG_GAP = "fragGap", i.REMUX_ALLOC_ERROR = "remuxAllocError", i.KEY_LOAD_ERROR = "keyLoadError", i.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", i.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", i.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", i.BUFFER_APPEND_ERROR = "bufferAppendError", i.BUFFER_APPENDING_ERROR = "bufferAppendingError", i.BUFFER_STALLED_ERROR = "bufferStalledError", i.BUFFER_FULL_ERROR = "bufferFullError", i.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", i.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", i.ASSET_LIST_LOAD_ERROR = "assetListLoadError", i.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout", i.ASSET_LIST_PARSING_ERROR = "assetListParsingError", i.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError", i.INTERNAL_EXCEPTION = "internalException", i.INTERNAL_ABORTED = "aborted", i.ATTACH_MEDIA_ERROR = "attachMediaError", i.UNKNOWN = "unknown", i; }({}), S = function (i) { return i.MEDIA_ATTACHING = "hlsMediaAttaching", i.MEDIA_ATTACHED = "hlsMediaAttached", i.MEDIA_DETACHING = "hlsMediaDetaching", i.MEDIA_DETACHED = "hlsMediaDetached", i.MEDIA_ENDED = "hlsMediaEnded", i.STALL_RESOLVED = "hlsStallResolved", i.BUFFER_RESET = "hlsBufferReset", i.BUFFER_CODECS = "hlsBufferCodecs", i.BUFFER_CREATED = "hlsBufferCreated", i.BUFFER_APPENDING = "hlsBufferAppending", i.BUFFER_APPENDED = "hlsBufferAppended", i.BUFFER_EOS = "hlsBufferEos", i.BUFFERED_TO_END = "hlsBufferedToEnd", i.BUFFER_FLUSHING = "hlsBufferFlushing", i.BUFFER_FLUSHED = "hlsBufferFlushed", i.MANIFEST_LOADING = "hlsManifestLoading", i.MANIFEST_LOADED = "hlsManifestLoaded", i.MANIFEST_PARSED = "hlsManifestParsed", i.LEVEL_SWITCHING = "hlsLevelSwitching", i.LEVEL_SWITCHED = "hlsLevelSwitched", i.LEVEL_LOADING = "hlsLevelLoading", i.LEVEL_LOADED = "hlsLevelLoaded", i.LEVEL_UPDATED = "hlsLevelUpdated", i.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", i.LEVELS_UPDATED = "hlsLevelsUpdated", i.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", i.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", i.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", i.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", i.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", i.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated", i.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", i.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", i.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", i.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", i.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", i.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated", i.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", i.CUES_PARSED = "hlsCuesParsed", i.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", i.INIT_PTS_FOUND = "hlsInitPtsFound", i.FRAG_LOADING = "hlsFragLoading", i.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", i.FRAG_LOADED = "hlsFragLoaded", i.FRAG_DECRYPTED = "hlsFragDecrypted", i.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", i.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", i.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", i.FRAG_PARSED = "hlsFragParsed", i.FRAG_BUFFERED = "hlsFragBuffered", i.FRAG_CHANGED = "hlsFragChanged", i.FPS_DROP = "hlsFpsDrop", i.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", i.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", i.ERROR = "hlsError", i.DESTROYING = "hlsDestroying", i.KEY_LOADING = "hlsKeyLoading", i.KEY_LOADED = "hlsKeyLoaded", i.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", i.BACK_BUFFER_REACHED = "hlsBackBufferReached", i.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", i.ASSET_LIST_LOADING = "hlsAssetListLoading", i.ASSET_LIST_LOADED = "hlsAssetListLoaded", i.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated", i.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary", i.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated", i.INTERSTITIAL_STARTED = "hlsInterstitialStarted", i.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted", i.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded", i.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError", i.INTERSTITIAL_ENDED = "hlsInterstitialEnded", i.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed", i.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached", i.EVENT_CUE_ENTER = "hlsEventCueEnter", i; }({});
var se = { MANIFEST: "manifest", LEVEL: "level", AUDIO_TRACK: "audioTrack", SUBTITLE_TRACK: "subtitleTrack" }, z = { MAIN: "main", AUDIO: "audio", SUBTITLE: "subtitle" };
class Es {
    constructor(e, t = 0, s = 0) { this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = s; }
    sample(e, t) { const s = Math.pow(this.alpha_, e); this.estimate_ = t * (1 - s) + s * this.estimate_, this.totalWeight_ += e; }
    getTotalWeight() { return this.totalWeight_; }
    getEstimate() { if (this.alpha_) {
        const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
        if (e)
            return this.estimate_ / e;
    } return this.estimate_; }
}
class _S {
    constructor(e, t, s, n = 100) { this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Es(e), this.fast_ = new Es(t), this.defaultTTFB_ = n, this.ttfb_ = new Es(e); }
    update(e, t) { const { slow_: s, fast_: n, ttfb_: r } = this; s.halfLife !== e && (this.slow_ = new Es(e, s.getEstimate(), s.getTotalWeight())), n.halfLife !== t && (this.fast_ = new Es(t, n.getEstimate(), n.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new Es(e, r.getEstimate(), r.getTotalWeight())); }
    sample(e, t) { e = Math.max(e, this.minDelayMs_); const s = 8 * t, n = e / 1e3, r = s / n; this.fast_.sample(n, r), this.slow_.sample(n, r); }
    sampleTTFB(e) { const t = e / 1e3, s = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2); this.ttfb_.sample(s, Math.max(e, 5)); }
    canEstimate() { return this.fast_.getTotalWeight() >= this.minWeight_; }
    getEstimate() { return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_; }
    getEstimateTTFB() { return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_; }
    get defaultEstimate() { return this.defaultEstimate_; }
    destroy() { }
}
function bS(i, e, t) { return (e = CS(e)) in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i; }
function ce() { return ce = Object.assign ? Object.assign.bind() : function (i) { for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e];
    for (var s in t)
        ({}).hasOwnProperty.call(t, s) && (i[s] = t[s]);
} return i; }, ce.apply(null, arguments); }
function Ph(i, e) { var t = Object.keys(i); if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    e && (s = s.filter(function (n) { return Object.getOwnPropertyDescriptor(i, n).enumerable; })), t.push.apply(t, s);
} return t; }
function oe(i) { for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ph(Object(t), !0).forEach(function (s) { bS(i, s, t[s]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Ph(Object(t)).forEach(function (s) { Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(t, s)); });
} return i; }
function kS(i, e) { if (typeof i != "object" || !i)
    return i; var t = i[Symbol.toPrimitive]; if (t !== void 0) {
    var s = t.call(i, e);
    if (typeof s != "object")
        return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
} return (e === "string" ? String : Number)(i); }
function CS(i) { var e = kS(i, "string"); return typeof e == "symbol" ? e : e + ""; }
class _t {
    constructor(e, t) { this.trace = void 0, this.debug = void 0, this.log = void 0, this.warn = void 0, this.info = void 0, this.error = void 0; const s = `[${e}]:`; this.trace = Ri, this.debug = t.debug.bind(null, s), this.log = t.log.bind(null, s), this.warn = t.warn.bind(null, s), this.info = t.info.bind(null, s), this.error = t.error.bind(null, s); }
}
const Ri = function () { }, DS = { trace: Ri, debug: Ri, log: Ri, warn: Ri, info: Ri, error: Ri };
function Iu() { return ce({}, DS); }
function PS(i, e) { const t = self.console[i]; return t ? t.bind(self.console, `${e ? "[" + e + "] " : ""}[${i}] >`) : Ri; }
function Nh(i, e, t) { return e[i] ? e[i].bind(e) : PS(i, t); }
const Au = Iu();
function NS(i, e, t) { const s = Iu(); if (typeof console == "object" && i === !0 || typeof i == "object") {
    const n = ["debug", "log", "info", "warn", "error"];
    n.forEach(r => { s[r] = Nh(r, i, t); });
    try {
        s.log(`Debug logs enabled for "${e}" in hls.js version 1.6.15`);
    }
    catch {
        return Iu();
    }
    n.forEach(r => { Au[r] = Nh(r, i); });
}
else
    ce(Au, s); return s; }
const le = Au;
function Vi(i = !0) { return typeof self > "u" ? void 0 : (i || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource; }
function OS(i) { return typeof self < "u" && i === self.ManagedMediaSource; }
function kg(i, e) { const t = Object.keys(i), s = Object.keys(e), n = t.length, r = s.length; return !n || !r || n === r && !t.some(a => s.indexOf(a) === -1); }
function gt(i, e = !1) { if (typeof TextDecoder < "u") {
    const u = new TextDecoder("utf-8").decode(i);
    if (e) {
        const c = u.indexOf("\0");
        return c !== -1 ? u.substring(0, c) : u;
    }
    return u.replace(/\0/g, "");
} const t = i.length; let s, n, r, a = "", o = 0; for (; o < t;) {
    if (s = i[o++], s === 0 && e)
        return a;
    if (s === 0 || s === 3)
        continue;
    switch (s >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            a += String.fromCharCode(s);
            break;
        case 12:
        case 13:
            n = i[o++], a += String.fromCharCode((s & 31) << 6 | n & 63);
            break;
        case 14:
            n = i[o++], r = i[o++], a += String.fromCharCode((s & 15) << 12 | (n & 63) << 6 | (r & 63) << 0);
            break;
    }
} return a; }
function je(i) { let e = ""; for (let t = 0; t < i.length; t++) {
    let s = i[t].toString(16);
    s.length < 2 && (s = "0" + s), e += s;
} return e; }
function Cg(i) { return Uint8Array.from(i.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer; }
function MS(i) { return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i; }
var rl = { exports: {} }, Oh;
function FS() { return Oh || (Oh = 1, function (i, e) { (function (t) { var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, n = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = { buildAbsoluteURL: function (l, u, c) { if (c = c || {}, l = l.trim(), u = u.trim(), !u) {
        if (!c.alwaysNormalize)
            return l;
        var d = o.parseURL(l);
        if (!d)
            throw new Error("Error trying to parse base URL.");
        return d.path = o.normalizePath(d.path), o.buildURLFromParts(d);
    } var h = o.parseURL(u); if (!h)
        throw new Error("Error trying to parse relative URL."); if (h.scheme)
        return c.alwaysNormalize ? (h.path = o.normalizePath(h.path), o.buildURLFromParts(h)) : u; var f = o.parseURL(l); if (!f)
        throw new Error("Error trying to parse base URL."); if (!f.netLoc && f.path && f.path[0] !== "/") {
        var m = n.exec(f.path);
        f.netLoc = m[1], f.path = m[2];
    } f.netLoc && !f.path && (f.path = "/"); var p = { scheme: f.scheme, netLoc: h.netLoc, path: null, params: h.params, query: h.query, fragment: h.fragment }; if (!h.netLoc && (p.netLoc = f.netLoc, h.path[0] !== "/"))
        if (!h.path)
            p.path = f.path, h.params || (p.params = f.params, h.query || (p.query = f.query));
        else {
            var x = f.path, y = x.substring(0, x.lastIndexOf("/") + 1) + h.path;
            p.path = o.normalizePath(y);
        } return p.path === null && (p.path = c.alwaysNormalize ? o.normalizePath(h.path) : h.path), o.buildURLFromParts(p); }, parseURL: function (l) { var u = s.exec(l); return u ? { scheme: u[1] || "", netLoc: u[2] || "", path: u[3] || "", params: u[4] || "", query: u[5] || "", fragment: u[6] || "" } : null; }, normalizePath: function (l) { for (l = l.split("").reverse().join("").replace(r, ""); l.length !== (l = l.replace(a, "")).length;)
        ; return l.split("").reverse().join(""); }, buildURLFromParts: function (l) { return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment; } }; i.exports = o; })(); }(rl)), rl.exports; }
var Vc = FS();
class Kc {
    constructor() { this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 }; }
}
var he = { AUDIO: "audio", VIDEO: "video", AUDIOVIDEO: "audiovideo" };
class Dg {
    constructor(e) { this._byteRange = null, this._url = null, this._stats = null, this._streams = null, this.base = void 0, this.relurl = void 0, typeof e == "string" && (e = { url: e }), this.base = e, BS(this, "stats"); }
    setByteRange(e, t) { const s = e.split("@", 2); let n; s.length === 1 ? n = (t == null ? void 0 : t.byteRangeEndOffset) || 0 : n = parseInt(s[1]), this._byteRange = [n, parseInt(s[0]) + n]; }
    get baseurl() { return this.base.url; }
    get byteRange() { return this._byteRange === null ? [] : this._byteRange; }
    get byteRangeStartOffset() { return this.byteRange[0]; }
    get byteRangeEndOffset() { return this.byteRange[1]; }
    get elementaryStreams() { return this._streams === null && (this._streams = { [he.AUDIO]: null, [he.VIDEO]: null, [he.AUDIOVIDEO]: null }), this._streams; }
    set elementaryStreams(e) { this._streams = e; }
    get hasStats() { return this._stats !== null; }
    get hasStreams() { return this._streams !== null; }
    get stats() { return this._stats === null && (this._stats = new Kc), this._stats; }
    set stats(e) { this._stats = e; }
    get url() { return !this._url && this.baseurl && this.relurl && (this._url = Vc.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: !0 })), this._url || ""; }
    set url(e) { this._url = e; }
    clearElementaryStreamInfo() { const { elementaryStreams: e } = this; e[he.AUDIO] = null, e[he.VIDEO] = null, e[he.AUDIOVIDEO] = null; }
}
function be(i) { return i.sn !== "initSegment"; }
class al extends Dg {
    constructor(e, t) { super(t), this._decryptdata = null, this._programDateTime = null, this._ref = null, this._bitrate = void 0, this.rawProgramDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.playlistOffset = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e; }
    get byteLength() { if (this.hasStats) {
        const e = this.stats.total;
        if (e)
            return e;
    } if (this.byteRange.length) {
        const e = this.byteRange[0], t = this.byteRange[1];
        if (G(e) && G(t))
            return t - e;
    } return null; }
    get bitrate() { return this.byteLength ? this.byteLength * 8 / this.duration : this._bitrate ? this._bitrate : null; }
    set bitrate(e) { this._bitrate = e; }
    get decryptdata() { var e; const { levelkeys: t } = this; if (!t || t.NONE)
        return null; if (t.identity)
        this._decryptdata || (this._decryptdata = t.identity.getDecryptData(this.sn));
    else if (!((e = this._decryptdata) != null && e.keyId)) {
        const s = Object.keys(t);
        if (s.length === 1) {
            const n = this._decryptdata = t[s[0]] || null;
            n && (this._decryptdata = n.getDecryptData(this.sn, t));
        }
    } return this._decryptdata; }
    get end() { return this.start + this.duration; }
    get endProgramDateTime() { if (this.programDateTime === null)
        return null; const e = G(this.duration) ? this.duration : 0; return this.programDateTime + e * 1e3; }
    get encrypted() { var e; if ((e = this._decryptdata) != null && e.encrypted)
        return !0; if (this.levelkeys) {
        var t;
        const s = Object.keys(this.levelkeys), n = s.length;
        if (n > 1 || n === 1 && (t = this.levelkeys[s[0]]) != null && t.encrypted)
            return !0;
    } return !1; }
    get programDateTime() { return this._programDateTime === null && this.rawProgramDateTime && (this.programDateTime = Date.parse(this.rawProgramDateTime)), this._programDateTime; }
    set programDateTime(e) { if (!G(e)) {
        this._programDateTime = this.rawProgramDateTime = null;
        return;
    } this._programDateTime = e; }
    get ref() { return be(this) ? (this._ref || (this._ref = { base: this.base, start: this.start, duration: this.duration, sn: this.sn, programDateTime: this.programDateTime }), this._ref) : null; }
    addStart(e) { this.setStart(this.start + e); }
    setStart(e) { this.start = e, this._ref && (this._ref.start = e); }
    setDuration(e) { this.duration = e, this._ref && (this._ref.duration = e); }
    setKeyFormat(e) { const t = this.levelkeys; if (t) {
        var s;
        const n = t[e];
        n && !((s = this._decryptdata) != null && s.keyId) && (this._decryptdata = n.getDecryptData(this.sn, t));
    } }
    abortRequests() { var e, t; (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort(); }
    setElementaryStreamInfo(e, t, s, n, r, a = !1) { const { elementaryStreams: o } = this, l = o[e]; if (!l) {
        o[e] = { startPTS: t, endPTS: s, startDTS: n, endDTS: r, partial: a };
        return;
    } l.startPTS = Math.min(l.startPTS, t), l.endPTS = Math.max(l.endPTS, s), l.startDTS = Math.min(l.startDTS, n), l.endDTS = Math.max(l.endDTS, r); }
}
class US extends Dg {
    constructor(e, t, s, n, r) { super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = n; const a = e.enumeratedString("BYTERANGE"); a && this.setByteRange(a, r), r && (this.fragOffset = r.fragOffset + r.duration); }
    get start() { return this.fragment.start + this.fragOffset; }
    get end() { return this.start + this.duration; }
    get loaded() { const { elementaryStreams: e } = this; return !!(e.audio || e.video || e.audiovideo); }
}
function Pg(i, e) { const t = Object.getPrototypeOf(i); if (t) {
    const s = Object.getOwnPropertyDescriptor(t, e);
    return s || Pg(t, e);
} }
function BS(i, e) { const t = Pg(i, e); t && (t.enumerable = !0, Object.defineProperty(i, e, t)); }
const Mh = Math.pow(2, 32) - 1, $S = [].push, Ng = { video: 1, audio: 2, id3: 3, text: 4 };
function Ce(i) { return String.fromCharCode.apply(null, i); }
function Og(i, e) { const t = i[e] << 8 | i[e + 1]; return t < 0 ? 65536 + t : t; }
function Q(i, e) { const t = Mg(i, e); return t < 0 ? 4294967296 + t : t; }
function Fh(i, e) { let t = Q(i, e); return t *= Math.pow(2, 32), t += Q(i, e + 4), t; }
function Mg(i, e) { return i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]; }
function jS(i) { const e = i.byteLength; for (let t = 0; t < e;) {
    const s = Q(i, t);
    if (s > 8 && i[t + 4] === 109 && i[t + 5] === 111 && i[t + 6] === 111 && i[t + 7] === 102)
        return !0;
    t = s > 1 ? t + s : e;
} return !1; }
function te(i, e) { const t = []; if (!e.length)
    return t; const s = i.byteLength; for (let n = 0; n < s;) {
    const r = Q(i, n), a = Ce(i.subarray(n + 4, n + 8)), o = r > 1 ? n + r : s;
    if (a === e[0])
        if (e.length === 1)
            t.push(i.subarray(n + 8, o));
        else {
            const l = te(i.subarray(n + 8, o), e.slice(1));
            l.length && $S.apply(t, l);
        }
    n = o;
} return t; }
function GS(i) { const e = [], t = i[0]; let s = 8; const n = Q(i, s); s += 4; let r = 0, a = 0; t === 0 ? (r = Q(i, s), a = Q(i, s + 4), s += 8) : (r = Fh(i, s), a = Fh(i, s + 8), s += 16), s += 2; let o = i.length + a; const l = Og(i, s); s += 2; for (let u = 0; u < l; u++) {
    let c = s;
    const d = Q(i, c);
    c += 4;
    const h = d & 2147483647;
    if ((d & 2147483648) >>> 31 === 1)
        return le.warn("SIDX has hierarchical references (not supported)"), null;
    const m = Q(i, c);
    c += 4, e.push({ referenceSize: h, subsegmentDuration: m, info: { duration: m / n, start: o, end: o + h - 1 } }), o += h, c += 4, s = c;
} return { earliestPresentationTime: r, timescale: n, version: t, referencesCount: l, references: e }; }
function Fg(i) { const e = [], t = te(i, ["moov", "trak"]); for (let n = 0; n < t.length; n++) {
    const r = t[n], a = te(r, ["tkhd"])[0];
    if (a) {
        let o = a[0];
        const l = Q(a, o === 0 ? 12 : 20), u = te(r, ["mdia", "mdhd"])[0];
        if (u) {
            o = u[0];
            const c = Q(u, o === 0 ? 12 : 20), d = te(r, ["mdia", "hdlr"])[0];
            if (d) {
                const h = Ce(d.subarray(8, 12)), f = { soun: he.AUDIO, vide: he.VIDEO }[h], m = te(r, ["mdia", "minf", "stbl", "stsd"])[0], p = VS(m);
                f ? (e[l] = { timescale: c, type: f, stsd: p }, e[f] = oe({ timescale: c, id: l }, p)) : e[l] = { timescale: c, type: h, stsd: p };
            }
        }
    }
} return te(i, ["moov", "mvex", "trex"]).forEach(n => { const r = Q(n, 4), a = e[r]; a && (a.default = { duration: Q(n, 12), flags: Q(n, 20) }); }), e; }
function VS(i) { const e = i.subarray(8), t = e.subarray(86), s = Ce(e.subarray(4, 8)); let n = s, r; const a = s === "enca" || s === "encv"; if (a) {
    const u = te(e, [s])[0].subarray(s === "enca" ? 28 : 78);
    te(u, ["sinf"]).forEach(d => { const h = te(d, ["schm"])[0]; if (h) {
        const f = Ce(h.subarray(4, 8));
        if (f === "cbcs" || f === "cenc") {
            const m = te(d, ["frma"])[0];
            m && (n = Ce(m));
        }
    } });
} const o = n; switch (n) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
        const l = te(t, ["avcC"])[0];
        l && l.length > 3 && (n += "." + jr(l[1]) + jr(l[2]) + jr(l[3]), r = $r(o === "avc1" ? "dva1" : "dvav", t));
        break;
    }
    case "mp4a": {
        const l = te(e, [s])[0], u = te(l.subarray(28), ["esds"])[0];
        if (u && u.length > 7) {
            let c = 4;
            if (u[c++] !== 3)
                break;
            c = ol(u, c), c += 2;
            const d = u[c++];
            if (d & 128 && (c += 2), d & 64 && (c += u[c++]), u[c++] !== 4)
                break;
            c = ol(u, c);
            const h = u[c++];
            if (h === 64)
                n += "." + jr(h);
            else
                break;
            if (c += 12, u[c++] !== 5)
                break;
            c = ol(u, c);
            const f = u[c++];
            let m = (f & 248) >> 3;
            m === 31 && (m += 1 + ((f & 7) << 3) + ((u[c] & 224) >> 5)), n += "." + m;
        }
        break;
    }
    case "hvc1":
    case "hev1": {
        const l = te(t, ["hvcC"])[0];
        if (l && l.length > 12) {
            const u = l[1], c = ["", "A", "B", "C"][u >> 6], d = u & 31, h = Q(l, 2), f = (u & 32) >> 5 ? "H" : "L", m = l[12], p = l.subarray(6, 12);
            n += "." + c + d, n += "." + KS(h).toString(16).toUpperCase(), n += "." + f + m;
            let x = "";
            for (let y = p.length; y--;) {
                const v = p[y];
                (v || x) && (x = "." + v.toString(16).toUpperCase() + x);
            }
            n += x;
        }
        r = $r(o == "hev1" ? "dvhe" : "dvh1", t);
        break;
    }
    case "dvh1":
    case "dvhe":
    case "dvav":
    case "dva1":
    case "dav1": {
        n = $r(n, t) || n;
        break;
    }
    case "vp09": {
        const l = te(t, ["vpcC"])[0];
        if (l && l.length > 6) {
            const u = l[4], c = l[5], d = l[6] >> 4 & 15;
            n += "." + zt(u) + "." + zt(c) + "." + zt(d);
        }
        break;
    }
    case "av01": {
        const l = te(t, ["av1C"])[0];
        if (l && l.length > 2) {
            const u = l[1] >>> 5, c = l[1] & 31, d = l[2] >>> 7 ? "H" : "M", h = (l[2] & 64) >> 6, f = (l[2] & 32) >> 5, m = u === 2 && h ? f ? 12 : 10 : h ? 10 : 8, p = (l[2] & 16) >> 4, x = (l[2] & 8) >> 3, y = (l[2] & 4) >> 2, v = l[2] & 3;
            n += "." + u + "." + zt(c) + d + "." + zt(m) + "." + p + "." + x + y + v + "." + zt(1) + "." + zt(1) + "." + zt(1) + "." + 0, r = $r("dav1", t);
        }
        break;
    }
} return { codec: n, encrypted: a, supplemental: r }; }
function $r(i, e) { const t = te(e, ["dvvC"]), s = t.length ? t[0] : te(e, ["dvcC"])[0]; if (s) {
    const n = s[2] >> 1 & 127, r = s[2] << 5 & 32 | s[3] >> 3 & 31;
    return i + "." + zt(n) + "." + zt(r);
} }
function KS(i) { let e = 0; for (let t = 0; t < 32; t++)
    e |= (i >> t & 1) << 31 - t; return e >>> 0; }
function ol(i, e) { const t = e + 5; for (; i[e++] & 128 && e < t;)
    ; return e; }
function jr(i) { return ("0" + i.toString(16).toUpperCase()).slice(-2); }
function zt(i) { return (i < 10 ? "0" : "") + i; }
function HS(i, e) { if (!i || !e)
    return; const t = e.keyId; t && e.isCommonEncryption && Ug(i, (s, n) => { const r = s.subarray(8, 24); r.some(a => a !== 0) || (le.log(`[eme] Patching keyId in 'enc${n ? "a" : "v"}>sinf>>tenc' box: ${je(r)} -> ${je(t)}`), s.set(t, 8)); }); }
function zS(i) { const e = []; return Ug(i, t => e.push(t.subarray(8, 24))), e; }
function Ug(i, e) { te(i, ["moov", "trak"]).forEach(s => { const n = te(s, ["mdia", "minf", "stbl", "stsd"])[0]; if (!n)
    return; const r = n.subarray(8); let a = te(r, ["enca"]); const o = a.length > 0; o || (a = te(r, ["encv"])), a.forEach(l => { const u = o ? l.subarray(28) : l.subarray(78); te(u, ["sinf"]).forEach(d => { const h = Bg(d); h && e(h, o); }); }); }); }
function Bg(i) { const e = te(i, ["schm"])[0]; if (e) {
    const t = Ce(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc") {
        const s = te(i, ["schi", "tenc"])[0];
        if (s)
            return s;
    }
} }
function WS(i, e, t) { const s = {}, n = te(i, ["moof", "traf"]); for (let r = 0; r < n.length; r++) {
    const a = n[r], o = te(a, ["tfhd"])[0], l = Q(o, 4), u = e[l];
    if (!u)
        continue;
    s[l] || (s[l] = { start: NaN, duration: 0, sampleCount: 0, timescale: u.timescale, type: u.type });
    const c = s[l], d = te(a, ["tfdt"])[0];
    if (d) {
        const E = d[0];
        let T = Q(d, 4);
        E === 1 && (T === Mh ? t.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time") : (T *= Mh + 1, T += Q(d, 8))), G(T) && (!G(c.start) || T < c.start) && (c.start = T);
    }
    const h = u.default, f = Q(o, 0) | (h == null ? void 0 : h.flags);
    let m = (h == null ? void 0 : h.duration) || 0;
    f & 8 && (f & 2 ? m = Q(o, 12) : m = Q(o, 8));
    const p = te(a, ["trun"]);
    let x = c.start || 0, y = 0, v = m;
    for (let E = 0; E < p.length; E++) {
        const T = p[E], L = Q(T, 4), w = c.sampleCount;
        c.sampleCount += L;
        const I = T[3] & 1, R = T[3] & 4, _ = T[2] & 1, A = T[2] & 2, D = T[2] & 4, B = T[2] & 8;
        let V = 8, Y = L;
        for (I && (V += 4), R && L && (!(T[V + 1] & 1) && c.keyFrameIndex === void 0 && (c.keyFrameIndex = w), V += 4, _ ? (v = Q(T, V), V += 4) : v = m, A && (V += 4), B && (V += 4), x += v, y += v, Y--); Y--;)
            _ ? (v = Q(T, V), V += 4) : v = m, A && (V += 4), D && (T[V + 1] & 1 || c.keyFrameIndex === void 0 && (c.keyFrameIndex = c.sampleCount - (Y + 1), c.keyFrameStart = x), V += 4), B && (V += 4), x += v, y += v;
        !y && m && (y += m * L);
    }
    c.duration += y;
} if (!Object.keys(s).some(r => s[r].duration)) {
    let r = 1 / 0, a = 0;
    const o = te(i, ["sidx"]);
    for (let l = 0; l < o.length; l++) {
        const u = GS(o[l]);
        if (u != null && u.references) {
            r = Math.min(r, u.earliestPresentationTime / u.timescale);
            const c = u.references.reduce((d, h) => d + h.info.duration || 0, 0);
            a = Math.max(a, c + u.earliestPresentationTime / u.timescale);
        }
    }
    a && G(a) && Object.keys(s).forEach(l => { s[l].duration || (s[l].duration = a * s[l].timescale - s[l].start); });
} return s; }
function YS(i) { const e = { valid: null, remainder: null }, t = te(i, ["moof"]); if (t.length < 2)
    return e.remainder = i, e; const s = t[t.length - 1]; return e.valid = i.slice(0, s.byteOffset - 8), e.remainder = i.slice(s.byteOffset - 8), e; }
function wt(i, e) { const t = new Uint8Array(i.length + e.length); return t.set(i), t.set(e, i.length), t; }
function Uh(i, e) { const t = [], s = e.samples, n = e.timescale, r = e.id; let a = !1; return te(s, ["moof"]).map(l => { const u = l.byteOffset - 8; te(l, ["traf"]).map(d => { const h = te(d, ["tfdt"]).map(f => { const m = f[0]; let p = Q(f, 4); return m === 1 && (p *= Math.pow(2, 32), p += Q(f, 8)), p / n; })[0]; return h !== void 0 && (i = h), te(d, ["tfhd"]).map(f => { const m = Q(f, 4), p = Q(f, 0) & 16777215, x = (p & 1) !== 0, y = (p & 2) !== 0, v = (p & 8) !== 0; let E = 0; const T = (p & 16) !== 0; let L = 0; const w = (p & 32) !== 0; let I = 8; m === r && (x && (I += 8), y && (I += 4), v && (E = Q(f, I), I += 4), T && (L = Q(f, I), I += 4), w && (I += 4), e.type === "video" && (a = Ao(e.codec)), te(d, ["trun"]).map(R => { const _ = R[0], A = Q(R, 0) & 16777215, D = (A & 1) !== 0; let B = 0; const V = (A & 4) !== 0, Y = (A & 256) !== 0; let K = 0; const $ = (A & 512) !== 0; let H = 0; const C = (A & 1024) !== 0, O = (A & 2048) !== 0; let j = 0; const M = Q(R, 4); let F = 8; D && (B = Q(R, F), F += 4), V && (F += 4); let X = B + u; for (let ie = 0; ie < M; ie++) {
    if (Y ? (K = Q(R, F), F += 4) : K = E, $ ? (H = Q(R, F), F += 4) : H = L, C && (F += 4), O && (_ === 0 ? j = Q(R, F) : j = Mg(R, F), F += 4), e.type === he.VIDEO) {
        let J = 0;
        for (; J < H;) {
            const ee = Q(s, X);
            if (X += 4, qS(a, s[X])) {
                const we = s.subarray(X, X + ee);
                Hc(we, a ? 2 : 1, i + j / n, t);
            }
            X += ee, J += ee + 4;
        }
    }
    i += K / n;
} })); }); }); }), t; }
function Ao(i) { if (!i)
    return !1; const e = i.substring(0, 4); return e === "hvc1" || e === "hev1" || e === "dvh1" || e === "dvhe"; }
function qS(i, e) { if (i) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
}
else
    return (e & 31) === 6; }
function Hc(i, e, t, s) { const n = $g(i); let r = 0; r += e; let a = 0, o = 0, l = 0; for (; r < n.length;) {
    a = 0;
    do {
        if (r >= n.length)
            break;
        l = n[r++], a += l;
    } while (l === 255);
    o = 0;
    do {
        if (r >= n.length)
            break;
        l = n[r++], o += l;
    } while (l === 255);
    const u = n.length - r;
    let c = r;
    if (o < u)
        r += o;
    else if (o > u) {
        le.error(`Malformed SEI payload. ${o} is too small, only ${u} bytes left to parse.`);
        break;
    }
    if (a === 4) {
        if (n[c++] === 181) {
            const h = Og(n, c);
            if (c += 2, h === 49) {
                const f = Q(n, c);
                if (c += 4, f === 1195456820) {
                    const m = n[c++];
                    if (m === 3) {
                        const p = n[c++], x = 31 & p, y = 64 & p, v = y ? 2 + x * 3 : 0, E = new Uint8Array(v);
                        if (y) {
                            E[0] = p;
                            for (let T = 1; T < v; T++)
                                E[T] = n[c++];
                        }
                        s.push({ type: m, payloadType: a, pts: t, bytes: E });
                    }
                }
            }
        }
    }
    else if (a === 5 && o > 16) {
        const d = [];
        for (let m = 0; m < 16; m++) {
            const p = n[c++].toString(16);
            d.push(p.length == 1 ? "0" + p : p), (m === 3 || m === 5 || m === 7 || m === 9) && d.push("-");
        }
        const h = o - 16, f = new Uint8Array(h);
        for (let m = 0; m < h; m++)
            f[m] = n[c++];
        s.push({ payloadType: a, pts: t, uuid: d.join(""), userData: gt(f), userDataBytes: f });
    }
} }
function $g(i) { const e = i.byteLength, t = []; let s = 1; for (; s < e - 2;)
    i[s] === 0 && i[s + 1] === 0 && i[s + 2] === 3 ? (t.push(s + 2), s += 2) : s++; if (t.length === 0)
    return i; const n = e - t.length, r = new Uint8Array(n); let a = 0; for (s = 0; s < n; a++, s++)
    a === t[0] && (a++, t.shift()), r[s] = i[a]; return r; }
function QS(i) { const e = i[0]; let t = "", s = "", n = 0, r = 0, a = 0, o = 0, l = 0, u = 0; if (e === 0) {
    for (; Ce(i.subarray(u, u + 1)) !== "\0";)
        t += Ce(i.subarray(u, u + 1)), u += 1;
    for (t += Ce(i.subarray(u, u + 1)), u += 1; Ce(i.subarray(u, u + 1)) !== "\0";)
        s += Ce(i.subarray(u, u + 1)), u += 1;
    s += Ce(i.subarray(u, u + 1)), u += 1, n = Q(i, 12), r = Q(i, 16), o = Q(i, 20), l = Q(i, 24), u = 28;
}
else if (e === 1) {
    u += 4, n = Q(i, u), u += 4;
    const d = Q(i, u);
    u += 4;
    const h = Q(i, u);
    for (u += 4, a = 2 ** 32 * d + h, RS(a) || (a = Number.MAX_SAFE_INTEGER, le.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = Q(i, u), u += 4, l = Q(i, u), u += 4; Ce(i.subarray(u, u + 1)) !== "\0";)
        t += Ce(i.subarray(u, u + 1)), u += 1;
    for (t += Ce(i.subarray(u, u + 1)), u += 1; Ce(i.subarray(u, u + 1)) !== "\0";)
        s += Ce(i.subarray(u, u + 1)), u += 1;
    s += Ce(i.subarray(u, u + 1)), u += 1;
} const c = i.subarray(u, i.byteLength); return { schemeIdUri: t, value: s, timeScale: n, presentationTime: a, presentationTimeDelta: r, eventDuration: o, id: l, payload: c }; }
function XS(i, ...e) { const t = e.length; let s = 8, n = t; for (; n--;)
    s += e[n].byteLength; const r = new Uint8Array(s); for (r[0] = s >> 24 & 255, r[1] = s >> 16 & 255, r[2] = s >> 8 & 255, r[3] = s & 255, r.set(i, 4), n = 0, s = 8; n < t; n++)
    r.set(e[n], s), s += e[n].byteLength; return r; }
function ZS(i, e, t) { if (i.byteLength !== 16)
    throw new RangeError("Invalid system id"); let s, n; s = 0, n = new Uint8Array; let r; s > 0 ? (r = new Uint8Array(4), e.length > 0 && new DataView(r.buffer).setUint32(0, e.length, !1)) : r = new Uint8Array; const a = new Uint8Array(4); return t.byteLength > 0 && new DataView(a.buffer).setUint32(0, t.byteLength, !1), XS([112, 115, 115, 104], new Uint8Array([s, 0, 0, 0]), i, r, n, a, t); }
function JS(i) { const e = []; if (i instanceof ArrayBuffer) {
    const t = i.byteLength;
    let s = 0;
    for (; s + 32 < t;) {
        const n = new DataView(i, s), r = eT(n);
        e.push(r), s += r.size;
    }
} return e; }
function eT(i) { const e = i.getUint32(0), t = i.byteOffset, s = i.byteLength; if (s < e)
    return { offset: t, size: s }; if (i.getUint32(4) !== 1886614376)
    return { offset: t, size: e }; const r = i.getUint32(8) >>> 24; if (r !== 0 && r !== 1)
    return { offset: t, size: e }; const a = i.buffer, o = je(new Uint8Array(a, t + 12, 16)); let l = null, u = null, c = 0; if (r === 0)
    c = 28;
else {
    const h = i.getUint32(28);
    if (!h || s < 32 + h * 16)
        return { offset: t, size: e };
    l = [];
    for (let f = 0; f < h; f++)
        l.push(new Uint8Array(a, t + 32 + f * 16, 16));
    c = 32 + h * 16;
} if (!c)
    return { offset: t, size: e }; const d = i.getUint32(c); return e - 32 < d ? { offset: t, size: e } : (u = new Uint8Array(a, t + c + 4, d), { version: r, systemId: o, kids: l, data: u, offset: t, size: e }); }
const jg = () => /\(Windows.+Firefox\//i.test(navigator.userAgent), sn = { audio: { a3ds: 1, "ac-3": .95, "ac-4": 1, alac: .9, alaw: 1, dra1: 1, "dts+": 1, "dts-": 1, dtsc: 1, dtse: 1, dtsh: 1, "ec-3": .9, enca: 1, fLaC: .9, flac: .9, FLAC: .9, g719: 1, g726: 1, m4ae: 1, mha1: 1, mha2: 1, mhm1: 1, mhm2: 1, mlpa: 1, mp4a: 1, "raw ": 1, Opus: 1, opus: 1, samr: 1, sawb: 1, sawp: 1, sevc: 1, sqcp: 1, ssmv: 1, twos: 1, ulaw: 1 }, video: { avc1: 1, avc2: 1, avc3: 1, avc4: 1, avcp: 1, av01: .8, dav1: .8, drac: 1, dva1: 1, dvav: 1, dvh1: .7, dvhe: .7, encv: 1, hev1: .75, hvc1: .75, mjp2: 1, mp4v: 1, mvc1: 1, mvc2: 1, mvc3: 1, mvc4: 1, resv: 1, rv60: 1, s263: 1, svc1: 1, svc2: 1, "vc-1": 1, vp08: 1, vp09: .9 }, text: { stpp: 1, wvtt: 1 } };
function zc(i, e) { const t = sn[e]; return !!t && !!t[i.slice(0, 4)]; }
function rr(i, e, t = !0) { return !i.split(",").some(s => !Wc(s, e, t)); }
function Wc(i, e, t = !0) { var s; const n = Vi(t); return (s = n == null ? void 0 : n.isTypeSupported(ar(i, e))) != null ? s : !1; }
function ar(i, e) { return `${e}/mp4;codecs=${i}`; }
function Bh(i) { if (i) {
    const e = i.substring(0, 4);
    return sn.video[e];
} return 2; }
function qa(i) { const e = jg(); return i.split(",").reduce((t, s) => { const r = e && Ao(s) ? 9 : sn.video[s]; return r ? (r * 2 + t) / (t ? 3 : 2) : (sn.audio[s] + t) / (t ? 2 : 1); }, 0); }
const ll = {};
function tT(i, e = !0) { if (ll[i])
    return ll[i]; const t = { flac: ["flac", "fLaC", "FLAC"], opus: ["opus", "Opus"], "mp4a.40.34": ["mp3"] }[i]; for (let n = 0; n < t.length; n++) {
    var s;
    if (Wc(t[n], "audio", e))
        return ll[i] = t[n], t[n];
    if (t[n] === "mp3" && (s = Vi(e)) != null && s.isTypeSupported("audio/mpeg"))
        return "";
} return i; }
const iT = /flac|opus|mp4a\.40\.34/i;
function Qa(i, e = !0) { return i.replace(iT, t => tT(t.toLowerCase(), e)); }
function sT(i, e) { const t = []; if (i) {
    const s = i.split(",");
    for (let n = 0; n < s.length; n++)
        zc(s[n], "video") || t.push(s[n]);
} return e && t.push(e), t.join(","); }
function ga(i, e) { if (i && (i.length > 4 || ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(i) !== -1) && ($h(i, "audio") || $h(i, "video")))
    return i; if (e) {
    const t = e.split(",");
    if (t.length > 1) {
        if (i) {
            for (let s = t.length; s--;)
                if (t[s].substring(0, 4) === i.substring(0, 4))
                    return t[s];
        }
        return t[0];
    }
} return e || i; }
function $h(i, e) { return zc(i, e) && Wc(i, e); }
function nT(i) { const e = i.split(","); for (let t = 0; t < e.length; t++) {
    const s = e[t].split(".");
    s.length > 2 && s[0] === "avc1" && (e[t] = `avc1.${parseInt(s[1]).toString(16)}${("000" + parseInt(s[2]).toString(16)).slice(-4)}`);
} return e.join(","); }
function rT(i) { if (i.startsWith("av01.")) {
    const e = i.split("."), t = ["0", "111", "01", "01", "01", "0"];
    for (let s = e.length; s > 4 && s < 10; s++)
        e[s] = t[s - 4];
    return e.join(".");
} return i; }
function jh(i) { const e = Vi(i) || { isTypeSupported: () => !1 }; return { mpeg: e.isTypeSupported("audio/mpeg"), mp3: e.isTypeSupported('audio/mp4; codecs="mp3"'), ac3: e.isTypeSupported('audio/mp4; codecs="ac-3"') }; }
function Ru(i) { return i.replace(/^.+codecs=["']?([^"']+).*$/, "$1"); }
const aT = { supported: !0, powerEfficient: !0, smooth: !0 }, oT = { supported: !1, smooth: !1, powerEfficient: !1 }, Gg = { supported: !0, configurations: [], decodingInfoResults: [aT] };
function Vg(i, e) { return { supported: !1, configurations: e, decodingInfoResults: [oT], error: i }; }
function lT(i, e, t, s, n, r) { const a = i.videoCodec, o = i.audioCodec ? i.audioGroups : null, l = r == null ? void 0 : r.audioCodec, u = r == null ? void 0 : r.channels, c = u ? parseInt(u) : l ? 1 / 0 : 2; let d = null; if (o != null && o.length)
    try {
        o.length === 1 && o[0] ? d = e.groups[o[0]].channels : d = o.reduce((h, f) => { if (f) {
            const m = e.groups[f];
            if (!m)
                throw new Error(`Audio track group ${f} not found`);
            Object.keys(m.channels).forEach(p => { h[p] = (h[p] || 0) + m.channels[p]; });
        } return h; }, { 2: 0 });
    }
    catch {
        return !0;
    } return a !== void 0 && (a.split(",").some(h => Ao(h)) || i.width > 1920 && i.height > 1088 || i.height > 1920 && i.width > 1088 || i.frameRate > Math.max(s, 30) || i.videoRange !== "SDR" && i.videoRange !== t || i.bitrate > Math.max(n, 8e6)) || !!d && G(c) && Object.keys(d).some(h => parseInt(h) > c); }
function Kg(i, e, t, s = {}) { const n = i.videoCodec; if (!n && !i.audioCodec || !t)
    return Promise.resolve(Gg); const r = [], a = uT(i), o = a.length, l = cT(i, e, o > 0), u = l.length; for (let c = o || 1 * u || 1; c--;) {
    const d = { type: "media-source" };
    if (o && (d.video = a[c % o]), u) {
        d.audio = l[c % u];
        const h = d.audio.bitrate;
        d.video && h && (d.video.bitrate -= h);
    }
    r.push(d);
} if (n) {
    const c = navigator.userAgent;
    if (n.split(",").some(d => Ao(d)) && jg())
        return Promise.resolve(Vg(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${c})`), r));
} return Promise.all(r.map(c => { const d = hT(c); return s[d] || (s[d] = t.decodingInfo(c)); })).then(c => ({ supported: !c.some(d => !d.supported), configurations: r, decodingInfoResults: c })).catch(c => ({ supported: !1, configurations: r, decodingInfoResults: [], error: c })); }
function uT(i) { var e; const t = (e = i.videoCodec) == null ? void 0 : e.split(","), s = Hg(i), n = i.width || 640, r = i.height || 480, a = i.frameRate || 30, o = i.videoRange.toLowerCase(); return t ? t.map(l => { const u = { contentType: ar(rT(l), "video"), width: n, height: r, bitrate: s, framerate: a }; return o !== "sdr" && (u.transferFunction = o), u; }) : []; }
function cT(i, e, t) { var s; const n = (s = i.audioCodec) == null ? void 0 : s.split(","), r = Hg(i); return n && i.audioGroups ? i.audioGroups.reduce((a, o) => { var l; const u = o ? (l = e.groups[o]) == null ? void 0 : l.tracks : null; return u ? u.reduce((c, d) => { if (d.groupId === o) {
    const h = parseFloat(d.channels || "");
    n.forEach(f => { const m = { contentType: ar(f, "audio"), bitrate: t ? dT(f, r) : r }; h && (m.channels = "" + h), c.push(m); });
} return c; }, a) : a; }, []) : []; }
function dT(i, e) { if (e <= 1)
    return 1; let t = 128e3; return i === "ec-3" ? t = 768e3 : i === "ac-3" && (t = 64e4), Math.min(e / 2, t); }
function Hg(i) { return Math.ceil(Math.max(i.bitrate * .9, i.averageBitrate) / 1e3) * 1e3 || 1; }
function hT(i) { let e = ""; const { audio: t, video: s } = i; if (s) {
    const n = Ru(s.contentType);
    e += `${n}_r${s.height}x${s.width}f${Math.ceil(s.framerate)}${s.transferFunction || "sd"}_${Math.ceil(s.bitrate / 1e5)}`;
} if (t) {
    const n = Ru(t.contentType);
    e += `${s ? "_" : ""}${n}_c${t.channels}`;
} return e; }
const wu = ["NONE", "TYPE-0", "TYPE-1", null];
function fT(i) { return wu.indexOf(i) > -1; }
const Xa = ["SDR", "PQ", "HLG"];
function mT(i) { return !!i && Xa.indexOf(i) > -1; }
var pa = { No: "", Yes: "YES", v2: "v2" };
function Gh(i) { const { canSkipUntil: e, canSkipDateRanges: t, age: s } = i, n = s < e / 2; return e && n ? t ? pa.v2 : pa.Yes : pa.No; }
class Vh {
    constructor(e, t, s) { this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = s; }
    addDirectives(e) { const t = new self.URL(e); return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href; }
}
class or {
    constructor(e) { if (this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.supplemental = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter(s => !!s).map(s => s.substring(0, 4)).join(","), "supplemental" in e) {
        var t;
        this.supplemental = e.supplemental;
        const s = (t = e.supplemental) == null ? void 0 : t.videoCodec;
        s && s !== e.videoCodec && (this.codecSet += `,${s.substring(0, 4)}`);
    } this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES); }
    get maxBitrate() { return Math.max(this.realBitrate, this.bitrate); }
    get averageBitrate() { return this._avgBitrate || this.realBitrate || this.bitrate; }
    get attrs() { return this._attrs[0]; }
    get codecs() { return this.attrs.CODECS || ""; }
    get pathwayId() { return this.attrs["PATHWAY-ID"] || "."; }
    get videoRange() { return this.attrs["VIDEO-RANGE"] || "SDR"; }
    get score() { return this.attrs.optionalFloat("SCORE", 0); }
    get uri() { return this.url[0] || ""; }
    hasAudioGroup(e) { return Kh(this._audioGroups, e); }
    hasSubtitleGroup(e) { return Kh(this._subtitleGroups, e); }
    get audioGroups() { return this._audioGroups; }
    get subtitleGroups() { return this._subtitleGroups; }
    addGroupId(e, t) { if (t) {
        if (e === "audio") {
            let s = this._audioGroups;
            s || (s = this._audioGroups = []), s.indexOf(t) === -1 && s.push(t);
        }
        else if (e === "text") {
            let s = this._subtitleGroups;
            s || (s = this._subtitleGroups = []), s.indexOf(t) === -1 && s.push(t);
        }
    } }
    get urlId() { return 0; }
    set urlId(e) { }
    get audioGroupIds() { return this.audioGroups ? [this.audioGroupId] : void 0; }
    get textGroupIds() { return this.subtitleGroups ? [this.textGroupId] : void 0; }
    get audioGroupId() { var e; return (e = this.audioGroups) == null ? void 0 : e[0]; }
    get textGroupId() { var e; return (e = this.subtitleGroups) == null ? void 0 : e[0]; }
    addFallback() { }
}
function Kh(i, e) { return !e || !i ? !1 : i.indexOf(e) !== -1; }
function gT() { if (typeof matchMedia == "function") {
    const i = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (i.media !== e.media)
        return i.matches === !0;
} return !1; }
function pT(i, e) { let t = !1, s = []; if (i && (t = i !== "SDR", s = [i]), e) {
    s = e.allowedVideoRanges || Xa.slice(0);
    const n = s.join("") !== "SDR" && !e.videoCodec;
    t = e.preferHDR !== void 0 ? e.preferHDR : n && gT(), t || (s = ["SDR"]);
} return { preferHDR: t, allowedVideoRanges: s }; }
const yT = i => { const e = new WeakSet; return (t, s) => { if (i && (s = i(t, s)), typeof s == "object" && s !== null) {
    if (e.has(s))
        return;
    e.add(s);
} return s; }; }, fe = (i, e) => JSON.stringify(i, yT(e));
function vT(i, e, t, s, n) { const r = Object.keys(i), a = s == null ? void 0 : s.channels, o = s == null ? void 0 : s.audioCodec, l = n == null ? void 0 : n.videoCodec, u = a && parseInt(a) === 2; let c = !1, d = !1, h = 1 / 0, f = 1 / 0, m = 1 / 0, p = 1 / 0, x = 0, y = []; const { preferHDR: v, allowedVideoRanges: E } = pT(e, n); for (let R = r.length; R--;) {
    const _ = i[r[R]];
    c || (c = _.channels[2] > 0), h = Math.min(h, _.minHeight), f = Math.min(f, _.minFramerate), m = Math.min(m, _.minBitrate), E.filter(D => _.videoRanges[D] > 0).length > 0 && (d = !0);
} h = G(h) ? h : 0, f = G(f) ? f : 0; const T = Math.max(1080, h), L = Math.max(30, f); m = G(m) ? m : t, t = Math.max(m, t), d || (e = void 0); const w = r.length > 1; return { codecSet: r.reduce((R, _) => { const A = i[_]; if (_ === R)
        return R; if (y = d ? E.filter(D => A.videoRanges[D] > 0) : [], w) {
        if (A.minBitrate > t)
            return Vt(_, `min bitrate of ${A.minBitrate} > current estimate of ${t}`), R;
        if (!A.hasDefaultAudio)
            return Vt(_, "no renditions with default or auto-select sound found"), R;
        if (o && _.indexOf(o.substring(0, 4)) % 5 !== 0)
            return Vt(_, `audio codec preference "${o}" not found`), R;
        if (a && !u) {
            if (!A.channels[a])
                return Vt(_, `no renditions with ${a} channel sound found (channels options: ${Object.keys(A.channels)})`), R;
        }
        else if ((!o || u) && c && A.channels[2] === 0)
            return Vt(_, "no renditions with stereo sound found"), R;
        if (A.minHeight > T)
            return Vt(_, `min resolution of ${A.minHeight} > maximum of ${T}`), R;
        if (A.minFramerate > L)
            return Vt(_, `min framerate of ${A.minFramerate} > maximum of ${L}`), R;
        if (!y.some(D => A.videoRanges[D] > 0))
            return Vt(_, `no variants with VIDEO-RANGE of ${fe(y)} found`), R;
        if (l && _.indexOf(l.substring(0, 4)) % 5 !== 0)
            return Vt(_, `video codec preference "${l}" not found`), R;
        if (A.maxScore < x)
            return Vt(_, `max score of ${A.maxScore} < selected max of ${x}`), R;
    } return R && (qa(_) >= qa(R) || A.fragmentError > i[R].fragmentError) ? R : (p = A.minIndex, x = A.maxScore, _); }, void 0), videoRanges: y, preferHDR: v, minFramerate: f, minBitrate: m, minIndex: p }; }
function Vt(i, e) { le.log(`[abr] start candidates with "${i}" ignored because ${e}`); }
function zg(i) { return i.reduce((e, t) => { let s = e.groups[t.groupId]; s || (s = e.groups[t.groupId] = { tracks: [], channels: { 2: 0 }, hasDefault: !1, hasAutoSelect: !1 }), s.tracks.push(t); const n = t.channels || "2"; return s.channels[n] = (s.channels[n] || 0) + 1, s.hasDefault = s.hasDefault || t.default, s.hasAutoSelect = s.hasAutoSelect || t.autoselect, s.hasDefault && (e.hasDefaultAudio = !0), s.hasAutoSelect && (e.hasAutoSelectAudio = !0), e; }, { hasDefaultAudio: !1, hasAutoSelectAudio: !1, groups: {} }); }
function xT(i, e, t, s) { return i.slice(t, s + 1).reduce((n, r, a) => { if (!r.codecSet)
    return n; const o = r.audioGroups; let l = n[r.codecSet]; l || (n[r.codecSet] = l = { minBitrate: 1 / 0, minHeight: 1 / 0, minFramerate: 1 / 0, minIndex: a, maxScore: 0, videoRanges: { SDR: 0 }, channels: { 2: 0 }, hasDefaultAudio: !o, fragmentError: 0 }), l.minBitrate = Math.min(l.minBitrate, r.bitrate); const u = Math.min(r.height, r.width); return l.minHeight = Math.min(l.minHeight, u), l.minFramerate = Math.min(l.minFramerate, r.frameRate), l.minIndex = Math.min(l.minIndex, a), l.maxScore = Math.max(l.maxScore, r.score), l.fragmentError += r.fragmentError, l.videoRanges[r.videoRange] = (l.videoRanges[r.videoRange] || 0) + 1, o && o.forEach(c => { if (!c)
    return; const d = e.groups[c]; d && (l.hasDefaultAudio = l.hasDefaultAudio || e.hasDefaultAudio ? d.hasDefault : d.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(d.channels).forEach(h => { l.channels[h] = (l.channels[h] || 0) + d.channels[h]; })); }), n; }, {}); }
function Hh(i) { if (!i)
    return i; const { lang: e, assocLang: t, characteristics: s, channels: n, audioCodec: r } = i; return { lang: e, assocLang: t, characteristics: s, channels: n, audioCodec: r }; }
function Xt(i, e, t) { if ("attrs" in i) {
    const s = e.indexOf(i);
    if (s !== -1)
        return s;
} for (let s = 0; s < e.length; s++) {
    const n = e[s];
    if (ls(i, n, t))
        return s;
} return -1; }
function ls(i, e, t) { const { groupId: s, name: n, lang: r, assocLang: a, default: o } = i, l = i.forced; return (s === void 0 || e.groupId === s) && (n === void 0 || e.name === n) && (r === void 0 || ET(r, e.lang)) && (r === void 0 || e.assocLang === a) && (o === void 0 || e.default === o) && (l === void 0 || e.forced === l) && (!("characteristics" in i) || ST(i.characteristics || "", e.characteristics)) && (t === void 0 || t(i, e)); }
function ET(i, e = "--") { return i.length === e.length ? i === e : i.startsWith(e) || e.startsWith(i); }
function ST(i, e = "") { const t = i.split(","), s = e.split(","); return t.length === s.length && !t.some(n => s.indexOf(n) === -1); }
function is(i, e) { const { audioCodec: t, channels: s } = i; return (t === void 0 || (e.audioCodec || "").substring(0, 4) === t.substring(0, 4)) && (s === void 0 || s === (e.channels || "2")); }
function TT(i, e, t, s, n) { const r = e[s], o = e.reduce((h, f, m) => { const p = f.uri; return (h[p] || (h[p] = [])).push(m), h; }, {})[r.uri]; o.length > 1 && (s = Math.max.apply(Math, o)); const l = r.videoRange, u = r.frameRate, c = r.codecSet.substring(0, 4), d = zh(e, s, h => { if (h.videoRange !== l || h.frameRate !== u || h.codecSet.substring(0, 4) !== c)
    return !1; const f = h.audioGroups, m = t.filter(p => !f || f.indexOf(p.groupId) !== -1); return Xt(i, m, n) > -1; }); return d > -1 ? d : zh(e, s, h => { const f = h.audioGroups, m = t.filter(p => !f || f.indexOf(p.groupId) !== -1); return Xt(i, m, n) > -1; }); }
function zh(i, e, t) { for (let s = e; s > -1; s--)
    if (t(i[s]))
        return s; for (let s = e + 1; s < i.length; s++)
    if (t(i[s]))
        return s; return -1; }
function Za(i, e) { var t; return !!i && i !== ((t = e.loadLevelObj) == null ? void 0 : t.uri); }
class LT extends _t {
    constructor(e) {
        super("abr", e.logger), this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.rebufferNotice = -1, this.supportedCache = {}, this.bwEstimator = void 0, this._abandonRulesCheck = t => {
            var s;
            const { fragCurrent: n, partCurrent: r, hls: a } = this, { autoLevelEnabled: o, media: l } = a;
            if (!n || !l)
                return;
            const u = performance.now(), c = r ? r.stats : n.stats, d = r ? r.duration : n.duration, h = u - c.loading.start, f = a.minAutoLevel, m = n.level, p = this._nextAutoLevel;
            if (c.aborted || c.loaded && c.loaded === c.total || m <= f) {
                this.clearTimer(), this._nextAutoLevel = -1;
                return;
            }
            if (!o)
                return;
            const x = p > -1 && p !== m, y = !!t || x;
            if (!y && (l.paused || !l.playbackRate || !l.readyState))
                return;
            const v = a.mainForwardBufferInfo;
            if (!y && v === null)
                return;
            const E = this.bwEstimator.getEstimateTTFB(), T = Math.abs(l.playbackRate);
            if (h <= Math.max(E, 1e3 * (d / (T * 2))))
                return;
            const L = v ? v.len / T : 0, w = c.loading.first ? c.loading.first - c.loading.start : -1, I = c.loaded && w > -1, R = this.getBwEstimate(), _ = a.levels, A = _[m], D = Math.max(c.loaded, Math.round(d * (n.bitrate || A.averageBitrate) / 8));
            let B = I ? h - w : h;
            B < 1 && I && (B = Math.min(h, c.loaded * 8 / R));
            const V = I ? c.loaded * 1e3 / B : 0, Y = E / 1e3, K = V ? (D - c.loaded) / V : D * 8 / R + Y;
            if (K <= L)
                return;
            const $ = V ? V * 8 : R, H = ((s = (t == null ? void 0 : t.details) || this.hls.latestLevelDetails) == null ? void 0 : s.live) === !0, C = this.hls.config.abrBandWidthUpFactor;
            let O = Number.POSITIVE_INFINITY, j;
            for (j = m - 1; j > f; j--) {
                const ie = _[j].maxBitrate, J = !_[j].details || H;
                if (O = this.getTimeToLoadFrag(Y, $, d * ie, J), O < Math.min(L, d + Y))
                    break;
            }
            if (O >= K || O > d * 10)
                return;
            I ? this.bwEstimator.sample(h - Math.min(E, w), c.loaded) : this.bwEstimator.sampleTTFB(h);
            const M = _[j].maxBitrate;
            this.getBwEstimate() * C > M && this.resetEstimator(M);
            const F = this.findBestLevel(M, f, j, 0, L, 1, 1);
            F > -1 && (j = F), this.warn(`Fragment ${n.sn}${r ? " part " + r.index : ""} of level ${m} is loading too slowly;
      Fragment duration: ${n.duration.toFixed(3)}
      Time to underbuffer: ${L.toFixed(3)} s
      Estimated load time for current fragment: ${K.toFixed(3)} s
      Estimated load time for down switch fragment: ${O.toFixed(3)} s
      TTFB estimate: ${w | 0} ms
      Current BW estimate: ${G(R) ? R | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${j} @ ${M | 0} bps`), a.nextLoadLevel = a.nextAutoLevel = j, this.clearTimer();
            const X = () => {
                if (this.clearTimer(), this.fragCurrent === n && this.hls.loadLevel === j && j > 0) {
                    const ie = this.getStarvationDelay();
                    if (this.warn(`Aborting inflight request ${j > 0 ? "and switching down" : ""}
      Fragment duration: ${n.duration.toFixed(3)} s
      Time to underbuffer: ${ie.toFixed(3)} s`), n.abortRequests(), this.fragCurrent = this.partCurrent = null, j > f) {
                        let J = this.findBestLevel(this.hls.levels[f].bitrate, f, j, 0, ie, 1, 1);
                        J === -1 && (J = f), this.hls.nextLoadLevel = this.hls.nextAutoLevel = J, this.resetEstimator(this.hls.levels[J].bitrate);
                    }
                }
            };
            x || K > O * 2 ? X() : this.timer = self.setInterval(X, O * 1e3), a.trigger(S.FRAG_LOAD_EMERGENCY_ABORTED, { frag: n, part: r, stats: c });
        }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
    }
    resetEstimator(e) { e && (this.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator(); }
    initEstimator() { const e = this.hls.config; return new _S(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate); }
    registerListeners() { const { hls: e } = this; e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.FRAG_LOADING, this.onFragLoading, this), e.on(S.FRAG_LOADED, this.onFragLoaded, this), e.on(S.FRAG_BUFFERED, this.onFragBuffered, this), e.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(S.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(S.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(S.ERROR, this.onError, this); }
    unregisterListeners() { const { hls: e } = this; e && (e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.FRAG_LOADING, this.onFragLoading, this), e.off(S.FRAG_LOADED, this.onFragLoaded, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered, this), e.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(S.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(S.ERROR, this.onError, this)); }
    destroy() { this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = this.supportedCache = null, this.fragCurrent = this.partCurrent = null; }
    onManifestLoading(e, t) { this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.supportedCache = {}, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer(); }
    onLevelsUpdated() { this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null; }
    onMaxAutoLevelUpdated() { this.firstSelection = -1, this.nextAutoLevelKey = ""; }
    onFragLoading(e, t) { const s = t.frag; if (!this.ignoreFragment(s)) {
        if (!s.bitrateTest) {
            var n;
            this.fragCurrent = s, this.partCurrent = (n = t.part) != null ? n : null;
        }
        this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    } }
    onLevelSwitching(e, t) { this.clearTimer(); }
    onError(e, t) { if (!t.fatal)
        switch (t.details) {
            case k.BUFFER_ADD_CODEC_ERROR:
            case k.BUFFER_APPEND_ERROR:
                this.lastLoadedFragLevel = -1, this.firstSelection = -1;
                break;
            case k.FRAG_LOAD_TIMEOUT: {
                const s = t.frag, { fragCurrent: n, partCurrent: r } = this;
                if (s && n && s.sn === n.sn && s.level === n.level) {
                    const a = performance.now(), o = r ? r.stats : s.stats, l = a - o.loading.start, u = o.loading.first ? o.loading.first - o.loading.start : -1;
                    if (o.loaded && u > -1) {
                        const d = this.bwEstimator.getEstimateTTFB();
                        this.bwEstimator.sample(l - Math.min(d, u), o.loaded);
                    }
                    else
                        this.bwEstimator.sampleTTFB(l);
                }
                break;
            }
        } }
    getTimeToLoadFrag(e, t, s, n) { const r = e + s / t, a = n ? e + this.lastLevelLoadSec : 0; return r + a; }
    onLevelLoaded(e, t) { const s = this.hls.config, { loading: n } = t.stats, r = n.end - n.first; G(r) && (this.lastLevelLoadSec = r / 1e3), t.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD), this.timer > -1 && this._abandonRulesCheck(t.levelInfo); }
    onFragLoaded(e, { frag: t, part: s }) { const n = s ? s.stats : t.stats; if (t.type === z.MAIN && this.bwEstimator.sampleTTFB(n.loading.first - n.loading.start), !this.ignoreFragment(t)) {
        if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
            const r = s ? s.duration : t.duration, a = this.hls.levels[t.level], o = (a.loaded ? a.loaded.bytes : 0) + n.loaded, l = (a.loaded ? a.loaded.duration : 0) + r;
            a.loaded = { bytes: o, duration: l }, a.realBitrate = Math.round(8 * o / l);
        }
        if (t.bitrateTest) {
            const r = { stats: n, frag: t, part: s, id: t.type };
            this.onFragBuffered(S.FRAG_BUFFERED, r), t.bitrateTest = !1;
        }
        else
            this.lastLoadedFragLevel = t.level;
    } }
    onFragBuffered(e, t) { const { frag: s, part: n } = t, r = n != null && n.stats.loaded ? n.stats : s.stats; if (r.aborted || this.ignoreFragment(s))
        return; const a = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB()); this.bwEstimator.sample(a, r.loaded), r.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0; }
    ignoreFragment(e) { return e.type !== z.MAIN || e.sn === "initSegment"; }
    clearTimer() { this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1); }
    get firstAutoLevel() { const { maxAutoLevel: e, minAutoLevel: t } = this.hls, s = this.getBwEstimate(), n = this.hls.config.maxStarvationDelay, r = this.findBestLevel(s, t, e, 0, n, 1, 1); if (r > -1)
        return r; const a = this.hls.firstLevel, o = Math.min(Math.max(a, t), e); return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${o}`), o; }
    get forcedAutoLevel() { return this.nextAutoLevelKey ? -1 : this._nextAutoLevel; }
    get nextAutoLevel() { const e = this.forcedAutoLevel, s = this.bwEstimator.canEstimate(), n = this.lastLoadedFragLevel > -1; if (e !== -1 && (!s || !n || this.nextAutoLevelKey === this.getAutoLevelKey()))
        return e; const r = s && n ? this.getNextABRAutoLevel() : this.firstAutoLevel; if (e !== -1) {
        const a = this.hls.levels;
        if (a.length > Math.max(e, r) && a[e].loadError <= a[r].loadError)
            return e;
    } return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r; }
    getAutoLevelKey() { return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`; }
    getNextABRAutoLevel() { const { fragCurrent: e, partCurrent: t, hls: s } = this; if (s.levels.length <= 1)
        return s.loadLevel; const { maxAutoLevel: n, config: r, minAutoLevel: a } = s, o = t ? t.duration : e ? e.duration : 0, l = this.getBwEstimate(), u = this.getStarvationDelay(); let c = r.abrBandWidthFactor, d = r.abrBandWidthUpFactor; if (u) {
        const x = this.findBestLevel(l, a, n, u, 0, c, d);
        if (x >= 0)
            return this.rebufferNotice = -1, x;
    } let h = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay; if (!u) {
        const x = this.bitrateTestDelay;
        x && (h = (o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay) - x, this.info(`bitrate test took ${Math.round(1e3 * x)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * h)} ms`), c = d = 1);
    } const f = this.findBestLevel(l, a, n, u, h, c, d); if (this.rebufferNotice !== f && (this.rebufferNotice = f, this.info(`${u ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${f}`)), f > -1)
        return f; const m = s.levels[a], p = s.loadLevelObj; return p && (m == null ? void 0 : m.bitrate) < p.bitrate ? a : s.loadLevel; }
    getStarvationDelay() { const e = this.hls, t = e.media; if (!t)
        return 1 / 0; const s = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, n = e.mainForwardBufferInfo; return (n ? n.len : 0) / s; }
    getBwEstimate() { return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate; }
    findBestLevel(e, t, s, n, r, a, o) { var l; const u = n + r, c = this.lastLoadedFragLevel, d = c === -1 ? this.hls.firstLevel : c, { fragCurrent: h, partCurrent: f } = this, { levels: m, allAudioTracks: p, loadLevel: x, config: y } = this.hls; if (m.length === 1)
        return 0; const v = m[d], E = !!((l = this.hls.latestLevelDetails) != null && l.live), T = x === -1 || c === -1; let L, w = "SDR", I = (v == null ? void 0 : v.frameRate) || 0; const { audioPreference: R, videoPreference: _ } = y, A = this.audioTracksByGroup || (this.audioTracksByGroup = zg(p)); let D = -1; if (T) {
        if (this.firstSelection !== -1)
            return this.firstSelection;
        const $ = this.codecTiers || (this.codecTiers = xT(m, A, t, s)), H = vT($, w, e, R, _), { codecSet: C, videoRanges: O, minFramerate: j, minBitrate: M, minIndex: F, preferHDR: X } = H;
        D = F, L = C, w = X ? O[O.length - 1] : O[0], I = j, e = Math.max(e, M), this.log(`picked start tier ${fe(H)}`);
    }
    else
        L = v == null ? void 0 : v.codecSet, w = v == null ? void 0 : v.videoRange; const B = f ? f.duration : h ? h.duration : 0, V = this.bwEstimator.getEstimateTTFB() / 1e3, Y = []; for (let $ = s; $ >= t; $--) {
        var K;
        const H = m[$], C = $ > d;
        if (!H)
            continue;
        if (y.useMediaCapabilities && !H.supportedResult && !H.supportedPromise) {
            const J = navigator.mediaCapabilities;
            typeof (J == null ? void 0 : J.decodingInfo) == "function" && lT(H, A, w, I, e, R) ? (H.supportedPromise = Kg(H, A, J, this.supportedCache), H.supportedPromise.then(ee => { if (!this.hls)
                return; H.supportedResult = ee; const we = this.hls.levels, Ue = we.indexOf(H); ee.error ? this.warn(`MediaCapabilities decodingInfo error: "${ee.error}" for level ${Ue} ${fe(ee)}`) : ee.supported ? ee.decodingInfoResults.some(xt => xt.smooth === !1 || xt.powerEfficient === !1) && this.log(`MediaCapabilities decodingInfo for level ${Ue} not smooth or powerEfficient: ${fe(ee)}`) : (this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${Ue} ${fe(ee)}`), Ue > -1 && we.length > 1 && (this.log(`Removing unsupported level ${Ue}`), this.hls.removeLevel(Ue), this.hls.loadLevel === -1 && (this.hls.nextLoadLevel = 0))); }).catch(ee => { this.warn(`Error handling MediaCapabilities decodingInfo: ${ee}`); })) : H.supportedResult = Gg;
        }
        if ((L && H.codecSet !== L || w && H.videoRange !== w || C && I > H.frameRate || !C && I > 0 && I < H.frameRate || (K = H.supportedResult) != null && (K = K.decodingInfoResults) != null && K.some(J => J.smooth === !1)) && (!T || $ !== D)) {
            Y.push($);
            continue;
        }
        const O = H.details, j = (f ? O == null ? void 0 : O.partTarget : O == null ? void 0 : O.averagetargetduration) || B;
        let M;
        C ? M = o * e : M = a * e;
        const F = B && n >= B * 2 && r === 0 ? H.averageBitrate : H.maxBitrate, X = this.getTimeToLoadFrag(V, M, F * j, O === void 0);
        if (M >= F && ($ === c || H.loadError === 0 && H.fragmentError === 0) && (X <= V || !G(X) || E && !this.bitrateTestDelay || X < u)) {
            const J = this.forcedAutoLevel;
            return $ !== x && (J === -1 || J !== x) && (Y.length && this.trace(`Skipped level(s) ${Y.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${m[Y[0]].codecs}" ${m[Y[0]].videoRange}; not compatible with "${L}" ${w}`), this.info(`switch candidate:${d}->${$} adjustedbw(${Math.round(M)})-bitrate=${Math.round(M - F)} ttfb:${V.toFixed(1)} avgDuration:${j.toFixed(1)} maxFetchDuration:${u.toFixed(1)} fetchDuration:${X.toFixed(1)} firstSelection:${T} codecSet:${H.codecSet} videoRange:${H.videoRange} hls.loadLevel:${x}`)), T && (this.firstSelection = $), $;
        }
    } return -1; }
    set nextAutoLevel(e) { const t = this.deriveNextAutoLevel(e); this._nextAutoLevel !== t && (this.nextAutoLevelKey = "", this._nextAutoLevel = t); }
    deriveNextAutoLevel(e) { const { maxAutoLevel: t, minAutoLevel: s } = this.hls; return Math.min(Math.max(e, s), t); }
}
const Wg = { search: function (i, e) { let t = 0, s = i.length - 1, n = null, r = null; for (; t <= s;) {
        n = (t + s) / 2 | 0, r = i[n];
        const a = e(r);
        if (a > 0)
            t = n + 1;
        else if (a < 0)
            s = n - 1;
        else
            return r;
    } return null; } };
function IT(i, e, t) { if (e === null || !Array.isArray(i) || !i.length || !G(e))
    return null; const s = i[0].programDateTime; if (e < (s || 0))
    return null; const n = i[i.length - 1].endProgramDateTime; if (e >= (n || 0))
    return null; for (let r = 0; r < i.length; ++r) {
    const a = i[r];
    if (RT(e, t, a))
        return a;
} return null; }
function ms(i, e, t = 0, s = 0, n = .005) { let r = null; if (i) {
    r = e[1 + i.sn - e[0].sn] || null;
    const o = i.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7), r && i.level !== r.level && r.end <= i.end && (r = e[2 + i.sn - e[0].sn] || null);
}
else
    t === 0 && e[0].start === 0 && (r = e[0]); if (r && ((!i || i.level === r.level) && Wh(t, s, r) === 0 || AT(r, i, Math.min(n, s))))
    return r; const a = Wg.search(e, Wh.bind(null, t, s)); return a && (a !== i || !r) ? a : r; }
function AT(i, e, t) { if (e && e.start === 0 && e.level < i.level && (e.endPTS || 0) > 0) {
    const s = e.tagList.reduce((n, r) => (r[0] === "INF" && (n += parseFloat(r[1])), n), t);
    return i.start <= s;
} return !1; }
function Wh(i = 0, e = 0, t) { if (t.start <= i && t.start + t.duration > i)
    return 0; const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)); return t.start + t.duration - s <= i ? 1 : t.start - s > i && t.start ? -1 : 0; }
function RT(i, e, t) { const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3; return (t.endProgramDateTime || 0) - s > i; }
function Yg(i, e, t) { if (i && i.startCC <= e && i.endCC >= e) {
    let s = i.fragments;
    const { fragmentHint: n } = i;
    n && (s = s.concat(n));
    let r;
    return Wg.search(s, a => a.cc < e ? 1 : a.cc > e ? -1 : (r = a, a.end <= t ? 1 : a.start > t ? -1 : 0)), r || null;
} return null; }
function Ja(i) { switch (i.details) {
    case k.FRAG_LOAD_TIMEOUT:
    case k.KEY_LOAD_TIMEOUT:
    case k.LEVEL_LOAD_TIMEOUT:
    case k.MANIFEST_LOAD_TIMEOUT: return !0;
} return !1; }
function qg(i) { return i.details.startsWith("key"); }
function Qg(i) { return qg(i) && !!i.frag && !i.frag.decryptdata; }
function Yh(i, e) { const t = Ja(e); return i.default[`${t ? "timeout" : "error"}Retry`]; }
function Yc(i, e) { const t = i.backoff === "linear" ? 1 : Math.pow(2, e); return Math.min(t * i.retryDelayMs, i.maxRetryDelayMs); }
function qh(i) { return oe(oe({}, i), { errorRetry: null, timeoutRetry: null }); }
function eo(i, e, t, s) { if (!i)
    return !1; const n = s == null ? void 0 : s.code, r = e < i.maxNumRetry && (wT(n) || !!t); return i.shouldRetry ? i.shouldRetry(i, e, t, s, r) : r; }
function wT(i) { return _u(i) || !!i && (i < 400 || i > 499); }
function _u(i) { return i === 0 && navigator.onLine === !1; }
var $e = { DoNothing: 0, SendEndCallback: 1, SendAlternateToPenaltyBox: 2, RemoveAlternatePermanently: 3, InsertDiscontinuity: 4, RetryRequest: 5 }, ut = { None: 0, MoveAllAlternatesMatchingHost: 1, MoveAllAlternatesMatchingHDCP: 2, MoveAllAlternatesMatchingKey: 4, SwitchToSDR: 8 };
class _T extends _t {
    constructor(e) { super("error-controller", e.logger), this.hls = void 0, this.playlistError = 0, this.hls = e, this.registerListeners(); }
    registerListeners() { const e = this.hls; e.on(S.ERROR, this.onError, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated, this); }
    unregisterListeners() { const e = this.hls; e && (e.off(S.ERROR, this.onError, this), e.off(S.ERROR, this.onErrorOut, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated, this)); }
    destroy() { this.unregisterListeners(), this.hls = null; }
    startLoad(e) { }
    stopLoad() { this.playlistError = 0; }
    getVariantLevelIndex(e) { return (e == null ? void 0 : e.type) === z.MAIN ? e.level : this.getVariantIndex(); }
    getVariantIndex() { var e; const t = this.hls, s = t.currentLevel; return (e = t.loadLevelObj) != null && e.details || s === -1 ? t.loadLevel : s; }
    variantHasKey(e, t) { if (e) {
        var s;
        if ((s = e.details) != null && s.hasKey(t))
            return !0;
        const n = e.audioGroups;
        if (n)
            return this.hls.allAudioTracks.filter(a => n.indexOf(a.groupId) >= 0).some(a => { var o; return (o = a.details) == null ? void 0 : o.hasKey(t); });
    } return !1; }
    onManifestLoading() { this.playlistError = 0; }
    onLevelUpdated() { this.playlistError = 0; }
    onError(e, t) { var s; if (t.fatal)
        return; const n = this.hls, r = t.context; switch (t.details) {
        case k.FRAG_LOAD_ERROR:
        case k.FRAG_LOAD_TIMEOUT:
        case k.KEY_LOAD_ERROR:
        case k.KEY_LOAD_TIMEOUT:
            t.errorAction = this.getFragRetryOrSwitchAction(t);
            return;
        case k.FRAG_PARSING_ERROR: if ((s = t.frag) != null && s.gap) {
            t.errorAction = Hs();
            return;
        }
        case k.FRAG_GAP:
        case k.FRAG_DECRYPT_ERROR: {
            t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = $e.SendAlternateToPenaltyBox;
            return;
        }
        case k.LEVEL_EMPTY_ERROR:
        case k.LEVEL_PARSING_ERROR:
            {
                var a;
                const l = t.parent === z.MAIN ? t.level : n.loadLevel;
                t.details === k.LEVEL_EMPTY_ERROR && ((a = t.context) != null && (a = a.levelDetails) != null && a.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, l) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, l));
            }
            return;
        case k.LEVEL_LOAD_ERROR:
        case k.LEVEL_LOAD_TIMEOUT:
            typeof (r == null ? void 0 : r.level) == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.level));
            return;
        case k.AUDIO_TRACK_LOAD_ERROR:
        case k.AUDIO_TRACK_LOAD_TIMEOUT:
        case k.SUBTITLE_LOAD_ERROR:
        case k.SUBTITLE_TRACK_LOAD_TIMEOUT:
            if (r) {
                const l = n.loadLevelObj;
                if (l && (r.type === se.AUDIO_TRACK && l.hasAudioGroup(r.groupId) || r.type === se.SUBTITLE_TRACK && l.hasSubtitleGroup(r.groupId))) {
                    t.errorAction = this.getPlaylistRetryOrSwitchAction(t, n.loadLevel), t.errorAction.action = $e.SendAlternateToPenaltyBox, t.errorAction.flags = ut.MoveAllAlternatesMatchingHost;
                    return;
                }
            }
            return;
        case k.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
            t.errorAction = { action: $e.SendAlternateToPenaltyBox, flags: ut.MoveAllAlternatesMatchingHDCP };
            return;
        case k.KEY_SYSTEM_SESSION_UPDATE_FAILED:
        case k.KEY_SYSTEM_STATUS_INTERNAL_ERROR:
        case k.KEY_SYSTEM_NO_SESSION:
            t.errorAction = { action: $e.SendAlternateToPenaltyBox, flags: ut.MoveAllAlternatesMatchingKey };
            return;
        case k.BUFFER_ADD_CODEC_ERROR:
        case k.REMUX_ALLOC_ERROR:
        case k.BUFFER_APPEND_ERROR:
            if (!t.errorAction) {
                var o;
                t.errorAction = this.getLevelSwitchAction(t, (o = t.level) != null ? o : n.loadLevel);
            }
            return;
        case k.INTERNAL_EXCEPTION:
        case k.BUFFER_APPENDING_ERROR:
        case k.BUFFER_FULL_ERROR:
        case k.LEVEL_SWITCH_ERROR:
        case k.BUFFER_STALLED_ERROR:
        case k.BUFFER_SEEK_OVER_HOLE:
        case k.BUFFER_NUDGE_ON_STALL:
            t.errorAction = Hs();
            return;
    } t.type === q.KEY_SYSTEM_ERROR && (t.levelRetry = !1, t.errorAction = Hs()); }
    getPlaylistRetryOrSwitchAction(e, t) { const s = this.hls, n = Yh(s.config.playlistLoadPolicy, e), r = this.playlistError++; if (eo(n, r, Ja(e), e.response))
        return { action: $e.RetryRequest, flags: ut.None, retryConfig: n, retryCount: r }; const o = this.getLevelSwitchAction(e, t); return n && (o.retryConfig = n, o.retryCount = r), o; }
    getFragRetryOrSwitchAction(e) { const t = this.hls, s = this.getVariantLevelIndex(e.frag), n = t.levels[s], { fragLoadPolicy: r, keyLoadPolicy: a } = t.config, o = Yh(qg(e) ? a : r, e), l = t.levels.reduce((c, d) => c + d.fragmentError, 0); if (n && (e.details !== k.FRAG_GAP && n.fragmentError++, !Qg(e) && eo(o, l, Ja(e), e.response)))
        return { action: $e.RetryRequest, flags: ut.None, retryConfig: o, retryCount: l }; const u = this.getLevelSwitchAction(e, s); return o && (u.retryConfig = o, u.retryCount = l), u; }
    getLevelSwitchAction(e, t) { const s = this.hls; t == null && (t = s.loadLevel); const n = this.hls.levels[t]; if (n) {
        var r, a;
        const u = e.details;
        n.loadError++, u === k.BUFFER_APPEND_ERROR && n.fragmentError++;
        let c = -1;
        const { levels: d, loadLevel: h, minAutoLevel: f, maxAutoLevel: m } = s;
        !s.autoLevelEnabled && !s.config.preserveManualLevelOnError && (s.loadLevel = -1);
        const p = (r = e.frag) == null ? void 0 : r.type, y = (p === z.AUDIO && u === k.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (u === k.BUFFER_ADD_CODEC_ERROR || u === k.BUFFER_APPEND_ERROR)) && d.some(({ audioCodec: w }) => n.audioCodec !== w), E = e.sourceBufferName === "video" && (u === k.BUFFER_ADD_CODEC_ERROR || u === k.BUFFER_APPEND_ERROR) && d.some(({ codecSet: w, audioCodec: I }) => n.codecSet !== w && n.audioCodec === I), { type: T, groupId: L } = (a = e.context) != null ? a : {};
        for (let w = d.length; w--;) {
            const I = (w + h) % d.length;
            if (I !== h && I >= f && I <= m && d[I].loadError === 0) {
                var o, l;
                const R = d[I];
                if (u === k.FRAG_GAP && p === z.MAIN && e.frag) {
                    const _ = d[I].details;
                    if (_) {
                        const A = ms(e.frag, _.fragments, e.frag.start);
                        if (A != null && A.gap)
                            continue;
                    }
                }
                else {
                    if (T === se.AUDIO_TRACK && R.hasAudioGroup(L) || T === se.SUBTITLE_TRACK && R.hasSubtitleGroup(L))
                        continue;
                    if (p === z.AUDIO && (o = n.audioGroups) != null && o.some(_ => R.hasAudioGroup(_)) || p === z.SUBTITLE && (l = n.subtitleGroups) != null && l.some(_ => R.hasSubtitleGroup(_)) || y && n.audioCodec === R.audioCodec || E && n.codecSet === R.codecSet || !y && n.codecSet !== R.codecSet)
                        continue;
                }
                c = I;
                break;
            }
        }
        if (c > -1 && s.loadLevel !== c)
            return e.levelRetry = !0, this.playlistError = 0, { action: $e.SendAlternateToPenaltyBox, flags: ut.None, nextAutoLevel: c };
    } return { action: $e.SendAlternateToPenaltyBox, flags: ut.MoveAllAlternatesMatchingHost }; }
    onErrorOut(e, t) { var s; switch ((s = t.errorAction) == null ? void 0 : s.action) {
        case $e.DoNothing: break;
        case $e.SendAlternateToPenaltyBox:
            this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== k.FRAG_GAP ? t.fatal = !0 : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
            break;
    } if (t.fatal) {
        this.hls.stopLoad();
        return;
    } }
    sendAlternateToPenaltyBox(e) { const t = this.hls, s = e.errorAction; if (!s)
        return; const { flags: n } = s, r = s.nextAutoLevel; switch (n) {
        case ut.None:
            this.switchLevel(e, r);
            break;
        case ut.MoveAllAlternatesMatchingHDCP: {
            const l = this.getVariantLevelIndex(e.frag), u = t.levels[l], c = u == null ? void 0 : u.attrs["HDCP-LEVEL"];
            if (s.hdcpLevel = c, c === "NONE")
                this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
            else if (c) {
                t.maxHdcpLevel = wu[wu.indexOf(c) - 1], s.resolved = !0, this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
                break;
            }
        }
        case ut.MoveAllAlternatesMatchingKey: {
            const l = e.decryptdata;
            if (l) {
                const u = this.hls.levels, c = u.length;
                for (let h = c; h--;)
                    if (this.variantHasKey(u[h], l)) {
                        var a, o;
                        this.log(`Banned key found in level ${h} (${u[h].bitrate}bps) or audio group "${(a = u[h].audioGroups) == null ? void 0 : a.join(",")}" (${(o = e.frag) == null ? void 0 : o.type} fragment) ${je(l.keyId || [])}`), u[h].fragmentError++, u[h].loadError++, this.log(`Removing level ${h} with key error (${e.error})`), this.hls.removeLevel(h);
                    }
                const d = e.frag;
                if (this.hls.levels.length < c)
                    s.resolved = !0;
                else if (d && d.type !== z.MAIN) {
                    const h = d.decryptdata;
                    h && !l.matches(h) && (s.resolved = !0);
                }
            }
            break;
        }
    } s.resolved || this.switchLevel(e, r); }
    switchLevel(e, t) { if (t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel, e.details === k.BUFFER_ADD_CODEC_ERROR && e.mimeType && e.sourceBufferName !== "audiovideo")) {
        const s = Ru(e.mimeType), n = this.hls.levels;
        for (let r = n.length; r--;)
            n[r][`${e.sourceBufferName}Codec`] === s && (this.log(`Removing level ${r} for ${e.details} ("${s}" not supported)`), this.hls.removeLevel(r));
    } }
}
function Hs(i) { const e = { action: $e.DoNothing, flags: ut.None }; return i && (e.resolved = !0), e; }
var Pe = { NOT_LOADED: "NOT_LOADED", APPENDING: "APPENDING", PARTIAL: "PARTIAL", OK: "OK" };
class bT {
    constructor(e) { this.activePartLists = Object.create(null), this.endListFragments = Object.create(null), this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners(); }
    _registerListeners() { const { hls: e } = this; e && (e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.BUFFER_APPENDED, this.onBufferAppended, this), e.on(S.FRAG_BUFFERED, this.onFragBuffered, this), e.on(S.FRAG_LOADED, this.onFragLoaded, this)); }
    _unregisterListeners() { const { hls: e } = this; e && (e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.BUFFER_APPENDED, this.onBufferAppended, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered, this), e.off(S.FRAG_LOADED, this.onFragLoaded, this)); }
    destroy() { this._unregisterListeners(), this.hls = this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null; }
    getAppendedFrag(e, t) { const s = this.activePartLists[t]; if (s)
        for (let n = s.length; n--;) {
            const r = s[n];
            if (!r)
                break;
            if (r.start <= e && e <= r.end && r.loaded)
                return r;
        } return this.getBufferedFrag(e, t); }
    getBufferedFrag(e, t) { return this.getFragAtPos(e, t, !0); }
    getFragAtPos(e, t, s) { const { fragments: n } = this, r = Object.keys(n); for (let a = r.length; a--;) {
        const o = n[r[a]];
        if ((o == null ? void 0 : o.body.type) === t && (!s || o.buffered)) {
            const l = o.body;
            if (l.start <= e && e <= l.end)
                return l;
        }
    } return null; }
    detectEvictedFragments(e, t, s, n, r) { this.timeRanges && (this.timeRanges[e] = t); const a = (n == null ? void 0 : n.fragment.sn) || -1; Object.keys(this.fragments).forEach(o => { const l = this.fragments[o]; if (!l || a >= l.body.sn)
        return; if (!l.buffered && (!l.loaded || r)) {
        l.body.type === s && this.removeFragment(l.body);
        return;
    } const u = l.range[e]; if (u) {
        if (u.time.length === 0) {
            this.removeFragment(l.body);
            return;
        }
        u.time.some(c => { const d = !this.isTimeBuffered(c.startPTS, c.endPTS, t); return d && this.removeFragment(l.body), d; });
    } }); }
    detectPartialFragments(e) { const t = this.timeRanges; if (!t || e.frag.sn === "initSegment")
        return; const s = e.frag, n = Ss(s), r = this.fragments[n]; if (!r || r.buffered && s.gap)
        return; const a = !s.relurl; Object.keys(t).forEach(o => { const l = s.elementaryStreams[o]; if (!l)
        return; const u = t[o], c = a || l.partial === !0; r.range[o] = this.getBufferedTimes(s, e.part, c, u); }), r.loaded = null, Object.keys(r.range).length ? (this.bufferedEnd(r, s), Gr(r) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(r.body); }
    bufferedEnd(e, t) { e.buffered = !0, (e.body.endList = t.endList || e.body.endList) && (this.endListFragments[e.body.type] = e); }
    removeParts(e, t) { const s = this.activePartLists[t]; s && (this.activePartLists[t] = Qh(s, n => n.fragment.sn >= e)); }
    fragBuffered(e, t) { const s = Ss(e); let n = this.fragments[s]; !n && t && (n = this.fragments[s] = { body: e, appendedPTS: null, loaded: null, buffered: !1, range: Object.create(null) }, e.gap && (this.hasGaps = !0)), n && (n.loaded = null, this.bufferedEnd(n, e)); }
    getBufferedTimes(e, t, s, n) { const r = { time: [], partial: s }, a = e.start, o = e.end, l = e.minEndPTS || o, u = e.maxStartPTS || a; for (let c = 0; c < n.length; c++) {
        const d = n.start(c) - this.bufferPadding, h = n.end(c) + this.bufferPadding;
        if (u >= d && l <= h) {
            r.time.push({ startPTS: Math.max(a, n.start(c)), endPTS: Math.min(o, n.end(c)) });
            break;
        }
        else if (a < h && o > d) {
            const f = Math.max(a, n.start(c)), m = Math.min(o, n.end(c));
            m > f && (r.partial = !0, r.time.push({ startPTS: f, endPTS: m }));
        }
        else if (o <= d)
            break;
    } return r; }
    getPartialFragment(e) { let t = null, s, n, r, a = 0; const { bufferPadding: o, fragments: l } = this; return Object.keys(l).forEach(u => { const c = l[u]; c && Gr(c) && (n = c.body.start - o, r = c.body.end + o, e >= n && e <= r && (s = Math.min(e - n, r - e), a <= s && (t = c.body, a = s))); }), t; }
    isEndListAppended(e) { const t = this.endListFragments[e]; return t !== void 0 && (t.buffered || Gr(t)); }
    getState(e) { const t = Ss(e), s = this.fragments[t]; return s ? s.buffered ? Gr(s) ? Pe.PARTIAL : Pe.OK : Pe.APPENDING : Pe.NOT_LOADED; }
    isTimeBuffered(e, t, s) { let n, r; for (let a = 0; a < s.length; a++) {
        if (n = s.start(a) - this.bufferPadding, r = s.end(a) + this.bufferPadding, e >= n && t <= r)
            return !0;
        if (t <= n)
            return !1;
    } return !1; }
    onManifestLoading() { this.removeAllFragments(); }
    onFragLoaded(e, t) { if (t.frag.sn === "initSegment" || t.frag.bitrateTest)
        return; const s = t.frag, n = t.part ? null : t, r = Ss(s); this.fragments[r] = { body: s, appendedPTS: null, loaded: n, buffered: !1, range: Object.create(null) }; }
    onBufferAppended(e, t) { const { frag: s, part: n, timeRanges: r, type: a } = t; if (s.sn === "initSegment")
        return; const o = s.type; if (n) {
        let u = this.activePartLists[o];
        u || (this.activePartLists[o] = u = []), u.push(n);
    } this.timeRanges = r; const l = r[a]; this.detectEvictedFragments(a, l, o, n); }
    onFragBuffered(e, t) { this.detectPartialFragments(t); }
    hasFragment(e) { const t = Ss(e); return !!this.fragments[t]; }
    hasFragments(e) { const { fragments: t } = this, s = Object.keys(t); if (!e)
        return s.length > 0; for (let n = s.length; n--;) {
        const r = t[s[n]];
        if ((r == null ? void 0 : r.body.type) === e)
            return !0;
    } return !1; }
    hasParts(e) { var t; return !!((t = this.activePartLists[e]) != null && t.length); }
    removeFragmentsInRange(e, t, s, n, r) { n && !this.hasGaps || Object.keys(this.fragments).forEach(a => { const o = this.fragments[a]; if (!o)
        return; const l = o.body; l.type !== s || n && !l.gap || l.start < t && l.end > e && (o.buffered || r) && this.removeFragment(l); }); }
    removeFragment(e) { const t = Ss(e); e.clearElementaryStreamInfo(); const s = this.activePartLists[e.type]; if (s) {
        const n = e.sn;
        this.activePartLists[e.type] = Qh(s, r => r.fragment.sn !== n);
    } delete this.fragments[t], e.endList && delete this.endListFragments[e.type]; }
    removeAllFragments() { var e; this.fragments = Object.create(null), this.endListFragments = Object.create(null), this.activePartLists = Object.create(null), this.hasGaps = !1; const t = (e = this.hls) == null || (e = e.latestLevelDetails) == null ? void 0 : e.partList; t && t.forEach(s => s.clearElementaryStreamInfo()); }
}
function Gr(i) { var e, t, s; return i.buffered && !!(i.body.gap || (e = i.range.video) != null && e.partial || (t = i.range.audio) != null && t.partial || (s = i.range.audiovideo) != null && s.partial); }
function Ss(i) { return `${i.type}_${i.level}_${i.sn}`; }
function Qh(i, e) { return i.filter(t => { const s = e(t); return s || t.clearElementaryStreamInfo(), s; }); }
var Ki = { cbc: 0, ctr: 1 };
class kT {
    constructor(e, t, s) { this.subtle = void 0, this.aesIV = void 0, this.aesMode = void 0, this.subtle = e, this.aesIV = t, this.aesMode = s; }
    decrypt(e, t) { switch (this.aesMode) {
        case Ki.cbc: return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e);
        case Ki.ctr: return this.subtle.decrypt({ name: "AES-CTR", counter: this.aesIV, length: 64 }, t, e);
        default: throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
    } }
}
function CT(i) { const e = i.byteLength, t = e && new DataView(i.buffer).getUint8(e - 1); return t ? i.slice(0, e - t) : i; }
class DT {
    constructor() { this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable(); }
    uint8ArrayToUint32Array_(e) { const t = new DataView(e), s = new Uint32Array(4); for (let n = 0; n < 4; n++)
        s[n] = t.getUint32(n * 4); return s; }
    initTable() { const e = this.sBox, t = this.invSBox, s = this.subMix, n = s[0], r = s[1], a = s[2], o = s[3], l = this.invSubMix, u = l[0], c = l[1], d = l[2], h = l[3], f = new Uint32Array(256); let m = 0, p = 0, x = 0; for (x = 0; x < 256; x++)
        x < 128 ? f[x] = x << 1 : f[x] = x << 1 ^ 283; for (x = 0; x < 256; x++) {
        let y = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
        y = y >>> 8 ^ y & 255 ^ 99, e[m] = y, t[y] = m;
        const v = f[m], E = f[v], T = f[E];
        let L = f[y] * 257 ^ y * 16843008;
        n[m] = L << 24 | L >>> 8, r[m] = L << 16 | L >>> 16, a[m] = L << 8 | L >>> 24, o[m] = L, L = T * 16843009 ^ E * 65537 ^ v * 257 ^ m * 16843008, u[y] = L << 24 | L >>> 8, c[y] = L << 16 | L >>> 16, d[y] = L << 8 | L >>> 24, h[y] = L, m ? (m = v ^ f[f[f[T ^ v]]], p ^= f[f[p]]) : m = p = 1;
    } }
    expandKey(e) { const t = this.uint8ArrayToUint32Array_(e); let s = !0, n = 0; for (; n < t.length && s;)
        s = t[n] === this.key[n], n++; if (s)
        return; this.key = t; const r = this.keySize = t.length; if (r !== 4 && r !== 6 && r !== 8)
        throw new Error("Invalid aes key size=" + r); const a = this.ksRows = (r + 6 + 1) * 4; let o, l; const u = this.keySchedule = new Uint32Array(a), c = this.invKeySchedule = new Uint32Array(a), d = this.sBox, h = this.rcon, f = this.invSubMix, m = f[0], p = f[1], x = f[2], y = f[3]; let v, E; for (o = 0; o < a; o++) {
        if (o < r) {
            v = u[o] = t[o];
            continue;
        }
        E = v, o % r === 0 ? (E = E << 8 | E >>> 24, E = d[E >>> 24] << 24 | d[E >>> 16 & 255] << 16 | d[E >>> 8 & 255] << 8 | d[E & 255], E ^= h[o / r | 0] << 24) : r > 6 && o % r === 4 && (E = d[E >>> 24] << 24 | d[E >>> 16 & 255] << 16 | d[E >>> 8 & 255] << 8 | d[E & 255]), u[o] = v = (u[o - r] ^ E) >>> 0;
    } for (l = 0; l < a; l++)
        o = a - l, l & 3 ? E = u[o] : E = u[o - 4], l < 4 || o <= 4 ? c[l] = E : c[l] = m[d[E >>> 24]] ^ p[d[E >>> 16 & 255]] ^ x[d[E >>> 8 & 255]] ^ y[d[E & 255]], c[l] = c[l] >>> 0; }
    networkToHostOrderSwap(e) { return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24; }
    decrypt(e, t, s) { const n = this.keySize + 6, r = this.invKeySchedule, a = this.invSBox, o = this.invSubMix, l = o[0], u = o[1], c = o[2], d = o[3], h = this.uint8ArrayToUint32Array_(s); let f = h[0], m = h[1], p = h[2], x = h[3]; const y = new Int32Array(e), v = new Int32Array(y.length); let E, T, L, w, I, R, _, A, D, B, V, Y, K, $; const H = this.networkToHostOrderSwap; for (; t < y.length;) {
        for (D = H(y[t]), B = H(y[t + 1]), V = H(y[t + 2]), Y = H(y[t + 3]), I = D ^ r[0], R = Y ^ r[1], _ = V ^ r[2], A = B ^ r[3], K = 4, $ = 1; $ < n; $++)
            E = l[I >>> 24] ^ u[R >> 16 & 255] ^ c[_ >> 8 & 255] ^ d[A & 255] ^ r[K], T = l[R >>> 24] ^ u[_ >> 16 & 255] ^ c[A >> 8 & 255] ^ d[I & 255] ^ r[K + 1], L = l[_ >>> 24] ^ u[A >> 16 & 255] ^ c[I >> 8 & 255] ^ d[R & 255] ^ r[K + 2], w = l[A >>> 24] ^ u[I >> 16 & 255] ^ c[R >> 8 & 255] ^ d[_ & 255] ^ r[K + 3], I = E, R = T, _ = L, A = w, K = K + 4;
        E = a[I >>> 24] << 24 ^ a[R >> 16 & 255] << 16 ^ a[_ >> 8 & 255] << 8 ^ a[A & 255] ^ r[K], T = a[R >>> 24] << 24 ^ a[_ >> 16 & 255] << 16 ^ a[A >> 8 & 255] << 8 ^ a[I & 255] ^ r[K + 1], L = a[_ >>> 24] << 24 ^ a[A >> 16 & 255] << 16 ^ a[I >> 8 & 255] << 8 ^ a[R & 255] ^ r[K + 2], w = a[A >>> 24] << 24 ^ a[I >> 16 & 255] << 16 ^ a[R >> 8 & 255] << 8 ^ a[_ & 255] ^ r[K + 3], v[t] = H(E ^ f), v[t + 1] = H(w ^ m), v[t + 2] = H(L ^ p), v[t + 3] = H(T ^ x), f = D, m = B, p = V, x = Y, t = t + 4;
    } return v.buffer; }
}
class PT {
    constructor(e, t, s) { this.subtle = void 0, this.key = void 0, this.aesMode = void 0, this.subtle = e, this.key = t, this.aesMode = s; }
    expandKey() { const e = NT(this.aesMode); return this.subtle.importKey("raw", this.key, { name: e }, !1, ["encrypt", "decrypt"]); }
}
function NT(i) { switch (i) {
    case Ki.cbc: return "AES-CBC";
    case Ki.ctr: return "AES-CTR";
    default: throw new Error(`[FastAESKey] invalid aes mode ${i}`);
} }
const OT = 16;
class qc {
    constructor(e, { removePKCS7Padding: t = !0 } = {}) { if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.enableSoftwareAES = void 0, this.enableSoftwareAES = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
        try {
            const s = self.crypto;
            s && (this.subtle = s.subtle || s.webkitSubtle);
        }
        catch { } this.useSoftware = !this.subtle; }
    destroy() { this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null; }
    isSync() { return this.useSoftware; }
    flush() { const { currentResult: e, remainderData: t } = this; if (!e || t)
        return this.reset(), null; const s = new Uint8Array(e); return this.reset(), this.removePKCS7Padding ? CT(s) : s; }
    reset() { this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null); }
    decrypt(e, t, s, n) { return this.useSoftware ? new Promise((r, a) => { const o = ArrayBuffer.isView(e) ? e : new Uint8Array(e); this.softwareDecrypt(o, t, s, n); const l = this.flush(); l ? r(l.buffer) : a(new Error("[softwareDecrypt] Failed to decrypt data")); }) : this.webCryptoDecrypt(new Uint8Array(e), t, s, n); }
    softwareDecrypt(e, t, s, n) { const { currentIV: r, currentResult: a, remainderData: o } = this; if (n !== Ki.cbc || t.byteLength !== 16)
        return le.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null; this.logOnce("JS AES decrypt"), o && (e = wt(o, e), this.remainderData = null); const l = this.getValidChunk(e); if (!l.length)
        return null; r && (s = r); let u = this.softwareDecrypter; u || (u = this.softwareDecrypter = new DT), u.expandKey(t); const c = a; return this.currentResult = u.decrypt(l.buffer, 0, s), this.currentIV = l.slice(-16).buffer, c || null; }
    webCryptoDecrypt(e, t, s, n) { if (this.key !== t || !this.fastAesKey) {
        if (!this.subtle)
            return Promise.resolve(this.onWebCryptoError(e, t, s, n));
        this.key = t, this.fastAesKey = new PT(this.subtle, t, n);
    } return this.fastAesKey.expandKey().then(r => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new kT(this.subtle, new Uint8Array(s), n).decrypt(e.buffer, r)) : Promise.reject(new Error("web crypto not initialized"))).catch(r => (le.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`), this.onWebCryptoError(e, t, s, n))); }
    onWebCryptoError(e, t, s, n) { const r = this.enableSoftwareAES; if (r) {
        this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, s, n);
        const a = this.flush();
        if (a)
            return a.buffer;
    } throw new Error("WebCrypto" + (r ? " and softwareDecrypt" : "") + ": failed to decrypt data"); }
    getValidChunk(e) { let t = e; const s = e.length - e.length % OT; return s !== e.length && (t = e.slice(0, s), this.remainderData = e.slice(s)), t; }
    logOnce(e) { this.logEnabled && (le.log(`[decrypter]: ${e}`), this.logEnabled = !1); }
}
const Xh = Math.pow(2, 17);
class MT {
    constructor(e) { this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e; }
    destroy() { this.loader && (this.loader.destroy(), this.loader = null); }
    abort() { this.loader && this.loader.abort(); }
    load(e, t) { const s = e.url; if (!s)
        return Promise.reject(new oi({ type: q.NETWORK_ERROR, details: k.FRAG_LOAD_ERROR, fatal: !1, frag: e, error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`), networkDetails: null })); this.abort(); const n = this.config, r = n.fLoader, a = n.loader; return new Promise((o, l) => { if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some(m => m[0] === "GAP")) {
            l(Jh(e));
            return;
        }
        else
            e.gap = !1; const u = this.loader = r ? new r(n) : new a(n), c = Zh(e); e.loader = u; const d = qh(n.fragLoadPolicy.default), h = { loadPolicy: d, timeout: d.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: e.sn === "initSegment" ? 1 / 0 : Xh }; e.stats = u.stats; const f = { onSuccess: (m, p, x, y) => { this.resetLoader(e, u); let v = m.data; x.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(v.slice(0, 16)), v = v.slice(16)), o({ frag: e, part: null, payload: v, networkDetails: y }); }, onError: (m, p, x, y) => { this.resetLoader(e, u), l(new oi({ type: q.NETWORK_ERROR, details: k.FRAG_LOAD_ERROR, fatal: !1, frag: e, response: oe({ url: s, data: void 0 }, m), error: new Error(`HTTP Error ${m.code} ${m.text}`), networkDetails: x, stats: y })); }, onAbort: (m, p, x) => { this.resetLoader(e, u), l(new oi({ type: q.NETWORK_ERROR, details: k.INTERNAL_ABORTED, fatal: !1, frag: e, error: new Error("Aborted"), networkDetails: x, stats: m })); }, onTimeout: (m, p, x) => { this.resetLoader(e, u), l(new oi({ type: q.NETWORK_ERROR, details: k.FRAG_LOAD_TIMEOUT, fatal: !1, frag: e, error: new Error(`Timeout after ${h.timeout}ms`), networkDetails: x, stats: m })); } }; t && (f.onProgress = (m, p, x, y) => t({ frag: e, part: null, payload: x, networkDetails: y })), u.load(c, h, f); }); }
    loadPart(e, t, s) { this.abort(); const n = this.config, r = n.fLoader, a = n.loader; return new Promise((o, l) => { if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        l(Jh(e, t));
        return;
    } const u = this.loader = r ? new r(n) : new a(n), c = Zh(e, t); e.loader = u; const d = qh(n.fragLoadPolicy.default), h = { loadPolicy: d, timeout: d.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: Xh }; t.stats = u.stats, u.load(c, h, { onSuccess: (f, m, p, x) => { this.resetLoader(e, u), this.updateStatsFromPart(e, t); const y = { frag: e, part: t, payload: f.data, networkDetails: x }; s(y), o(y); }, onError: (f, m, p, x) => { this.resetLoader(e, u), l(new oi({ type: q.NETWORK_ERROR, details: k.FRAG_LOAD_ERROR, fatal: !1, frag: e, part: t, response: oe({ url: c.url, data: void 0 }, f), error: new Error(`HTTP Error ${f.code} ${f.text}`), networkDetails: p, stats: x })); }, onAbort: (f, m, p) => { e.stats.aborted = t.stats.aborted, this.resetLoader(e, u), l(new oi({ type: q.NETWORK_ERROR, details: k.INTERNAL_ABORTED, fatal: !1, frag: e, part: t, error: new Error("Aborted"), networkDetails: p, stats: f })); }, onTimeout: (f, m, p) => { this.resetLoader(e, u), l(new oi({ type: q.NETWORK_ERROR, details: k.FRAG_LOAD_TIMEOUT, fatal: !1, frag: e, part: t, error: new Error(`Timeout after ${h.timeout}ms`), networkDetails: p, stats: f })); } }); }); }
    updateStatsFromPart(e, t) { const s = e.stats, n = t.stats, r = n.total; if (s.loaded += n.loaded, r) {
        const l = Math.round(e.duration / t.duration), u = Math.min(Math.round(s.loaded / r), l), d = (l - u) * Math.round(s.loaded / u);
        s.total = s.loaded + d;
    }
    else
        s.total = Math.max(s.loaded, s.total); const a = s.loading, o = n.loading; a.start ? a.first += o.first - o.start : (a.start = o.start, a.first = o.first), a.end = o.end; }
    resetLoader(e, t) { e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy(); }
}
function Zh(i, e = null) { const t = e || i, s = { frag: i, part: e, responseType: "arraybuffer", url: t.url, headers: {}, rangeStart: 0, rangeEnd: 0 }, n = t.byteRangeStartOffset, r = t.byteRangeEndOffset; if (G(n) && G(r)) {
    var a;
    let o = n, l = r;
    if (i.sn === "initSegment" && FT((a = i.decryptdata) == null ? void 0 : a.method)) {
        const u = r - n;
        u % 16 && (l = r + (16 - u % 16)), n !== 0 && (s.resetIV = !0, o = n - 16);
    }
    s.rangeStart = o, s.rangeEnd = l;
} return s; }
function Jh(i, e) { const t = new Error(`GAP ${i.gap ? "tag" : "attribute"} found`), s = { type: q.MEDIA_ERROR, details: k.FRAG_GAP, fatal: !1, frag: i, error: t, networkDetails: null }; return e && (s.part = e), (e || i).stats.aborted = !0, new oi(s); }
function FT(i) { return i === "AES-128" || i === "AES-256"; }
class oi extends Error {
    constructor(e) { super(e.error.message), this.data = void 0, this.data = e; }
}
class Xg extends _t {
    constructor(e, t) { super(e, t), this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this); }
    destroy() { this.onHandlerDestroying(), this.onHandlerDestroyed(); }
    onHandlerDestroying() { this.clearNextTick(), this.clearInterval(); }
    onHandlerDestroyed() { }
    hasInterval() { return !!this._tickInterval; }
    hasNextTick() { return !!this._tickTimer; }
    setInterval(e) { return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0); }
    clearInterval() { return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1; }
    clearNextTick() { return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1; }
    tick() { this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0); }
    tickImmediate() { this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0); }
    doTick() { }
}
class Qc {
    constructor(e, t, s, n = 0, r = -1, a = !1) { this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = Vr(), this.buffering = { audio: Vr(), video: Vr(), audiovideo: Vr() }, this.level = e, this.sn = t, this.id = s, this.size = n, this.part = r, this.partial = a; }
}
function Vr() { return { start: 0, executeStart: 0, executeEnd: 0, end: 0 }; }
const ef = { length: 0, start: () => 0, end: () => 0 };
class Z {
    static isBuffered(e, t) { if (e) {
        const s = Z.getBuffered(e);
        for (let n = s.length; n--;)
            if (t >= s.start(n) && t <= s.end(n))
                return !0;
    } return !1; }
    static bufferedRanges(e) { if (e) {
        const t = Z.getBuffered(e);
        return Z.timeRangesToArray(t);
    } return []; }
    static timeRangesToArray(e) { const t = []; for (let s = 0; s < e.length; s++)
        t.push({ start: e.start(s), end: e.end(s) }); return t; }
    static bufferInfo(e, t, s) { if (e) {
        const n = Z.bufferedRanges(e);
        if (n.length)
            return Z.bufferedInfo(n, t, s);
    } return { len: 0, start: t, end: t, bufferedIndex: -1 }; }
    static bufferedInfo(e, t, s) { t = Math.max(0, t), e.length > 1 && e.sort((c, d) => c.start - d.start || d.end - c.end); let n = -1, r = []; if (s)
        for (let c = 0; c < e.length; c++) {
            t >= e[c].start && t <= e[c].end && (n = c);
            const d = r.length;
            if (d) {
                const h = r[d - 1].end;
                e[c].start - h < s ? e[c].end > h && (r[d - 1].end = e[c].end) : r.push(e[c]);
            }
            else
                r.push(e[c]);
        }
    else
        r = e; let a = 0, o, l = t, u = t; for (let c = 0; c < r.length; c++) {
        const d = r[c].start, h = r[c].end;
        if (n === -1 && t >= d && t <= h && (n = c), t + s >= d && t < h)
            l = d, u = h, a = u - t;
        else if (t + s < d) {
            o = d;
            break;
        }
    } return { len: a, start: l || 0, end: u || 0, nextStart: o, buffered: e, bufferedIndex: n }; }
    static getBuffered(e) { try {
        return e.buffered || ef;
    }
    catch (t) {
        return le.log("failed to get media.buffered", t), ef;
    } }
}
const Zg = /\{\$([a-zA-Z0-9-_]+)\}/g;
function tf(i) { return Zg.test(i); }
function bu(i, e) { if (i.variableList !== null || i.hasVariableRefs) {
    const t = i.variableList;
    return e.replace(Zg, s => { const n = s.substring(2, s.length - 1), r = t == null ? void 0 : t[n]; return r === void 0 ? (i.playlistParsingError || (i.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${n}"`)), s) : r; });
} return e; }
function sf(i, e, t) { let s = i.variableList; s || (i.variableList = s = {}); let n, r; if ("QUERYPARAM" in e) {
    n = e.QUERYPARAM;
    try {
        const a = new self.URL(t).searchParams;
        if (a.has(n))
            r = a.get(n);
        else
            throw new Error(`"${n}" does not match any query parameter in URI: "${t}"`);
    }
    catch (a) {
        i.playlistParsingError || (i.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`));
    }
}
else
    n = e.NAME, r = e.VALUE; n in s ? i.playlistParsingError || (i.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${n}"`)) : s[n] = r || ""; }
function UT(i, e, t) { const s = e.IMPORT; if (t && s in t) {
    let n = i.variableList;
    n || (i.variableList = n = {}), n[s] = t[s];
}
else
    i.playlistParsingError || (i.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`)); }
const BT = /^(\d+)x(\d+)$/, nf = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class ve {
    constructor(e, t) { typeof e == "string" && (e = ve.parseAttrList(e, t)), ce(this, e); }
    get clientAttrs() { return Object.keys(this).filter(e => e.substring(0, 2) === "X-"); }
    decimalInteger(e) { const t = parseInt(this[e], 10); return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t; }
    hexadecimalInteger(e) { if (this[e]) {
        let t = (this[e] || "0x").slice(2);
        t = (t.length & 1 ? "0" : "") + t;
        const s = new Uint8Array(t.length / 2);
        for (let n = 0; n < t.length / 2; n++)
            s[n] = parseInt(t.slice(n * 2, n * 2 + 2), 16);
        return s;
    } return null; }
    hexadecimalIntegerAsNumber(e) { const t = parseInt(this[e], 16); return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t; }
    decimalFloatingPoint(e) { return parseFloat(this[e]); }
    optionalFloat(e, t) { const s = this[e]; return s ? parseFloat(s) : t; }
    enumeratedString(e) { return this[e]; }
    enumeratedStringList(e, t) { const s = this[e]; return (s ? s.split(/[ ,]+/) : []).reduce((n, r) => (n[r.toLowerCase()] = !0, n), t); }
    bool(e) { return this[e] === "YES"; }
    decimalResolution(e) { const t = BT.exec(this[e]); if (t !== null)
        return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) }; }
    static parseAttrList(e, t) { let s; const n = {}, r = '"'; for (nf.lastIndex = 0; (s = nf.exec(e)) !== null;) {
        const a = s[1].trim();
        let o = s[2];
        const l = o.indexOf(r) === 0 && o.lastIndexOf(r) === o.length - 1;
        let u = !1;
        if (l)
            o = o.slice(1, -1);
        else
            switch (a) {
                case "IV":
                case "SCTE35-CMD":
                case "SCTE35-IN":
                case "SCTE35-OUT": u = !0;
            }
        if (t && (l || u))
            o = bu(t, o);
        else if (!u && !l)
            switch (a) {
                case "CLOSED-CAPTIONS": if (o === "NONE")
                    break;
                case "ALLOWED-CPC":
                case "CLASS":
                case "ASSOC-LANGUAGE":
                case "AUDIO":
                case "BYTERANGE":
                case "CHANNELS":
                case "CHARACTERISTICS":
                case "CODECS":
                case "DATA-ID":
                case "END-DATE":
                case "GROUP-ID":
                case "ID":
                case "IMPORT":
                case "INSTREAM-ID":
                case "KEYFORMAT":
                case "KEYFORMATVERSIONS":
                case "LANGUAGE":
                case "NAME":
                case "PATHWAY-ID":
                case "QUERYPARAM":
                case "RECENTLY-REMOVED-DATERANGES":
                case "SERVER-URI":
                case "STABLE-RENDITION-ID":
                case "STABLE-VARIANT-ID":
                case "START-DATE":
                case "SUBTITLES":
                case "SUPPLEMENTAL-CODECS":
                case "URI":
                case "VALUE":
                case "VIDEO":
                case "X-ASSET-LIST":
                case "X-ASSET-URI": le.warn(`${e}: attribute ${a} is missing quotes`);
            }
        n[a] = o;
    } return n; }
}
const $T = "com.apple.hls.interstitial";
function jT(i) { return i !== "ID" && i !== "CLASS" && i !== "CUE" && i !== "START-DATE" && i !== "DURATION" && i !== "END-DATE" && i !== "END-ON-NEXT"; }
function GT(i) { return i === "SCTE35-OUT" || i === "SCTE35-IN" || i === "SCTE35-CMD"; }
class Jg {
    constructor(e, t, s = 0) { var n; if (this.attr = void 0, this.tagAnchor = void 0, this.tagOrder = void 0, this._startDate = void 0, this._endDate = void 0, this._dateAtEnd = void 0, this._cue = void 0, this._badValueForSameId = void 0, this.tagAnchor = (t == null ? void 0 : t.tagAnchor) || null, this.tagOrder = (n = t == null ? void 0 : t.tagOrder) != null ? n : s, t) {
        const r = t.attr;
        for (const a in r)
            if (Object.prototype.hasOwnProperty.call(e, a) && e[a] !== r[a]) {
                le.warn(`DATERANGE tag attribute: "${a}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = a;
                break;
            }
        e = ce(new ve({}), r, e);
    } if (this.attr = e, t ? (this._startDate = t._startDate, this._cue = t._cue, this._endDate = t._endDate, this._dateAtEnd = t._dateAtEnd) : this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
        const r = (t == null ? void 0 : t.endDate) || new Date(this.attr["END-DATE"]);
        G(r.getTime()) && (this._endDate = r);
    } }
    get id() { return this.attr.ID; }
    get class() { return this.attr.CLASS; }
    get cue() { const e = this._cue; return e === void 0 ? this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", { pre: !1, post: !1, once: !1 }) : e; }
    get startTime() { const { tagAnchor: e } = this; return e === null || e.programDateTime === null ? (le.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN) : e.start + (this.startDate.getTime() - e.programDateTime) / 1e3; }
    get startDate() { return this._startDate; }
    get endDate() { const e = this._endDate || this._dateAtEnd; if (e)
        return e; const t = this.duration; return t !== null ? this._dateAtEnd = new Date(this._startDate.getTime() + t * 1e3) : null; }
    get duration() { if ("DURATION" in this.attr) {
        const e = this.attr.decimalFloatingPoint("DURATION");
        if (G(e))
            return e;
    }
    else if (this._endDate)
        return (this._endDate.getTime() - this._startDate.getTime()) / 1e3; return null; }
    get plannedDuration() { return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null; }
    get endOnNext() { return this.attr.bool("END-ON-NEXT"); }
    get isInterstitial() { return this.class === $T; }
    get isValid() { return !!this.id && !this._badValueForSameId && G(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr); }
}
const VT = 10;
class KT {
    constructor(e) { this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.dateRangeTagCount = 0, this.live = !0, this.requestScheduled = -1, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.appliedTimelineOffset = void 0, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e; }
    reloaded(e) { if (!e) {
        this.advanced = !0, this.updated = !0;
        return;
    } const t = this.lastPartSn - e.lastPartSn, s = this.lastPartIndex - e.lastPartIndex; this.updated = this.endSN !== e.endSN || !!s || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * .6) : this.misses = e.misses + 1; }
    hasKey(e) { return this.encryptedFragments.some(t => { let s = t.decryptdata; return s || (t.setKeyFormat(e.keyFormat), s = t.decryptdata), !!s && e.matches(s); }); }
    get hasProgramDateTime() { return this.fragments.length ? G(this.fragments[this.fragments.length - 1].programDateTime) : !1; }
    get levelTargetDuration() { return this.averagetargetduration || this.targetduration || VT; }
    get drift() { const e = this.driftEndTime - this.driftStartTime; return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1; }
    get edge() { return this.partEnd || this.fragmentEnd; }
    get partEnd() { var e; return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd; }
    get fragmentEnd() { return this.fragments.length ? this.fragments[this.fragments.length - 1].end : 0; }
    get fragmentStart() { return this.fragments.length ? this.fragments[0].start : 0; }
    get age() { return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0; }
    get lastPartIndex() { var e; return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1; }
    get maxPartIndex() { const e = this.partList; if (e) {
        const t = this.lastPartIndex;
        if (t !== -1) {
            for (let s = e.length; s--;)
                if (e[s].index > t)
                    return e[s].index;
            return t;
        }
    } return 0; }
    get lastPartSn() { var e; return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN; }
    get expired() { if (this.live && this.age && this.misses < 3) {
        const e = this.partEnd - this.fragmentStart;
        return this.age > Math.max(e, this.totalduration) + this.levelTargetDuration;
    } return !1; }
}
function to(i, e) { return i.length === e.length ? !i.some((t, s) => t !== e[s]) : !1; }
function rf(i, e) { return !i && !e ? !0 : !i || !e ? !1 : to(i, e); }
function zs(i) { return i === "AES-128" || i === "AES-256" || i === "AES-256-CTR"; }
function Xc(i) { switch (i) {
    case "AES-128":
    case "AES-256": return Ki.cbc;
    case "AES-256-CTR": return Ki.ctr;
    default: throw new Error(`invalid full segment method ${i}`);
} }
function Zc(i) { return Uint8Array.from(atob(i), e => e.charCodeAt(0)); }
function ku(i) { return Uint8Array.from(unescape(encodeURIComponent(i)), e => e.charCodeAt(0)); }
function HT(i) { const e = ku(i).subarray(0, 16), t = new Uint8Array(16); return t.set(e, 16 - e.length), t; }
function ep(i) { const e = function (s, n, r) { const a = s[n]; s[n] = s[r], s[r] = a; }; e(i, 0, 3), e(i, 1, 2), e(i, 4, 5), e(i, 6, 7); }
function tp(i) { const e = i.split(":"); let t = null; if (e[0] === "data" && e.length === 2) {
    const s = e[1].split(";"), n = s[s.length - 1].split(",");
    if (n.length === 2) {
        const r = n[0] === "base64", a = n[1];
        r ? (s.splice(-1, 1), t = Zc(a)) : t = HT(a);
    }
} return t; }
const io = typeof self < "u" ? self : void 0;
var Ee = { CLEARKEY: "org.w3.clearkey", FAIRPLAY: "com.apple.fps", PLAYREADY: "com.microsoft.playready", WIDEVINE: "com.widevine.alpha" }, Ge = { CLEARKEY: "org.w3.clearkey", FAIRPLAY: "com.apple.streamingkeydelivery", PLAYREADY: "com.microsoft.playready", WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" };
function ya(i) { switch (i) {
    case Ge.FAIRPLAY: return Ee.FAIRPLAY;
    case Ge.PLAYREADY: return Ee.PLAYREADY;
    case Ge.WIDEVINE: return Ee.WIDEVINE;
    case Ge.CLEARKEY: return Ee.CLEARKEY;
} }
function ul(i) { switch (i) {
    case Ee.FAIRPLAY: return Ge.FAIRPLAY;
    case Ee.PLAYREADY: return Ge.PLAYREADY;
    case Ee.WIDEVINE: return Ge.WIDEVINE;
    case Ee.CLEARKEY: return Ge.CLEARKEY;
} }
function Rn(i) { const { drmSystems: e, widevineLicenseUrl: t } = i, s = e ? [Ee.FAIRPLAY, Ee.WIDEVINE, Ee.PLAYREADY, Ee.CLEARKEY].filter(n => !!e[n]) : []; return !s[Ee.WIDEVINE] && t && s.push(Ee.WIDEVINE), s; }
const ip = function (i) { return io != null && (i = io.navigator) != null && i.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null; }();
function zT(i, e, t, s) { let n; switch (i) {
    case Ee.FAIRPLAY:
        n = ["cenc", "sinf"];
        break;
    case Ee.WIDEVINE:
    case Ee.PLAYREADY:
        n = ["cenc"];
        break;
    case Ee.CLEARKEY:
        n = ["cenc", "keyids"];
        break;
    default: throw new Error(`Unknown key-system: ${i}`);
} return WT(n, e, t, s); }
function WT(i, e, t, s) { return [{ initDataTypes: i, persistentState: s.persistentState || "optional", distinctiveIdentifier: s.distinctiveIdentifier || "optional", sessionTypes: s.sessionTypes || [s.sessionType || "temporary"], audioCapabilities: e.map(r => ({ contentType: `audio/mp4; codecs=${r}`, robustness: s.audioRobustness || "", encryptionScheme: s.audioEncryptionScheme || null })), videoCapabilities: t.map(r => ({ contentType: `video/mp4; codecs=${r}`, robustness: s.videoRobustness || "", encryptionScheme: s.videoEncryptionScheme || null })) }]; }
function YT(i) { var e; return !!i && (i.sessionType === "persistent-license" || !!((e = i.sessionTypes) != null && e.some(t => t === "persistent-license"))); }
function sp(i) { const e = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2), t = String.fromCharCode.apply(null, Array.from(e)), s = t.substring(t.indexOf("<"), t.length), a = new DOMParser().parseFromString(s, "text/xml").getElementsByTagName("KID")[0]; if (a) {
    const o = a.childNodes[0] ? a.childNodes[0].nodeValue : a.getAttribute("VALUE");
    if (o) {
        const l = Zc(o).subarray(0, 16);
        return ep(l), l;
    }
} return null; }
let Ts = {};
class $i {
    static clearKeyUriToKeyIdMap() { Ts = {}; }
    static setKeyIdForUri(e, t) { Ts[e] = t; }
    static addKeyIdForUri(e) { const t = Object.keys(Ts).length % Number.MAX_SAFE_INTEGER, s = new Uint8Array(16); return new DataView(s.buffer, 12, 4).setUint32(0, t), Ts[e] = s, s; }
    constructor(e, t, s, n = [1], r = null, a) { this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = s, this.keyFormatVersions = n, this.iv = r, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && !zs(e), a != null && a.startsWith("0x") && (this.keyId = new Uint8Array(Cg(a))); }
    matches(e) { return e.uri === this.uri && e.method === this.method && e.encrypted === this.encrypted && e.keyFormat === this.keyFormat && to(e.keyFormatVersions, this.keyFormatVersions) && rf(e.iv, this.iv) && rf(e.keyId, this.keyId); }
    isSupported() { if (this.method) {
        if (zs(this.method) || this.method === "NONE")
            return !0;
        if (this.keyFormat === "identity")
            return this.method === "SAMPLE-AES";
        switch (this.keyFormat) {
            case Ge.FAIRPLAY:
            case Ge.WIDEVINE:
            case Ge.PLAYREADY:
            case Ge.CLEARKEY: return ["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
        }
    } return !1; }
    getDecryptData(e, t) { if (!this.encrypted || !this.uri)
        return null; if (zs(this.method)) {
        let r = this.iv;
        return r || (typeof e != "number" && (le.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0), r = QT(e)), new $i(this.method, this.uri, "identity", this.keyFormatVersions, r);
    } if (this.keyId) {
        const r = Ts[this.uri];
        if (r && !to(this.keyId, r) && $i.setKeyIdForUri(this.uri, this.keyId), this.pssh)
            return this;
    } const s = tp(this.uri); if (s)
        switch (this.keyFormat) {
            case Ge.WIDEVINE:
                if (this.pssh = s, !this.keyId) {
                    const r = JS(s.buffer);
                    if (r.length) {
                        var n;
                        const a = r[0];
                        this.keyId = (n = a.kids) != null && n.length ? a.kids[0] : null;
                    }
                }
                this.keyId || (this.keyId = af(t));
                break;
            case Ge.PLAYREADY: {
                const r = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                this.pssh = ZS(r, null, s), this.keyId = sp(s);
                break;
            }
            default: {
                let r = s.subarray(0, 16);
                if (r.length !== 16) {
                    const a = new Uint8Array(16);
                    a.set(r, 16 - r.length), r = a;
                }
                this.keyId = r;
                break;
            }
        } if (!this.keyId || this.keyId.byteLength !== 16) {
        let r;
        r = qT(t), r || (r = af(t), r || (r = Ts[this.uri])), r && (this.keyId = r, $i.setKeyIdForUri(this.uri, r));
    } return this; }
}
function qT(i) { const e = i == null ? void 0 : i[Ge.WIDEVINE]; return e ? e.keyId : null; }
function af(i) { const e = i == null ? void 0 : i[Ge.PLAYREADY]; if (e) {
    const t = tp(e.uri);
    if (t)
        return sp(t);
} return null; }
function QT(i) { const e = new Uint8Array(16); for (let t = 12; t < 16; t++)
    e[t] = i >> 8 * (15 - t) & 255; return e; }
const of = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, lf = /#EXT-X-MEDIA:(.*)/g, XT = /^#EXT(?:INF|-X-TARGETDURATION):/m, cl = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[^\r\n]*)/.source, /#.*/.source].join("|"), "g"), ZT = new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class Zt {
    static findGroup(e, t) { for (let s = 0; s < e.length; s++) {
        const n = e[s];
        if (n.id === t)
            return n;
    } }
    static resolve(e, t) { return Vc.buildAbsoluteURL(t, e, { alwaysNormalize: !0 }); }
    static isMediaPlaylist(e) { return XT.test(e); }
    static parseMasterPlaylist(e, t) { const s = tf(e), n = { contentSteering: null, levels: [], playlistParsingError: null, sessionData: null, sessionKeys: null, startTimeOffset: null, variableList: null, hasVariableRefs: s }, r = []; if (of.lastIndex = 0, !e.startsWith("#EXTM3U"))
        return n.playlistParsingError = new Error("no EXTM3U delimiter"), n; let a; for (; (a = of.exec(e)) != null;)
        if (a[1]) {
            var o;
            const u = new ve(a[1], n), c = bu(n, a[2]), d = { attrs: u, bitrate: u.decimalInteger("BANDWIDTH") || u.decimalInteger("AVERAGE-BANDWIDTH"), name: u.NAME, url: Zt.resolve(c, t) }, h = u.decimalResolution("RESOLUTION");
            h && (d.width = h.width, d.height = h.height), df(u.CODECS, d);
            const f = u["SUPPLEMENTAL-CODECS"];
            f && (d.supplemental = {}, df(f, d.supplemental)), (o = d.unknownCodecs) != null && o.length || r.push(d), n.levels.push(d);
        }
        else if (a[3]) {
            const u = a[3], c = a[4];
            switch (u) {
                case "SESSION-DATA": {
                    const d = new ve(c, n), h = d["DATA-ID"];
                    h && (n.sessionData === null && (n.sessionData = {}), n.sessionData[h] = d);
                    break;
                }
                case "SESSION-KEY": {
                    const d = uf(c, t, n);
                    d.encrypted && d.isSupported() ? (n.sessionKeys === null && (n.sessionKeys = []), n.sessionKeys.push(d)) : le.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${c}"`);
                    break;
                }
                case "DEFINE": {
                    {
                        const d = new ve(c, n);
                        sf(n, d, t);
                    }
                    break;
                }
                case "CONTENT-STEERING": {
                    const d = new ve(c, n);
                    n.contentSteering = { uri: Zt.resolve(d["SERVER-URI"], t), pathwayId: d["PATHWAY-ID"] || "." };
                    break;
                }
                case "START": {
                    n.startTimeOffset = cf(c);
                    break;
                }
            }
        } const l = r.length > 0 && r.length < n.levels.length; return n.levels = l ? r : n.levels, n.levels.length === 0 && (n.playlistParsingError = new Error("no levels found in manifest")), n; }
    static parseMasterPlaylistMedia(e, t, s) { let n; const r = {}, a = s.levels, o = { AUDIO: a.map(u => ({ id: u.attrs.AUDIO, audioCodec: u.audioCodec })), SUBTITLES: a.map(u => ({ id: u.attrs.SUBTITLES, textCodec: u.textCodec })), "CLOSED-CAPTIONS": [] }; let l = 0; for (lf.lastIndex = 0; (n = lf.exec(e)) !== null;) {
        const u = new ve(n[1], s), c = u.TYPE;
        if (c) {
            const d = o[c], h = r[c] || [];
            r[c] = h;
            const f = u.LANGUAGE, m = u["ASSOC-LANGUAGE"], p = u.CHANNELS, x = u.CHARACTERISTICS, y = u["INSTREAM-ID"], v = { attrs: u, bitrate: 0, id: l++, groupId: u["GROUP-ID"] || "", name: u.NAME || f || "", type: c, default: u.bool("DEFAULT"), autoselect: u.bool("AUTOSELECT"), forced: u.bool("FORCED"), lang: f, url: u.URI ? Zt.resolve(u.URI, t) : "" };
            if (m && (v.assocLang = m), p && (v.channels = p), x && (v.characteristics = x), y && (v.instreamId = y), d != null && d.length) {
                const E = Zt.findGroup(d, v.groupId) || d[0];
                hf(v, E, "audioCodec"), hf(v, E, "textCodec");
            }
            h.push(v);
        }
    } return r; }
    static parseLevelPlaylist(e, t, s, n, r, a) { var o; const l = { url: t }, u = new KT(t), c = u.fragments, d = []; let h = null, f = 0, m = 0, p = 0, x = 0, y = 0, v = null, E = new al(n, l), T, L, w, I = -1, R = !1, _ = null, A; if (cl.lastIndex = 0, u.m3u8 = e, u.hasVariableRefs = tf(e), ((o = cl.exec(e)) == null ? void 0 : o[0]) !== "#EXTM3U")
        return u.playlistParsingError = new Error("Missing format identifier #EXTM3U"), u; for (; (T = cl.exec(e)) !== null;) {
        R && (R = !1, E = new al(n, l), E.playlistOffset = p, E.setStart(p), E.sn = f, E.cc = x, y && (E.bitrate = y), E.level = s, h && (E.initSegment = h, h.rawProgramDateTime && (E.rawProgramDateTime = h.rawProgramDateTime, h.rawProgramDateTime = null), _ && (E.setByteRange(_), _ = null)));
        const Y = T[1];
        if (Y) {
            E.duration = parseFloat(Y);
            const K = (" " + T[2]).slice(1);
            E.title = K || null, E.tagList.push(K ? ["INF", Y, K] : ["INF", Y]);
        }
        else if (T[3]) {
            if (G(E.duration)) {
                E.playlistOffset = p, E.setStart(p), w && mf(E, w, u), E.sn = f, E.level = s, E.cc = x, c.push(E);
                const K = (" " + T[3]).slice(1);
                E.relurl = bu(u, K), Cu(E, v, d), v = E, p += E.duration, f++, m = 0, R = !0;
            }
        }
        else {
            if (T = T[0].match(ZT), !T) {
                le.warn("No matches on slow regex match for level playlist!");
                continue;
            }
            for (L = 1; L < T.length && T[L] === void 0; L++)
                ;
            const K = (" " + T[L]).slice(1), $ = (" " + T[L + 1]).slice(1), H = T[L + 2] ? (" " + T[L + 2]).slice(1) : null;
            switch (K) {
                case "BYTERANGE":
                    v ? E.setByteRange($, v) : E.setByteRange($);
                    break;
                case "PROGRAM-DATE-TIME":
                    E.rawProgramDateTime = $, E.tagList.push(["PROGRAM-DATE-TIME", $]), I === -1 && (I = c.length);
                    break;
                case "PLAYLIST-TYPE":
                    u.type && ni(u, K, T), u.type = $.toUpperCase();
                    break;
                case "MEDIA-SEQUENCE":
                    u.startSN !== 0 ? ni(u, K, T) : c.length > 0 && gf(u, K, T), f = u.startSN = parseInt($);
                    break;
                case "SKIP": {
                    u.skippedSegments && ni(u, K, T);
                    const C = new ve($, u), O = C.decimalInteger("SKIPPED-SEGMENTS");
                    if (G(O)) {
                        u.skippedSegments += O;
                        for (let M = O; M--;)
                            c.push(null);
                        f += O;
                    }
                    const j = C.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                    j && (u.recentlyRemovedDateranges = (u.recentlyRemovedDateranges || []).concat(j.split("	")));
                    break;
                }
                case "TARGETDURATION":
                    u.targetduration !== 0 && ni(u, K, T), u.targetduration = Math.max(parseInt($), 1);
                    break;
                case "VERSION":
                    u.version !== null && ni(u, K, T), u.version = parseInt($);
                    break;
                case "INDEPENDENT-SEGMENTS": break;
                case "ENDLIST":
                    u.live || ni(u, K, T), u.live = !1;
                    break;
                case "#":
                    ($ || H) && E.tagList.push(H ? [$, H] : [$]);
                    break;
                case "DISCONTINUITY":
                    x++, E.tagList.push(["DIS"]);
                    break;
                case "GAP":
                    E.gap = !0, E.tagList.push([K]);
                    break;
                case "BITRATE":
                    E.tagList.push([K, $]), y = parseInt($) * 1e3, G(y) ? E.bitrate = y : y = 0;
                    break;
                case "DATERANGE": {
                    const C = new ve($, u), O = new Jg(C, u.dateRanges[C.ID], u.dateRangeTagCount);
                    u.dateRangeTagCount++, O.isValid || u.skippedSegments ? u.dateRanges[O.id] = O : le.warn(`Ignoring invalid DATERANGE tag: "${$}"`), E.tagList.push(["EXT-X-DATERANGE", $]);
                    break;
                }
                case "DEFINE": {
                    {
                        const C = new ve($, u);
                        "IMPORT" in C ? UT(u, C, a) : sf(u, C, t);
                    }
                    break;
                }
                case "DISCONTINUITY-SEQUENCE":
                    u.startCC !== 0 ? ni(u, K, T) : c.length > 0 && gf(u, K, T), u.startCC = x = parseInt($);
                    break;
                case "KEY": {
                    const C = uf($, t, u);
                    if (C.isSupported()) {
                        if (C.method === "NONE") {
                            w = void 0;
                            break;
                        }
                        w || (w = {});
                        const O = w[C.keyFormat];
                        O != null && O.matches(C) || (O && (w = ce({}, w)), w[C.keyFormat] = C);
                    }
                    else
                        le.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${$}"`);
                    break;
                }
                case "START":
                    u.startTimeOffset = cf($);
                    break;
                case "MAP": {
                    const C = new ve($, u);
                    if (E.duration) {
                        const O = new al(n, l);
                        ff(O, C, s, w), h = O, E.initSegment = h, h.rawProgramDateTime && !E.rawProgramDateTime && (E.rawProgramDateTime = h.rawProgramDateTime);
                    }
                    else {
                        const O = E.byteRangeEndOffset;
                        if (O) {
                            const j = E.byteRangeStartOffset;
                            _ = `${O - j}@${j}`;
                        }
                        else
                            _ = null;
                        ff(E, C, s, w), h = E, R = !0;
                    }
                    h.cc = x;
                    break;
                }
                case "SERVER-CONTROL": {
                    A && ni(u, K, T), A = new ve($), u.canBlockReload = A.bool("CAN-BLOCK-RELOAD"), u.canSkipUntil = A.optionalFloat("CAN-SKIP-UNTIL", 0), u.canSkipDateRanges = u.canSkipUntil > 0 && A.bool("CAN-SKIP-DATERANGES"), u.partHoldBack = A.optionalFloat("PART-HOLD-BACK", 0), u.holdBack = A.optionalFloat("HOLD-BACK", 0);
                    break;
                }
                case "PART-INF": {
                    u.partTarget && ni(u, K, T);
                    const C = new ve($);
                    u.partTarget = C.decimalFloatingPoint("PART-TARGET");
                    break;
                }
                case "PART": {
                    let C = u.partList;
                    C || (C = u.partList = []);
                    const O = m > 0 ? C[C.length - 1] : void 0, j = m++, M = new ve($, u), F = new US(M, E, l, j, O);
                    C.push(F), E.duration += F.duration;
                    break;
                }
                case "PRELOAD-HINT": {
                    const C = new ve($, u);
                    u.preloadHint = C;
                    break;
                }
                case "RENDITION-REPORT": {
                    const C = new ve($, u);
                    u.renditionReports = u.renditionReports || [], u.renditionReports.push(C);
                    break;
                }
                default:
                    le.warn(`line parsed but not handled: ${T}`);
                    break;
            }
        }
    } v && !v.relurl ? (c.pop(), p -= v.duration, u.partList && (u.fragmentHint = v)) : u.partList && (Cu(E, v, d), E.cc = x, u.fragmentHint = E, w && mf(E, w, u)), u.targetduration || (u.playlistParsingError = new Error("Missing Target Duration")); const D = c.length, B = c[0], V = c[D - 1]; if (p += u.skippedSegments * u.targetduration, p > 0 && D && V) {
        u.averagetargetduration = p / D;
        const Y = V.sn;
        u.endSN = Y !== "initSegment" ? Y : 0, u.live || (V.endList = !0), I > 0 && (e1(c, I), B && d.unshift(B));
    } return u.fragmentHint && (p += u.fragmentHint.duration), u.totalduration = p, d.length && u.dateRangeTagCount && B && np(d, u), u.endCC = x, u; }
}
function np(i, e) { let t = i.length; if (!t)
    if (e.hasProgramDateTime) {
        const o = e.fragments[e.fragments.length - 1];
        i.push(o), t++;
    }
    else
        return; const s = i[t - 1], n = e.live ? 1 / 0 : e.totalduration, r = Object.keys(e.dateRanges); for (let o = r.length; o--;) {
    const l = e.dateRanges[r[o]], u = l.startDate.getTime();
    l.tagAnchor = s.ref;
    for (let c = t; c--;) {
        var a;
        if (((a = i[c]) == null ? void 0 : a.sn) < e.startSN)
            break;
        const d = JT(e, u, i, c, n);
        if (d !== -1) {
            l.tagAnchor = e.fragments[d].ref;
            break;
        }
    }
} }
function JT(i, e, t, s, n) { const r = t[s]; if (r) {
    const o = r.programDateTime;
    if (e >= o || s === 0) {
        var a;
        const l = (((a = t[s + 1]) == null ? void 0 : a.start) || n) - r.start;
        if (e <= o + l * 1e3) {
            const u = t[s].sn - i.startSN;
            if (u < 0)
                return -1;
            const c = i.fragments;
            if (c.length > t.length) {
                const h = (t[s + 1] || c[c.length - 1]).sn - i.startSN;
                for (let f = h; f > u; f--) {
                    const m = c[f].programDateTime;
                    if (e >= m && e < m + c[f].duration * 1e3)
                        return f;
                }
            }
            return u;
        }
    }
} return -1; }
function uf(i, e, t) { var s, n; const r = new ve(i, t), a = (s = r.METHOD) != null ? s : "", o = r.URI, l = r.hexadecimalInteger("IV"), u = r.KEYFORMATVERSIONS, c = (n = r.KEYFORMAT) != null ? n : "identity"; o && r.IV && !l && le.error(`Invalid IV: ${r.IV}`); const d = o ? Zt.resolve(o, e) : "", h = (u || "1").split("/").map(Number).filter(Number.isFinite); return new $i(a, d, c, h, l, r.KEYID); }
function cf(i) { const t = new ve(i).decimalFloatingPoint("TIME-OFFSET"); return G(t) ? t : null; }
function df(i, e) { let t = (i || "").split(/[ ,]+/).filter(s => s); ["video", "audio", "text"].forEach(s => { const n = t.filter(r => zc(r, s)); n.length && (e[`${s}Codec`] = n.map(r => r.split("/")[0]).join(","), t = t.filter(r => n.indexOf(r) === -1)); }), e.unknownCodecs = t; }
function hf(i, e, t) { const s = e[t]; s && (i[t] = s); }
function e1(i, e) { let t = i[e]; for (let s = e; s--;) {
    const n = i[s];
    if (!n)
        return;
    n.programDateTime = t.programDateTime - n.duration * 1e3, t = n;
} }
function Cu(i, e, t) { i.rawProgramDateTime ? t.push(i) : e != null && e.programDateTime && (i.programDateTime = e.endProgramDateTime); }
function ff(i, e, t, s) { i.relurl = e.URI, e.BYTERANGE && i.setByteRange(e.BYTERANGE), i.level = t, i.sn = "initSegment", s && (i.levelkeys = s), i.initSegment = null; }
function mf(i, e, t) { i.levelkeys = e; const { encryptedFragments: s } = t; (!s.length || s[s.length - 1].levelkeys !== e) && Object.keys(e).some(n => e[n].isCommonEncryption) && s.push(i); }
function ni(i, e, t) { i.playlistParsingError = new Error(`#EXT-X-${e} must not appear more than once (${t[0]})`); }
function gf(i, e, t) { i.playlistParsingError = new Error(`#EXT-X-${e} must appear before the first Media Segment (${t[0]})`); }
function dl(i, e) { const t = e.startPTS; if (G(t)) {
    let s = 0, n;
    e.sn > i.sn ? (s = t - i.start, n = i) : (s = i.start - t, n = e), n.duration !== s && n.setDuration(s);
}
else
    e.sn > i.sn ? i.cc === e.cc && i.minEndPTS ? e.setStart(i.start + (i.minEndPTS - i.start)) : e.setStart(i.start + i.duration) : e.setStart(Math.max(i.start - e.duration, 0)); }
function rp(i, e, t, s, n, r, a) { s - t <= 0 && (a.warn("Fragment should have a positive duration", e), s = t + e.duration, r = n + e.duration); let l = t, u = s; const c = e.startPTS, d = e.endPTS; if (G(c)) {
    const y = Math.abs(c - t);
    i && y > i.totalduration ? a.warn(`media timestamps and playlist times differ by ${y}s for level ${e.level} ${i.url}`) : G(e.deltaPTS) ? e.deltaPTS = Math.max(y, e.deltaPTS) : e.deltaPTS = y, l = Math.max(t, c), t = Math.min(t, c), n = e.startDTS !== void 0 ? Math.min(n, e.startDTS) : n, u = Math.min(s, d), s = Math.max(s, d), r = e.endDTS !== void 0 ? Math.max(r, e.endDTS) : r;
} const h = t - e.start; e.start !== 0 && e.setStart(t), e.setDuration(s - e.start), e.startPTS = t, e.maxStartPTS = l, e.startDTS = n, e.endPTS = s, e.minEndPTS = u, e.endDTS = r; const f = e.sn; if (!i || f < i.startSN || f > i.endSN)
    return 0; let m; const p = f - i.startSN, x = i.fragments; for (x[p] = e, m = p; m > 0; m--)
    dl(x[m], x[m - 1]); for (m = p; m < x.length - 1; m++)
    dl(x[m], x[m + 1]); return i.fragmentHint && dl(x[x.length - 1], i.fragmentHint), i.PTSKnown = i.alignedSliding = !0, h; }
function t1(i, e, t) { if (i === e)
    return; let s = null; const n = i.fragments; for (let c = n.length - 1; c >= 0; c--) {
    const d = n[c].initSegment;
    if (d) {
        s = d;
        break;
    }
} i.fragmentHint && delete i.fragmentHint.endPTS; let r; n1(i, e, (c, d, h, f) => { if ((!e.startCC || e.skippedSegments) && d.cc !== c.cc) {
    const m = c.cc - d.cc;
    for (let p = h; p < f.length; p++)
        f[p].cc += m;
    e.endCC = f[f.length - 1].cc;
} G(c.startPTS) && G(c.endPTS) && (d.setStart(d.startPTS = c.startPTS), d.startDTS = c.startDTS, d.maxStartPTS = c.maxStartPTS, d.endPTS = c.endPTS, d.endDTS = c.endDTS, d.minEndPTS = c.minEndPTS, d.setDuration(c.endPTS - c.startPTS), d.duration && (r = d), e.PTSKnown = e.alignedSliding = !0), c.hasStreams && (d.elementaryStreams = c.elementaryStreams), d.loader = c.loader, c.hasStats && (d.stats = c.stats), c.initSegment && (d.initSegment = c.initSegment, s = c.initSegment); }); const a = e.fragments, o = e.fragmentHint ? a.concat(e.fragmentHint) : a; if (s && o.forEach(c => { var d; c && (!c.initSegment || c.initSegment.relurl === ((d = s) == null ? void 0 : d.relurl)) && (c.initSegment = s); }), e.skippedSegments) {
    if (e.deltaUpdateFailed = a.some(c => !c), e.deltaUpdateFailed) {
        t.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
        for (let c = e.skippedSegments; c--;)
            a.shift();
        e.startSN = a[0].sn;
    }
    else {
        e.canSkipDateRanges && (e.dateRanges = i1(i.dateRanges, e, t));
        const c = i.fragments.filter(d => d.rawProgramDateTime);
        if (i.hasProgramDateTime && !e.hasProgramDateTime)
            for (let d = 1; d < o.length; d++)
                o[d].programDateTime === null && Cu(o[d], o[d - 1], c);
        np(c, e);
    }
    e.endCC = a[a.length - 1].cc;
} if (!e.startCC) {
    var l;
    const c = lp(i, e.startSN - 1);
    e.startCC = (l = c == null ? void 0 : c.cc) != null ? l : a[0].cc;
} s1(i.partList, e.partList, (c, d) => { d.elementaryStreams = c.elementaryStreams, d.stats = c.stats; }), r ? rp(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS, t) : ap(i, e), a.length && (e.totalduration = e.edge - a[0].start), e.driftStartTime = i.driftStartTime, e.driftStart = i.driftStart; const u = e.advancedDateTime; if (e.advanced && u) {
    const c = e.edge;
    e.driftStart || (e.driftStartTime = u, e.driftStart = c), e.driftEndTime = u, e.driftEnd = c;
}
else
    e.driftEndTime = i.driftEndTime, e.driftEnd = i.driftEnd, e.advancedDateTime = i.advancedDateTime; e.requestScheduled === -1 && (e.requestScheduled = i.requestScheduled); }
function i1(i, e, t) { const { dateRanges: s, recentlyRemovedDateranges: n } = e, r = ce({}, i); n && n.forEach(l => { delete r[l]; }); const o = Object.keys(r).length; return o ? (Object.keys(s).forEach(l => { const u = r[l], c = new Jg(s[l].attr, u); c.isValid ? (r[l] = c, u || (c.tagOrder += o)) : t.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${fe(s[l].attr)}"`); }), r) : s; }
function s1(i, e, t) { if (i && e) {
    let s = 0;
    for (let n = 0, r = i.length; n <= r; n++) {
        const a = i[n], o = e[n + s];
        a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? t(a, o) : s--;
    }
} }
function n1(i, e, t) { const s = e.skippedSegments, n = Math.max(i.startSN, e.startSN) - e.startSN, r = (i.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(i.endSN, e.endSN)) - e.startSN, a = e.startSN - i.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = i.fragmentHint ? i.fragments.concat(i.fragmentHint) : i.fragments; for (let u = n; u <= r; u++) {
    const c = l[a + u];
    let d = o[u];
    if (s && !d && c && (d = e.fragments[u] = c), c && d) {
        t(c, d, u, o);
        const h = c.relurl, f = d.relurl;
        if (h && r1(h, f)) {
            e.playlistParsingError = pf(`media sequence mismatch ${d.sn}:`, i, e, c, d);
            return;
        }
        else if (c.cc !== d.cc) {
            e.playlistParsingError = pf(`discontinuity sequence mismatch (${c.cc}!=${d.cc})`, i, e, c, d);
            return;
        }
    }
} }
function pf(i, e, t, s, n) {
    return new Error(`${i} ${n.url}
Playlist starting @${e.startSN}
${e.m3u8}

Playlist starting @${t.startSN}
${t.m3u8}`);
}
function ap(i, e, t = !0) { const s = e.startSN + e.skippedSegments - i.startSN, n = i.fragments, r = s >= 0; let a = 0; if (r && s < n.length)
    a = n[s].start;
else if (r && e.startSN === i.endSN + 1)
    a = i.fragmentEnd;
else if (r && t)
    a = i.fragmentStart + s * e.levelTargetDuration;
else if (!e.skippedSegments && e.fragmentStart === 0)
    a = i.fragmentStart;
else
    return; Du(e, a); }
function Du(i, e) { if (e) {
    const t = i.fragments;
    for (let s = i.skippedSegments; s < t.length; s++)
        t[s].addStart(e);
    i.fragmentHint && i.fragmentHint.addStart(e);
} }
function op(i, e = 1 / 0) { let t = 1e3 * i.targetduration; if (i.updated) {
    const s = i.fragments;
    if (s.length && t * 4 > e) {
        const r = s[s.length - 1].duration * 1e3;
        r < t && (t = r);
    }
}
else
    t /= 2; return Math.round(t); }
function lp(i, e, t) { if (!i)
    return null; let s = i.fragments[e - i.startSN]; return s || (s = i.fragmentHint, s && s.sn === e) ? s : e < i.startSN && t && t.sn === e ? t : null; }
function yf(i, e, t) { return i ? up(i.partList, e, t) : null; }
function up(i, e, t) { if (i)
    for (let s = i.length; s--;) {
        const n = i[s];
        if (n.index === t && n.fragment.sn === e)
            return n;
    } return null; }
function cp(i) { i.forEach((e, t) => { var s; (s = e.details) == null || s.fragments.forEach(n => { n.level = t, n.initSegment && (n.initSegment.level = t); }); }); }
function r1(i, e) { return i !== e && e ? vf(i) !== vf(e) : !1; }
function vf(i) { return i.replace(/\?[^?]*$/, ""); }
function Mn(i, e) { for (let s = 0, n = i.length; s < n; s++) {
    var t;
    if (((t = i[s]) == null ? void 0 : t.cc) === e)
        return i[s];
} return null; }
function a1(i, e) { return !!(i && e.startCC < i.endCC && e.endCC > i.startCC); }
function xf(i, e) { const t = i.start + e; i.startPTS = t, i.setStart(t), i.endPTS = t + i.duration; }
function dp(i, e) { const t = e.fragments; for (let s = 0, n = t.length; s < n; s++)
    xf(t[s], i); e.fragmentHint && xf(e.fragmentHint, i), e.alignedSliding = !0; }
function o1(i, e) { i && (hp(e, i), e.alignedSliding || so(e, i), !e.alignedSliding && !e.skippedSegments && ap(i, e, !1)); }
function hp(i, e) { if (!a1(e, i))
    return; const t = Math.min(e.endCC, i.endCC), s = Mn(e.fragments, t), n = Mn(i.fragments, t); if (!s || !n)
    return; le.log(`Aligning playlist at start of dicontinuity sequence ${t}`); const r = s.start - n.start; dp(r, i); }
function so(i, e) { if (!i.hasProgramDateTime || !e.hasProgramDateTime)
    return; const t = i.fragments, s = e.fragments; if (!t.length || !s.length)
    return; let n, r; const a = Math.min(e.endCC, i.endCC); e.startCC < a && i.startCC < a && (n = Mn(s, a), r = Mn(t, a)), (!n || !r) && (n = s[Math.floor(s.length / 2)], r = Mn(t, n.cc) || t[Math.floor(t.length / 2)]); const o = n.programDateTime, l = r.programDateTime; if (!o || !l)
    return; const u = (l - o) / 1e3 - (r.start - n.start); dp(u, i); }
function Xe(i, e, t) { nt(i, e, t), i.addEventListener(e, t); }
function nt(i, e, t) { i.removeEventListener(e, t); }
const l1 = { toString: function (i) { let e = ""; const t = i.length; for (let s = 0; s < t; s++)
        e += `[${i.start(s).toFixed(3)}-${i.end(s).toFixed(3)}]`; return e; } }, N = { STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS", WAITING_LEVEL: "WAITING_LEVEL" };
class Jc extends Xg {
    constructor(e, t, s, n, r) { super(n, e.logger), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = N.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.buffering = !0, this.loadingParts = !1, this.loopSn = void 0, this.onMediaSeeking = () => { const { config: a, fragCurrent: o, media: l, mediaBuffer: u, state: c } = this, d = l ? l.currentTime : 0, h = Z.bufferInfo(u || l, d, a.maxBufferHole), f = !h.len; if (this.log(`Media seeking to ${G(d) ? d.toFixed(3) : d}, state: ${c}, ${f ? "out of" : "in"} buffer`), this.state === N.ENDED)
        this.resetLoadingState();
    else if (o) {
        const m = a.maxFragLookUpTolerance, p = o.start - m, x = o.start + o.duration + m;
        if (f || x < h.start || p > h.end) {
            const y = d > x;
            (d < p || y) && (y && o.loader && (this.log(`Cancelling fragment load for seek (sn: ${o.sn})`), o.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
        }
    } if (l) {
        this.fragmentTracker.removeFragmentsInRange(d, 1 / 0, this.playlistType, !0);
        const m = this.lastCurrentTime;
        if (d > m && (this.lastCurrentTime = d), !this.loadingParts) {
            const p = Math.max(h.end, d), x = this.shouldLoadParts(this.getLevelDetails(), p);
            x && (this.log(`LL-Part loading ON after seeking to ${d.toFixed(2)} with buffer @${p.toFixed(2)}`), this.loadingParts = x);
        }
    } this.hls.hasEnoughToStart || (this.log(`Setting ${f ? "startPosition" : "nextLoadPosition"} to ${d} for seek without enough to start`), this.nextLoadPosition = d, f && (this.startPosition = d)), f && this.state === N.IDLE && this.tickImmediate(); }, this.onMediaEnded = () => { this.log("setting startPosition to 0 because media ended"), this.startPosition = this.lastCurrentTime = 0; }, this.playlistType = r, this.hls = e, this.fragmentLoader = new MT(e.config), this.keyLoader = s, this.fragmentTracker = t, this.config = e.config, this.decrypter = new qc(e.config); }
    registerListeners() { const { hls: e } = this; e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(S.ERROR, this.onError, this); }
    unregisterListeners() { const { hls: e } = this; e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(S.ERROR, this.onError, this); }
    doTick() { this.onTickEnd(); }
    onTickEnd() { }
    startLoad(e) { }
    stopLoad() { if (this.state === N.STOPPED)
        return; this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType); const e = this.fragCurrent; e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = N.STOPPED; }
    get startPositionValue() { const { nextLoadPosition: e, startPosition: t } = this; return t === -1 && e ? e : t; }
    get bufferingEnabled() { return this.buffering; }
    pauseBuffering() { this.buffering = !1; }
    resumeBuffering() { this.buffering = !0; }
    get inFlightFrag() { return { frag: this.fragCurrent, state: this.state }; }
    _streamEnded(e, t) { if (t.live || !this.media)
        return !1; const s = e.end || 0, n = this.config.timelineOffset || 0; if (s <= n)
        return !1; const r = e.buffered; this.config.maxBufferHole && r && r.length > 1 && (e = Z.bufferedInfo(r, e.start, 0)); const a = e.nextStart; if (a && a > n && a < t.edge || this.media.currentTime < e.start)
        return !1; const l = t.partList; if (l != null && l.length) {
        const c = l[l.length - 1];
        return Z.isBuffered(this.media, c.start + c.duration / 2);
    } const u = t.fragments[t.fragments.length - 1].type; return this.fragmentTracker.isEndListAppended(u); }
    getLevelDetails() { if (this.levels && this.levelLastLoaded !== null)
        return this.levelLastLoaded.details; }
    get timelineOffset() { const e = this.config.timelineOffset; if (e) {
        var t;
        return ((t = this.getLevelDetails()) == null ? void 0 : t.appliedTimelineOffset) || e;
    } return 0; }
    onMediaAttached(e, t) { const s = this.media = this.mediaBuffer = t.media; Xe(s, "seeking", this.onMediaSeeking), Xe(s, "ended", this.onMediaEnded); const n = this.config; this.levels && n.autoStartLoad && this.state === N.STOPPED && this.startLoad(n.startPosition); }
    onMediaDetaching(e, t) { const s = !!t.transferMedia, n = this.media; if (n !== null) {
        if (n.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), nt(n, "seeking", this.onMediaSeeking), nt(n, "ended", this.onMediaEnded), this.keyLoader && !s && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loopSn = void 0, s) {
            this.resetLoadingState(), this.resetTransmuxer();
            return;
        }
        this.loadingParts = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
    } }
    onManifestLoading() { this.initPTS = [], this.levels = this.levelLastLoaded = this.fragCurrent = null, this.lastCurrentTime = this.startPosition = 0, this.startFragRequested = !1; }
    onError(e, t) { }
    onManifestLoaded(e, t) { this.startTimeOffset = t.startTimeOffset; }
    onHandlerDestroying() { this.stopLoad(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), super.onHandlerDestroying(), this.hls = this.onMediaSeeking = this.onMediaEnded = null; }
    onHandlerDestroyed() { this.state = N.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed(); }
    loadFragment(e, t, s) { this.startFragRequested = !0, this._loadFragForPlayback(e, t, s); }
    _loadFragForPlayback(e, t, s) { const n = r => { const a = r.frag; if (this.fragContextChanged(a)) {
        this.warn(`${a.type} sn: ${a.sn}${r.part ? " part: " + r.part.index : ""} of ${this.fragInfo(a, !1, r.part)}) was dropped during download.`), this.fragmentTracker.removeFragment(a);
        return;
    } a.stats.chunkCount++, this._handleFragmentLoadProgress(r); }; this._doFragLoad(e, t, s, n).then(r => { if (!r)
        return; const a = this.state, o = r.frag; if (this.fragContextChanged(o)) {
        (a === N.FRAG_LOADING || !this.fragCurrent && a === N.PARSING) && (this.fragmentTracker.removeFragment(o), this.state = N.IDLE);
        return;
    } "payload" in r && (this.log(`Loaded ${o.type} sn: ${o.sn} of ${this.playlistLabel()} ${o.level}`), this.hls.trigger(S.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r); }).catch(r => { this.state === N.STOPPED || this.state === N.ERROR || (this.warn(`Frag error: ${(r == null ? void 0 : r.message) || r}`), this.resetFragmentLoading(e)); }); }
    clearTrackerIfNeeded(e) { var t; const { fragmentTracker: s } = this; if (s.getState(e) === Pe.APPENDING) {
        const r = e.type, a = this.getFwdBufferInfo(this.mediaBuffer, r), o = Math.max(e.duration, a ? a.len : this.config.maxBufferLength), l = this.backtrackFragment;
        ((l ? e.sn - l.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && s.removeFragment(e);
    }
    else
        ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(e.type) && (s.detectPartialFragments({ frag: e, part: null, stats: e.stats, id: e.type }), s.getState(e) === Pe.PARTIAL && s.removeFragment(e)); }
    checkLiveUpdate(e) { if (e.updated && !e.live) {
        const t = e.fragments[e.fragments.length - 1];
        this.fragmentTracker.detectPartialFragments({ frag: t, part: null, stats: t.stats, id: t.type });
    } e.fragments[0] || (e.deltaUpdateFailed = !0); }
    waitForLive(e) { const t = e.details; return (t == null ? void 0 : t.live) && t.type !== "EVENT" && (this.levelLastLoaded !== e || t.expired); }
    flushMainBuffer(e, t, s = null) { if (!(e - t))
        return; const n = { startOffset: e, endOffset: t, type: s }; this.hls.trigger(S.BUFFER_FLUSHING, n); }
    _loadInitSegment(e, t) { this._doFragLoad(e, t).then(s => { const n = s == null ? void 0 : s.frag; if (!n || this.fragContextChanged(n) || !this.levels)
        throw new Error("init load aborted"); return s; }).then(s => { const { hls: n } = this, { frag: r, payload: a } = s, o = r.decryptdata; if (a && a.byteLength > 0 && o != null && o.key && o.iv && zs(o.method)) {
        const l = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(a), o.key.buffer, o.iv.buffer, Xc(o.method)).catch(u => { throw n.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.FRAG_DECRYPT_ERROR, fatal: !1, error: u, reason: u.message, frag: r }), u; }).then(u => { const c = self.performance.now(); return n.trigger(S.FRAG_DECRYPTED, { frag: r, payload: u, stats: { tstart: l, tdecrypt: c } }), s.payload = u, this.completeInitSegmentLoad(s); });
    } return this.completeInitSegmentLoad(s); }).catch(s => { this.state === N.STOPPED || this.state === N.ERROR || (this.warn(s), this.resetFragmentLoading(e)); }); }
    completeInitSegmentLoad(e) { const { levels: t } = this; if (!t)
        throw new Error("init load aborted, missing levels"); const s = e.frag.stats; this.state !== N.STOPPED && (this.state = N.IDLE), e.frag.data = new Uint8Array(e.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick(); }
    unhandledEncryptionError(e, t) { var s, n; const r = e.tracks; if (r && !t.encrypted && ((s = r.audio) != null && s.encrypted || (n = r.video) != null && n.encrypted) && (!this.config.emeEnabled || !this.keyLoader.emeController)) {
        const a = this.media, o = new Error(`Encrypted track with no key in ${this.fragInfo(t)} (media ${a ? "attached mediaKeys: " + a.mediaKeys : "detached"})`);
        return this.warn(o.message), !a || a.mediaKeys ? !1 : (this.hls.trigger(S.ERROR, { type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_NO_KEYS, fatal: !1, error: o, frag: t }), this.resetTransmuxer(), !0);
    } return !1; }
    fragContextChanged(e) { const { fragCurrent: t } = this; return !e || !t || e.sn !== t.sn || e.level !== t.level; }
    fragBufferedComplete(e, t) { const s = this.mediaBuffer ? this.mediaBuffer : this.media; if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)} > buffer:${s ? l1.toString(Z.getBuffered(s)) : "(detached)"})`), be(e)) {
        var n;
        if (e.type !== z.SUBTITLE) {
            const a = e.elementaryStreams;
            if (!Object.keys(a).some(o => !!a[o])) {
                this.state = N.IDLE;
                return;
            }
        }
        const r = (n = this.levels) == null ? void 0 : n[e.level];
        r != null && r.fragmentError && (this.log(`Resetting level fragment error count of ${r.fragmentError} on frag buffered`), r.fragmentError = 0);
    } this.state = N.IDLE; }
    _handleFragmentLoadComplete(e) { const { transmuxer: t } = this; if (!t)
        return; const { frag: s, part: n, partsLoaded: r } = e, a = !r || r.length === 0 || r.some(l => !l), o = new Qc(s.level, s.sn, s.stats.chunkCount + 1, 0, n ? n.index : -1, !a); t.flush(o); }
    _handleFragmentLoadProgress(e) { }
    _doFragLoad(e, t, s = null, n) { var r; this.fragCurrent = e; const a = t.details; if (!this.levels || !a)
        throw new Error(`frag load aborted, missing level${a ? "" : " detail"}s`); let o = null; if (e.encrypted && !((r = e.decryptdata) != null && r.key)) {
        if (this.log(`Loading key for ${e.sn} of [${a.startSN}-${a.endSN}], ${this.playlistLabel()} ${e.level}`), this.state = N.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then(h => { if (!this.fragContextChanged(h.frag))
            return this.hls.trigger(S.KEY_LOADED, h), this.state === N.KEY_LOADING && (this.state = N.IDLE), h; }), this.hls.trigger(S.KEY_LOADING, { frag: e }), this.fragCurrent === null)
            return this.log("context changed in KEY_LOADING"), Promise.resolve(null);
    }
    else
        e.encrypted || (o = this.keyLoader.loadClear(e, a.encryptedFragments, this.startFragRequested), o && this.log("[eme] blocking frag load until media-keys acquired")); const l = this.fragPrevious; if (be(e) && (!l || e.sn !== l.sn)) {
        const h = this.shouldLoadParts(t.details, e.end);
        h !== this.loadingParts && (this.log(`LL-Part loading ${h ? "ON" : "OFF"} loading sn ${l == null ? void 0 : l.sn}->${e.sn}`), this.loadingParts = h);
    } if (s = Math.max(e.start, s || 0), this.loadingParts && be(e)) {
        const h = a.partList;
        if (h && n) {
            s > a.fragmentEnd && a.fragmentHint && (e = a.fragmentHint);
            const f = this.getNextPart(h, e, s);
            if (f > -1) {
                const m = h[f];
                e = this.fragCurrent = m.fragment, this.log(`Loading ${e.type} sn: ${e.sn} part: ${m.index} (${f}/${h.length - 1}) of ${this.fragInfo(e, !1, m)}) cc: ${e.cc} [${a.startSN}-${a.endSN}], target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = m.start + m.duration, this.state = N.FRAG_LOADING;
                let p;
                return o ? p = o.then(x => !x || this.fragContextChanged(x.frag) ? null : this.doFragPartsLoad(e, m, t, n)).catch(x => this.handleFragLoadError(x)) : p = this.doFragPartsLoad(e, m, t, n).catch(x => this.handleFragLoadError(x)), this.hls.trigger(S.FRAG_LOADING, { frag: e, part: m, targetBufferTime: s }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : p;
            }
            else if (!e.url || this.loadedEndOfParts(h, s))
                return Promise.resolve(null);
        }
    } if (be(e) && this.loadingParts) {
        var u;
        this.log(`LL-Part loading OFF after next part miss @${s.toFixed(2)} Check buffer at sn: ${e.sn} loaded parts: ${(u = a.partList) == null ? void 0 : u.filter(h => h.loaded).map(h => `[${h.start}-${h.end}]`)}`), this.loadingParts = !1;
    }
    else if (!e.url)
        return Promise.resolve(null); this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${"[" + a.startSN + "-" + a.endSN + "]"}, target: ${parseFloat(s.toFixed(3))}`), G(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = N.FRAG_LOADING; const c = this.config.progressive && e.type !== z.SUBTITLE; let d; return c && o ? d = o.then(h => !h || this.fragContextChanged(h.frag) ? null : this.fragmentLoader.load(e, n)).catch(h => this.handleFragLoadError(h)) : d = Promise.all([this.fragmentLoader.load(e, c ? n : void 0), o]).then(([h]) => (!c && n && n(h), h)).catch(h => this.handleFragLoadError(h)), this.hls.trigger(S.FRAG_LOADING, { frag: e, targetBufferTime: s }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : d; }
    doFragPartsLoad(e, t, s, n) { return new Promise((r, a) => { var o; const l = [], u = (o = s.details) == null ? void 0 : o.partList, c = d => { this.fragmentLoader.loadPart(e, d, n).then(h => { l[d.index] = h; const f = h.part; this.hls.trigger(S.FRAG_LOADED, h); const m = yf(s.details, e.sn, d.index + 1) || up(u, e.sn, d.index + 1); if (m)
        c(m);
    else
        return r({ frag: e, part: f, partsLoaded: l }); }).catch(a); }; c(t); }); }
    handleFragLoadError(e) { if ("data" in e) {
        const t = e.data;
        t.frag && t.details === k.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : t.frag && t.type === q.KEY_SYSTEM_ERROR ? (t.frag.abortRequests(), this.resetStartWhenNotLoaded(), this.resetFragmentLoading(t.frag)) : this.hls.trigger(S.ERROR, t);
    }
    else
        this.hls.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.INTERNAL_EXCEPTION, err: e, error: e, fatal: !0 }); return null; }
    _handleTransmuxerFlush(e) { const t = this.getCurrentContext(e); if (!t || this.state !== N.PARSING) {
        !this.fragCurrent && this.state !== N.STOPPED && this.state !== N.ERROR && (this.state = N.IDLE);
        return;
    } const { frag: s, part: n, level: r } = t, a = self.performance.now(); s.stats.parsing.end = a, n && (n.stats.parsing.end = a); const o = this.getLevelDetails(), u = o && s.sn > o.endSN || this.shouldLoadParts(o, s.end); u !== this.loadingParts && (this.log(`LL-Part loading ${u ? "ON" : "OFF"} after parsing segment ending @${s.end.toFixed(2)}`), this.loadingParts = u), this.updateLevelTiming(s, n, r, e.partial); }
    shouldLoadParts(e, t) { if (this.config.lowLatencyMode) {
        if (!e)
            return this.loadingParts;
        if (e.partList) {
            var s;
            const r = e.partList[0];
            if (r.fragment.type === z.SUBTITLE)
                return !1;
            const a = r.end + (((s = e.fragmentHint) == null ? void 0 : s.duration) || 0);
            if (t >= a) {
                var n;
                if ((this.hls.hasEnoughToStart ? ((n = this.media) == null ? void 0 : n.currentTime) || this.lastCurrentTime : this.getLoadPosition()) > r.start - r.fragment.duration)
                    return !0;
            }
        }
    } return !1; }
    getCurrentContext(e) { const { levels: t, fragCurrent: s } = this, { level: n, sn: r, part: a } = e; if (!(t != null && t[n]))
        return this.warn(`Levels object was unset while buffering fragment ${r} of ${this.playlistLabel()} ${n}. The current chunk will not be buffered.`), null; const o = t[n], l = o.details, u = a > -1 ? yf(l, r, a) : null, c = u ? u.fragment : lp(l, r, s); return c ? (s && s !== c && (c.stats = s.stats), { frag: c, part: u, level: o }) : null; }
    bufferFragmentData(e, t, s, n, r) { if (this.state !== N.PARSING)
        return; const { data1: a, data2: o } = e; let l = a; if (o && (l = wt(a, o)), !l.length)
        return; const u = this.initPTS[t.cc], c = u ? -u.baseTime / u.timescale : void 0, d = { type: e.type, frag: t, part: s, chunkMeta: n, offset: c, parent: t.type, data: l }; if (this.hls.trigger(S.BUFFER_APPENDING, d), e.dropped && e.independent && !s) {
        if (r)
            return;
        this.flushBufferGap(t);
    } }
    flushBufferGap(e) { const t = this.media; if (!t)
        return; if (!Z.isBuffered(t, t.currentTime)) {
        this.flushMainBuffer(0, e.start);
        return;
    } const s = t.currentTime, n = Z.bufferInfo(t, s, 0), r = e.duration, a = Math.min(this.config.maxFragLookUpTolerance * 2, r * .25), o = Math.max(Math.min(e.start - a, n.end - a), s + a); e.start - o > a && this.flushMainBuffer(o, e.start); }
    getFwdBufferInfo(e, t) { var s; const n = this.getLoadPosition(); if (!G(n))
        return null; const a = this.lastCurrentTime > n || (s = this.media) != null && s.paused ? 0 : this.config.maxBufferHole; return this.getFwdBufferInfoAtPos(e, n, t, a); }
    getFwdBufferInfoAtPos(e, t, s, n) { const r = Z.bufferInfo(e, t, n); if (r.len === 0 && r.nextStart !== void 0) {
        const a = this.fragmentTracker.getBufferedFrag(t, s);
        if (a && (r.nextStart <= a.end || a.gap)) {
            const o = Math.max(Math.min(r.nextStart, a.end) - t, n);
            return Z.bufferInfo(e, t, o);
        }
    } return r; }
    getMaxBufferLength(e) { const { config: t } = this; let s; return e ? s = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : s = t.maxBufferLength, Math.min(s, t.maxMaxBufferLength); }
    reduceMaxBufferLength(e, t) { const s = this.config, n = Math.max(Math.min(e - t, s.maxBufferLength), t), r = Math.max(e - t * 3, s.maxMaxBufferLength / 2, n); return r >= n ? (s.maxMaxBufferLength = r, this.warn(`Reduce max buffer length to ${r}s`), !0) : !1; }
    getAppendedFrag(e, t = z.MAIN) { const s = this.fragmentTracker ? this.fragmentTracker.getAppendedFrag(e, t) : null; return s && "fragment" in s ? s.fragment : s; }
    getNextFragment(e, t) { const s = t.fragments, n = s.length; if (!n)
        return null; const { config: r } = this, a = s[0].start, o = r.lowLatencyMode && !!t.partList; let l = null; if (t.live) {
        const d = r.initialLiveManifestSize;
        if (n < d)
            return this.warn(`Not enough fragments to start playback (have: ${n}, need: ${d})`), null;
        if (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < a) {
            var u;
            o && !this.loadingParts && (this.log("LL-Part loading ON for initial live fragment"), this.loadingParts = !0), l = this.getInitialLiveFragment(t);
            const h = this.hls.startPosition, f = this.hls.liveSyncPosition, m = l ? (h !== -1 && h >= a ? h : f) || l.start : e;
            this.log(`Setting startPosition to ${m} to match start frag at live edge. mainStart: ${h} liveSyncPosition: ${f} frag.start: ${(u = l) == null ? void 0 : u.start}`), this.startPosition = this.nextLoadPosition = m;
        }
    }
    else
        e <= a && (l = s[0]); if (!l) {
        const d = this.loadingParts ? t.partEnd : t.fragmentEnd;
        l = this.getFragmentAtPosition(e, d, t);
    } let c = this.filterReplacedPrimary(l, t); if (!c && l) {
        const d = l.sn - t.startSN;
        c = this.filterReplacedPrimary(s[d + 1] || null, t);
    } return this.mapToInitFragWhenRequired(c); }
    isLoopLoading(e, t) { const s = this.fragmentTracker.getState(e); return (s === Pe.OK || s === Pe.PARTIAL && !!e.gap) && this.nextLoadPosition > t; }
    getNextFragmentLoopLoading(e, t, s, n, r) { let a = null; if (e.gap && (a = this.getNextFragment(this.nextLoadPosition, t), a && !a.gap && s.nextStart)) {
        const o = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, n, 0);
        if (o !== null && s.len + o.len >= r) {
            const l = a.sn;
            return this.loopSn !== l && (this.log(`buffer full after gaps in "${n}" playlist starting at sn: ${l}`), this.loopSn = l), null;
        }
    } return this.loopSn = void 0, a; }
    get primaryPrefetch() { if (Ef(this.config)) {
        var e;
        if ((e = this.hls.interstitialsManager) == null || (e = e.playingItem) == null ? void 0 : e.event)
            return !0;
    } return !1; }
    filterReplacedPrimary(e, t) { if (!e)
        return e; if (Ef(this.config) && e.type !== z.SUBTITLE) {
        const s = this.hls.interstitialsManager, n = s == null ? void 0 : s.bufferingItem;
        if (n) {
            const a = n.event;
            if (a) {
                if (a.appendInPlace || Math.abs(e.start - n.start) > 1 || n.start === 0)
                    return null;
            }
            else if (e.end <= n.start && (t == null ? void 0 : t.live) === !1 || e.start > n.end && n.nextEvent && (n.nextEvent.appendInPlace || e.start - n.end > 1))
                return null;
        }
        const r = s == null ? void 0 : s.playerQueue;
        if (r)
            for (let a = r.length; a--;) {
                const o = r[a].interstitial;
                if (o.appendInPlace && e.start >= o.startTime && e.end <= o.resumeTime)
                    return null;
            }
    } return e; }
    mapToInitFragWhenRequired(e) { return e != null && e.initSegment && !e.initSegment.data && !this.bitrateTest ? e.initSegment : e; }
    getNextPart(e, t, s) { let n = -1, r = !1, a = !0; for (let o = 0, l = e.length; o < l; o++) {
        const u = e[o];
        if (a = a && !u.independent, n > -1 && s < u.start)
            break;
        const c = u.loaded;
        c ? n = -1 : (r || (u.independent || a) && u.fragment === t) && (u.fragment !== t && this.warn(`Need buffer at ${s} but next unloaded part starts at ${u.start}`), n = o), r = c;
    } return n; }
    loadedEndOfParts(e, t) { let s; for (let n = e.length; n--;) {
        if (s = e[n], !s.loaded)
            return !1;
        if (t > s.start)
            return !0;
    } return !1; }
    getInitialLiveFragment(e) { const t = e.fragments, s = this.fragPrevious; let n = null; if (s) {
        if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), n = IT(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !n) {
            const r = s.sn + 1;
            if (r >= e.startSN && r <= e.endSN) {
                const a = t[r - e.startSN];
                s.cc === a.cc && (n = a, this.log(`Live playlist, switching playlist, load frag with next SN: ${n.sn}`));
            }
            n || (n = Yg(e, s.cc, s.end), n && this.log(`Live playlist, switching playlist, load frag with same CC: ${n.sn}`));
        }
    }
    else {
        const r = this.hls.liveSyncPosition;
        r !== null && (n = this.getFragmentAtPosition(r, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    } return n; }
    getFragmentAtPosition(e, t, s) { const { config: n } = this; let { fragPrevious: r } = this, { fragments: a, endSN: o } = s; const { fragmentHint: l } = s, { maxFragLookUpTolerance: u } = n, c = s.partList, d = !!(this.loadingParts && c != null && c.length && l); d && !this.bitrateTest && c[c.length - 1].fragment.sn === l.sn && (a = a.concat(l), o = l.sn); let h; if (e < t) {
        var f;
        const p = e < this.lastCurrentTime || e > t - u || (f = this.media) != null && f.paused || !this.startFragRequested ? 0 : u;
        h = ms(r, a, e, p);
    }
    else
        h = a[a.length - 1]; if (h) {
        const m = h.sn - s.startSN, p = this.fragmentTracker.getState(h);
        if ((p === Pe.OK || p === Pe.PARTIAL && h.gap) && (r = h), r && h.sn === r.sn && (!d || c[0].fragment.sn > h.sn || !s.live) && h.level === r.level) {
            const y = a[m + 1];
            h.sn < o && this.fragmentTracker.getState(y) !== Pe.OK ? h = y : h = null;
        }
    } return h; }
    alignPlaylists(e, t, s) { const n = e.fragments.length; if (!n)
        return this.warn("No fragments in live playlist"), 0; const r = e.fragmentStart, a = !t, o = e.alignedSliding && G(r); if (a || !o && !r) {
        o1(s, e);
        const l = e.fragmentStart;
        return this.log(`Live playlist sliding: ${l.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} fragments: ${n}`), l;
    } return r; }
    waitForCdnTuneIn(e) { return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3); }
    setStartPosition(e, t) { let s = this.startPosition; s < t && (s = -1); const n = this.timelineOffset; if (s === -1) {
        const r = this.startTimeOffset !== null, a = r ? this.startTimeOffset : e.startTimeOffset;
        a !== null && G(a) ? (s = t + a, a < 0 && (s += e.edge), s = Math.min(Math.max(t, s), t + e.totalduration), this.log(`Setting startPosition to ${s} for start time offset ${a} found in ${r ? "multivariant" : "media"} playlist`), this.startPosition = s) : e.live ? (s = this.hls.liveSyncPosition || t, this.log(`Setting startPosition to -1 to start at live edge ${s}`), this.startPosition = -1) : (this.log("setting startPosition to 0 by default"), this.startPosition = s = 0), this.lastCurrentTime = s + n;
    } this.nextLoadPosition = s + n; }
    getLoadPosition() { var e; const { media: t } = this; let s = 0; return (e = this.hls) != null && e.hasEnoughToStart && t ? s = t.currentTime : this.nextLoadPosition >= 0 && (s = this.nextLoadPosition), s; }
    handleFragLoadAborted(e, t) { this.transmuxer && e.type === this.playlistType && be(e) && e.stats.aborted && (this.log(`Fragment ${e.sn}${t ? " part " + t.index : ""} of ${this.playlistLabel()} ${e.level} was aborted`), this.resetFragmentLoading(e)); }
    resetFragmentLoading(e) { (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== N.FRAG_LOADING_WAITING_RETRY) && (this.state = N.IDLE); }
    onFragmentOrKeyLoadError(e, t) { var s; if (t.chunkMeta && !t.frag) {
        const y = this.getCurrentContext(t.chunkMeta);
        y && (t.frag = y.frag);
    } const n = t.frag; if (!n || n.type !== e || !this.levels)
        return; if (this.fragContextChanged(n)) {
        var r;
        this.warn(`Frag load error must match current frag to retry ${n.url} > ${(r = this.fragCurrent) == null ? void 0 : r.url}`);
        return;
    } const a = t.details === k.FRAG_GAP; a && this.fragmentTracker.fragBuffered(n, !0); const o = t.errorAction; if (!o) {
        this.state = N.ERROR;
        return;
    } const { action: l, flags: u, retryCount: c = 0, retryConfig: d } = o, h = !!d, f = h && l === $e.RetryRequest, m = h && !o.resolved && u === ut.MoveAllAlternatesMatchingHost, p = (s = this.hls.latestLevelDetails) == null ? void 0 : s.live; if (!f && m && be(n) && !n.endList && p && !Qg(t))
        this.resetFragmentErrors(e), this.treatAsGap(n), o.resolved = !0;
    else if ((f || m) && c < d.maxNumRetry) {
        var x;
        const y = _u((x = t.response) == null ? void 0 : x.code), v = Yc(d, c);
        if (this.resetStartWhenNotLoaded(), this.retryDate = self.performance.now() + v, this.state = N.FRAG_LOADING_WAITING_RETRY, o.resolved = !0, y) {
            this.log("Waiting for connection (offline)"), this.retryDate = 1 / 0, t.reason = "offline";
            return;
        }
        this.warn(`Fragment ${n.sn} of ${e} ${n.level} errored with ${t.details}, retrying loading ${c + 1}/${d.maxNumRetry} in ${v}ms`);
    }
    else if (d)
        if (this.resetFragmentErrors(e), c < d.maxNumRetry)
            !a && l !== $e.RemoveAlternatePermanently && (o.resolved = !0);
        else {
            this.warn(`${t.details} reached or exceeded max retry (${c})`);
            return;
        }
    else
        l === $e.SendAlternateToPenaltyBox ? this.state = N.WAITING_LEVEL : this.state = N.ERROR; this.tickImmediate(); }
    checkRetryDate() { const e = self.performance.now(), t = this.retryDate, s = t === 1 / 0; (!t || e >= t || s && !_u(0)) && (s && this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), this.state = N.IDLE); }
    reduceLengthAndFlushBuffer(e) { if (this.state === N.PARSING || this.state === N.PARSED) {
        const t = e.frag, s = e.parent, n = this.getFwdBufferInfo(this.mediaBuffer, s), r = n && n.len > .5;
        r && this.reduceMaxBufferLength(n.len, (t == null ? void 0 : t.duration) || 10);
        const a = !r;
        return a && this.warn(`Buffer full error while media.currentTime (${this.getLoadPosition()}) is not buffered, flush ${s} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), a;
    } return !1; }
    resetFragmentErrors(e) { e === z.AUDIO && (this.fragCurrent = null), this.hls.hasEnoughToStart || (this.startFragRequested = !1), this.state !== N.STOPPED && (this.state = N.IDLE); }
    afterBufferFlushed(e, t, s) { if (!e)
        return; const n = Z.getBuffered(e); this.fragmentTracker.detectEvictedFragments(t, n, s), this.state === N.ENDED && this.resetLoadingState(); }
    resetLoadingState() { this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state !== N.STOPPED && (this.state = N.IDLE); }
    resetStartWhenNotLoaded() { if (!this.hls.hasEnoughToStart) {
        this.startFragRequested = !1;
        const e = this.levelLastLoaded, t = e ? e.details : null;
        t != null && t.live ? (this.log("resetting startPosition for live start"), this.startPosition = -1, this.setStartPosition(t, t.fragmentStart), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    } }
    resetWhenMissingContext(e) { this.log(`Loading context changed while buffering sn ${e.sn} of ${this.playlistLabel()} ${e.level === -1 ? "<removed>" : e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(), this.resetLoadingState(); }
    removeUnbufferedFrags(e = 0) { this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0); }
    updateLevelTiming(e, t, s, n) { const r = s.details; if (!r) {
        this.warn("level.details undefined");
        return;
    } if (!Object.keys(e.elementaryStreams).reduce((l, u) => { const c = e.elementaryStreams[u]; if (c) {
        const d = c.endPTS - c.startPTS;
        if (d <= 0)
            return this.warn(`Could not parse fragment ${e.sn} ${u} duration reliably (${d})`), l || !1;
        const h = n ? 0 : rp(r, e, c.startPTS, c.endPTS, c.startDTS, c.endDTS, this);
        return this.hls.trigger(S.LEVEL_PTS_UPDATED, { details: r, level: s, drift: h, type: u, frag: e, start: c.startPTS, end: c.endPTS }), !0;
    } return l; }, !1)) {
        var o;
        const l = ((o = this.transmuxer) == null ? void 0 : o.error) === null;
        if ((s.fragmentError === 0 || l && (s.fragmentError < 2 || e.endList)) && this.treatAsGap(e, s), l) {
            const u = new Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);
            if (this.warn(u.message), this.hls.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.FRAG_PARSING_ERROR, fatal: !1, error: u, frag: e, reason: `Found no media in msn ${e.sn} of ${this.playlistLabel()} "${s.url}"` }), !this.hls)
                return;
            this.resetTransmuxer();
        }
    } this.state = N.PARSED, this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)})`), this.hls.trigger(S.FRAG_PARSED, { frag: e, part: t }); }
    playlistLabel() { return this.playlistType === z.MAIN ? "level" : "track"; }
    fragInfo(e, t = !0, s) { var n, r; return `${this.playlistLabel()} ${e.level} (${s ? "part" : "frag"}:[${((n = t && !s ? e.startPTS : (s || e).start) != null ? n : NaN).toFixed(3)}-${((r = t && !s ? e.endPTS : (s || e).end) != null ? r : NaN).toFixed(3)}]${s && e.type === "main" ? "INDEPENDENT=" + (s.independent ? "YES" : "NO") : ""}`; }
    treatAsGap(e, t) { t && t.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0); }
    resetTransmuxer() { var e; (e = this.transmuxer) == null || e.reset(); }
    recoverWorkerError(e) { e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.resetStartWhenNotLoaded(), this.resetLoadingState()); }
    set state(e) { const t = this._state; t !== e && (this._state = e, this.log(`${t}->${e}`)); }
    get state() { return this._state; }
}
function Ef(i) { return !!i.interstitialsController && i.enableInterstitialPlayback !== !1; }
class fp {
    constructor() { this.chunks = [], this.dataLength = 0; }
    push(e) { this.chunks.push(e), this.dataLength += e.length; }
    flush() { const { chunks: e, dataLength: t } = this; let s; if (e.length)
        e.length === 1 ? s = e[0] : s = u1(e, t);
    else
        return new Uint8Array(0); return this.reset(), s; }
    reset() { this.chunks.length = 0, this.dataLength = 0; }
}
function u1(i, e) { const t = new Uint8Array(e); let s = 0; for (let n = 0; n < i.length; n++) {
    const r = i[n];
    t.set(r, s), s += r.length;
} return t; }
var hl = { exports: {} }, Sf;
function c1() { return Sf || (Sf = 1, function (i) { var e = Object.prototype.hasOwnProperty, t = "~"; function s() { } Object.create && (s.prototype = Object.create(null), new s().__proto__ || (t = !1)); function n(l, u, c) { this.fn = l, this.context = u, this.once = c || !1; } function r(l, u, c, d, h) { if (typeof c != "function")
    throw new TypeError("The listener must be a function"); var f = new n(c, d || l, h), m = t ? t + u : u; return l._events[m] ? l._events[m].fn ? l._events[m] = [l._events[m], f] : l._events[m].push(f) : (l._events[m] = f, l._eventsCount++), l; } function a(l, u) { --l._eventsCount === 0 ? l._events = new s : delete l._events[u]; } function o() { this._events = new s, this._eventsCount = 0; } o.prototype.eventNames = function () { var u = [], c, d; if (this._eventsCount === 0)
    return u; for (d in c = this._events)
    e.call(c, d) && u.push(t ? d.slice(1) : d); return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(c)) : u; }, o.prototype.listeners = function (u) { var c = t ? t + u : u, d = this._events[c]; if (!d)
    return []; if (d.fn)
    return [d.fn]; for (var h = 0, f = d.length, m = new Array(f); h < f; h++)
    m[h] = d[h].fn; return m; }, o.prototype.listenerCount = function (u) { var c = t ? t + u : u, d = this._events[c]; return d ? d.fn ? 1 : d.length : 0; }, o.prototype.emit = function (u, c, d, h, f, m) { var p = t ? t + u : u; if (!this._events[p])
    return !1; var x = this._events[p], y = arguments.length, v, E; if (x.fn) {
    switch (x.once && this.removeListener(u, x.fn, void 0, !0), y) {
        case 1: return x.fn.call(x.context), !0;
        case 2: return x.fn.call(x.context, c), !0;
        case 3: return x.fn.call(x.context, c, d), !0;
        case 4: return x.fn.call(x.context, c, d, h), !0;
        case 5: return x.fn.call(x.context, c, d, h, f), !0;
        case 6: return x.fn.call(x.context, c, d, h, f, m), !0;
    }
    for (E = 1, v = new Array(y - 1); E < y; E++)
        v[E - 1] = arguments[E];
    x.fn.apply(x.context, v);
}
else {
    var T = x.length, L;
    for (E = 0; E < T; E++)
        switch (x[E].once && this.removeListener(u, x[E].fn, void 0, !0), y) {
            case 1:
                x[E].fn.call(x[E].context);
                break;
            case 2:
                x[E].fn.call(x[E].context, c);
                break;
            case 3:
                x[E].fn.call(x[E].context, c, d);
                break;
            case 4:
                x[E].fn.call(x[E].context, c, d, h);
                break;
            default:
                if (!v)
                    for (L = 1, v = new Array(y - 1); L < y; L++)
                        v[L - 1] = arguments[L];
                x[E].fn.apply(x[E].context, v);
        }
} return !0; }, o.prototype.on = function (u, c, d) { return r(this, u, c, d, !1); }, o.prototype.once = function (u, c, d) { return r(this, u, c, d, !0); }, o.prototype.removeListener = function (u, c, d, h) { var f = t ? t + u : u; if (!this._events[f])
    return this; if (!c)
    return a(this, f), this; var m = this._events[f]; if (m.fn)
    m.fn === c && (!h || m.once) && (!d || m.context === d) && a(this, f);
else {
    for (var p = 0, x = [], y = m.length; p < y; p++)
        (m[p].fn !== c || h && !m[p].once || d && m[p].context !== d) && x.push(m[p]);
    x.length ? this._events[f] = x.length === 1 ? x[0] : x : a(this, f);
} return this; }, o.prototype.removeAllListeners = function (u) { var c; return u ? (c = t ? t + u : u, this._events[c] && a(this, c)) : (this._events = new s, this._eventsCount = 0), this; }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, i.exports = o; }(hl)), hl.exports; }
var d1 = c1(), ed = MS(d1);
const lr = "1.6.15", nn = {};
function h1() { return typeof __HLS_WORKER_BUNDLE__ == "function"; }
function f1() { const i = nn[lr]; if (i)
    return i.clientCount++, i; const e = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], { type: "text/javascript" }), t = self.URL.createObjectURL(e), n = { worker: new self.Worker(t), objectURL: t, clientCount: 1 }; return nn[lr] = n, n; }
function m1(i) { const e = nn[i]; if (e)
    return e.clientCount++, e; const t = new self.URL(i, self.location.href).href, n = { worker: new self.Worker(t), scriptURL: t, clientCount: 1 }; return nn[i] = n, n; }
function g1(i) { const e = nn[i || lr]; if (e && e.clientCount-- === 1) {
    const { worker: s, objectURL: n } = e;
    delete nn[i || lr], n && self.URL.revokeObjectURL(n), s.terminate();
} }
function mp(i, e) { return e + 10 <= i.length && i[e] === 51 && i[e + 1] === 68 && i[e + 2] === 73 && i[e + 3] < 255 && i[e + 4] < 255 && i[e + 6] < 128 && i[e + 7] < 128 && i[e + 8] < 128 && i[e + 9] < 128; }
function td(i, e) { return e + 10 <= i.length && i[e] === 73 && i[e + 1] === 68 && i[e + 2] === 51 && i[e + 3] < 255 && i[e + 4] < 255 && i[e + 6] < 128 && i[e + 7] < 128 && i[e + 8] < 128 && i[e + 9] < 128; }
function Ro(i, e) { let t = 0; return t = (i[e] & 127) << 21, t |= (i[e + 1] & 127) << 14, t |= (i[e + 2] & 127) << 7, t |= i[e + 3] & 127, t; }
function ur(i, e) { const t = e; let s = 0; for (; td(i, e);) {
    s += 10;
    const n = Ro(i, e + 6);
    s += n, mp(i, e + 10) && (s += 10), e += s;
} if (s > 0)
    return i.subarray(t, t + s); }
function p1(i, e, t, s) { const n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], r = e[t + 2], a = r >> 2 & 15; if (a > 12) {
    const f = new Error(`invalid ADTS sampling index:${a}`);
    i.emit(S.ERROR, S.ERROR, { type: q.MEDIA_ERROR, details: k.FRAG_PARSING_ERROR, fatal: !0, error: f, reason: f.message });
    return;
} const o = (r >> 6 & 3) + 1, l = e[t + 3] >> 6 & 3 | (r & 1) << 2, u = "mp4a.40." + o, c = n[a]; let d = a; (o === 5 || o === 29) && (d -= 3); const h = [o << 3 | (d & 14) >> 1, (d & 1) << 7 | l << 3]; return le.log(`manifest codec:${s}, parsed codec:${u}, channels:${l}, rate:${c} (ADTS object type:${o} sampling index:${a})`), { config: h, samplerate: c, channelCount: l, codec: u, parsedCodec: u, manifestCodec: s }; }
function gp(i, e) { return i[e] === 255 && (i[e + 1] & 246) === 240; }
function pp(i, e) { return i[e + 1] & 1 ? 7 : 9; }
function id(i, e) { return (i[e + 3] & 3) << 11 | i[e + 4] << 3 | (i[e + 5] & 224) >>> 5; }
function y1(i, e) { return e + 5 < i.length; }
function no(i, e) { return e + 1 < i.length && gp(i, e); }
function v1(i, e) { return y1(i, e) && gp(i, e) && id(i, e) <= i.length - e; }
function x1(i, e) { if (no(i, e)) {
    const t = pp(i, e);
    if (e + t >= i.length)
        return !1;
    const s = id(i, e);
    if (s <= t)
        return !1;
    const n = e + s;
    return n === i.length || no(i, n);
} return !1; }
function yp(i, e, t, s, n) { if (!i.samplerate) {
    const r = p1(e, t, s, n);
    if (!r)
        return;
    ce(i, r);
} }
function vp(i) { return 1024 * 9e4 / i; }
function E1(i, e) { const t = pp(i, e); if (e + t <= i.length) {
    const s = id(i, e) - t;
    if (s > 0)
        return { headerLength: t, frameLength: s };
} }
function xp(i, e, t, s, n) { const r = vp(i.samplerate), a = s + n * r, o = E1(e, t); let l; if (o) {
    const { frameLength: d, headerLength: h } = o, f = h + d, m = Math.max(0, t + f - e.length);
    m ? (l = new Uint8Array(f - h), l.set(e.subarray(t + h, e.length), 0)) : l = e.subarray(t + h, t + f);
    const p = { unit: l, pts: a };
    return m || i.samples.push(p), { sample: p, length: f, missing: m };
} const u = e.length - t; return l = new Uint8Array(u), l.set(e.subarray(t, e.length), 0), { sample: { unit: l, pts: a }, length: u, missing: -1 }; }
function S1(i, e) { return td(i, e) && Ro(i, e + 6) + 10 <= i.length - e; }
function T1(i) { return i instanceof ArrayBuffer ? i : i.byteOffset == 0 && i.byteLength == i.buffer.byteLength ? i.buffer : new Uint8Array(i).buffer; }
function fl(i, e = 0, t = 1 / 0) { return L1(i, e, t, Uint8Array); }
function L1(i, e, t, s) { const n = I1(i); let r = 1; "BYTES_PER_ELEMENT" in s && (r = s.BYTES_PER_ELEMENT); const a = A1(i) ? i.byteOffset : 0, o = (a + i.byteLength) / r, l = (a + e) / r, u = Math.floor(Math.max(0, Math.min(l, o))), c = Math.floor(Math.min(u + Math.max(t, 0), o)); return new s(n, u, c - u); }
function I1(i) { return i instanceof ArrayBuffer ? i : i.buffer; }
function A1(i) { return i && i.buffer instanceof ArrayBuffer && i.byteLength !== void 0 && i.byteOffset !== void 0; }
function R1(i) { const e = { key: i.type, description: "", data: "", mimeType: null, pictureType: null }, t = 3; if (i.size < 2)
    return; if (i.data[0] !== t) {
    console.log("Ignore frame with unrecognized character encoding");
    return;
} const s = i.data.subarray(1).indexOf(0); if (s === -1)
    return; const n = gt(fl(i.data, 1, s)), r = i.data[2 + s], a = i.data.subarray(3 + s).indexOf(0); if (a === -1)
    return; const o = gt(fl(i.data, 3 + s, a)); let l; return n === "-->" ? l = gt(fl(i.data, 4 + s + a)) : l = T1(i.data.subarray(4 + s + a)), e.mimeType = n, e.pictureType = r, e.description = o, e.data = l, e; }
function w1(i) { if (i.size < 2)
    return; const e = gt(i.data, !0), t = new Uint8Array(i.data.subarray(e.length + 1)); return { key: i.type, info: e, data: t.buffer }; }
function _1(i) { if (i.size < 2)
    return; if (i.type === "TXXX") {
    let t = 1;
    const s = gt(i.data.subarray(t), !0);
    t += s.length + 1;
    const n = gt(i.data.subarray(t));
    return { key: i.type, info: s, data: n };
} const e = gt(i.data.subarray(1)); return { key: i.type, info: "", data: e }; }
function b1(i) { if (i.type === "WXXX") {
    if (i.size < 2)
        return;
    let t = 1;
    const s = gt(i.data.subarray(t), !0);
    t += s.length + 1;
    const n = gt(i.data.subarray(t));
    return { key: i.type, info: s, data: n };
} const e = gt(i.data); return { key: i.type, info: "", data: e }; }
function k1(i) { return i.type === "PRIV" ? w1(i) : i.type[0] === "W" ? b1(i) : i.type === "APIC" ? R1(i) : _1(i); }
function C1(i) { const e = String.fromCharCode(i[0], i[1], i[2], i[3]), t = Ro(i, 4), s = 10; return { type: e, size: t, data: i.subarray(s, s + t) }; }
const Kr = 10, D1 = 10;
function Ep(i) { let e = 0; const t = []; for (; td(i, e);) {
    const s = Ro(i, e + 6);
    i[e + 5] >> 6 & 1 && (e += Kr), e += Kr;
    const n = e + s;
    for (; e + D1 < n;) {
        const r = C1(i.subarray(e)), a = k1(r);
        a && t.push(a), e += r.size + Kr;
    }
    mp(i, e) && (e += Kr);
} return t; }
function Sp(i) { return i && i.key === "PRIV" && i.info === "com.apple.streaming.transportStreamTimestamp"; }
function P1(i) { if (i.data.byteLength === 8) {
    const e = new Uint8Array(i.data), t = e[3] & 1;
    let s = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return s /= 45, t && (s += 4772185884e-2), Math.round(s);
} }
function sd(i) { const e = Ep(i); for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (Sp(s))
        return P1(s);
} }
let ht = function (i) { return i.audioId3 = "org.id3", i.dateRange = "com.apple.quicktime.HLS", i.emsg = "https://aomedia.org/emsg/ID3", i.misbklv = "urn:misb:KLV:bin:1910.1", i; }({});
function Yt(i = "", e = 9e4) { return { type: i, id: -1, pid: -1, inputTimeScale: e, sequenceNumber: -1, samples: [], dropped: 0 }; }
class nd {
    constructor() { this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null; }
    resetInitSegment(e, t, s, n) { this._id3Track = { type: "id3", id: 3, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 }; }
    resetTimeStamp(e) { this.initPTS = e, this.resetContiguity(); }
    resetContiguity() { this.basePTS = null, this.lastPTS = null, this.frameIndex = 0; }
    canParse(e, t) { return !1; }
    appendFrame(e, t, s) { }
    demux(e, t) { this.cachedData && (e = wt(this.cachedData, e), this.cachedData = null); let s = ur(e, 0), n = s ? s.length : 0, r; const a = this._audioTrack, o = this._id3Track, l = s ? sd(s) : void 0, u = e.length; for ((this.basePTS === null || this.frameIndex === 0 && G(l)) && (this.basePTS = N1(l, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: s, type: ht.audioId3, duration: Number.POSITIVE_INFINITY }); n < u;) {
        if (this.canParse(e, n)) {
            const c = this.appendFrame(a, e, n);
            c ? (this.frameIndex++, this.lastPTS = c.sample.pts, n += c.length, r = n) : n = u;
        }
        else
            S1(e, n) ? (s = ur(e, n), o.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: s, type: ht.audioId3, duration: Number.POSITIVE_INFINITY }), n += s.length, r = n) : n++;
        if (n === u && r !== u) {
            const c = e.slice(r);
            this.cachedData ? this.cachedData = wt(this.cachedData, c) : this.cachedData = c;
        }
    } return { audioTrack: a, videoTrack: Yt(), id3Track: o, textTrack: Yt() }; }
    demuxSampleAes(e, t, s) { return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`)); }
    flush(e) { const t = this.cachedData; return t && (this.cachedData = null, this.demux(t, 0)), { audioTrack: this._audioTrack, videoTrack: Yt(), id3Track: this._id3Track, textTrack: Yt() }; }
    destroy() { this.cachedData = null, this._audioTrack = this._id3Track = void 0; }
}
const N1 = (i, e, t) => { if (G(i))
    return i * 90; const s = t ? t.baseTime * 9e4 / t.timescale : 0; return e * 9e4 + s; };
let Hr = null;
const O1 = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], M1 = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], F1 = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], U1 = [0, 1, 1, 4];
function Tp(i, e, t, s, n) { if (t + 24 > e.length)
    return; const r = Lp(e, t); if (r && t + r.frameLength <= e.length) {
    const a = r.samplesPerFrame * 9e4 / r.sampleRate, o = s + n * a, l = { unit: e.subarray(t, t + r.frameLength), pts: o, dts: o };
    return i.config = [], i.channelCount = r.channelCount, i.samplerate = r.sampleRate, i.samples.push(l), { sample: l, length: r.frameLength, missing: 0 };
} }
function Lp(i, e) { const t = i[e + 1] >> 3 & 3, s = i[e + 1] >> 1 & 3, n = i[e + 2] >> 4 & 15, r = i[e + 2] >> 2 & 3; if (t !== 1 && n !== 0 && n !== 15 && r !== 3) {
    const a = i[e + 2] >> 1 & 1, o = i[e + 3] >> 6, l = t === 3 ? 3 - s : s === 3 ? 3 : 4, u = O1[l * 14 + n - 1] * 1e3, d = M1[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + r], h = o === 3 ? 1 : 2, f = F1[t][s], m = U1[s], p = f * 8 * m, x = Math.floor(f * u / d + a) * m;
    if (Hr === null) {
        const E = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
        Hr = E ? parseInt(E[1]) : 0;
    }
    return !!Hr && Hr <= 87 && s === 2 && u >= 224e3 && o === 0 && (i[e + 3] = i[e + 3] | 128), { sampleRate: d, channelCount: h, frameLength: x, samplesPerFrame: p };
} }
function rd(i, e) { return i[e] === 255 && (i[e + 1] & 224) === 224 && (i[e + 1] & 6) !== 0; }
function Ip(i, e) { return e + 1 < i.length && rd(i, e); }
function B1(i, e) { return rd(i, e) && 4 <= i.length - e; }
function Ap(i, e) { if (e + 1 < i.length && rd(i, e)) {
    const s = Lp(i, e);
    let n = 4;
    s != null && s.frameLength && (n = s.frameLength);
    const r = e + n;
    return r === i.length || Ip(i, r);
} return !1; }
class $1 extends nd {
    constructor(e, t) { super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t; }
    resetInitSegment(e, t, s, n) { super.resetInitSegment(e, t, s, n), this._audioTrack = { container: "audio/adts", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "aac", samples: [], manifestCodec: t, duration: n, inputTimeScale: 9e4, dropped: 0 }; }
    static probe(e, t) { if (!e)
        return !1; const s = ur(e, 0); let n = (s == null ? void 0 : s.length) || 0; if (Ap(e, n))
        return !1; for (let r = e.length; n < r; n++)
        if (x1(e, n))
            return t.log("ADTS sync word found !"), !0; return !1; }
    canParse(e, t) { return v1(e, t); }
    appendFrame(e, t, s) { yp(e, this.observer, t, s, e.manifestCodec); const n = xp(e, t, s, this.basePTS, this.frameIndex); if (n && n.missing === 0)
        return n; }
}
const Rp = (i, e) => { let t = 0, s = 5; e += s; const n = new Uint32Array(1), r = new Uint32Array(1), a = new Uint8Array(1); for (; s > 0;) {
    a[0] = i[e];
    const o = Math.min(s, 8), l = 8 - o;
    r[0] = 4278190080 >>> 24 + l << l, n[0] = (a[0] & r[0]) >> l, t = t ? t << o | n[0] : n[0], e += 1, s -= o;
} return t; };
class j1 extends nd {
    constructor(e) { super(), this.observer = void 0, this.observer = e; }
    resetInitSegment(e, t, s, n) { super.resetInitSegment(e, t, s, n), this._audioTrack = { container: "audio/ac-3", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "ac3", samples: [], manifestCodec: t, duration: n, inputTimeScale: 9e4, dropped: 0 }; }
    canParse(e, t) { return t + 64 < e.length; }
    appendFrame(e, t, s) { const n = wp(e, t, s, this.basePTS, this.frameIndex); if (n !== -1)
        return { sample: e.samples[e.samples.length - 1], length: n, missing: 0 }; }
    static probe(e) { if (!e)
        return !1; const t = ur(e, 0); if (!t)
        return !1; const s = t.length; return e[s] === 11 && e[s + 1] === 119 && sd(t) !== void 0 && Rp(e, s) < 16; }
}
function wp(i, e, t, s, n) { if (t + 8 > e.length || e[t] !== 11 || e[t + 1] !== 119)
    return -1; const r = e[t + 4] >> 6; if (r >= 3)
    return -1; const o = [48e3, 44100, 32e3][r], l = e[t + 4] & 63, c = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][l * 3 + r] * 2; if (t + c > e.length)
    return -1; const d = e[t + 6] >> 5; let h = 0; d === 2 ? h += 2 : (d & 1 && d !== 1 && (h += 2), d & 4 && (h += 2)); const f = (e[t + 6] << 8 | e[t + 7]) >> 12 - h & 1, p = [2, 1, 2, 3, 3, 4, 4, 5][d] + f, x = e[t + 5] >> 3, y = e[t + 5] & 7, v = new Uint8Array([r << 6 | x << 1 | y >> 2, (y & 3) << 6 | d << 3 | f << 2 | l >> 4, l << 4 & 224]), E = 1536 / o * 9e4, T = s + n * E, L = e.subarray(t, t + c); return i.config = v, i.channelCount = p, i.samplerate = o, i.samples.push({ unit: L, pts: T }), c; }
class G1 extends nd {
    resetInitSegment(e, t, s, n) { super.resetInitSegment(e, t, s, n), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "mp3", samples: [], manifestCodec: t, duration: n, inputTimeScale: 9e4, dropped: 0 }; }
    static probe(e) { if (!e)
        return !1; const t = ur(e, 0); let s = (t == null ? void 0 : t.length) || 0; if (t && e[s] === 11 && e[s + 1] === 119 && sd(t) !== void 0 && Rp(e, s) <= 16)
        return !1; for (let n = e.length; s < n; s++)
        if (Ap(e, s))
            return le.log("MPEG Audio sync word found !"), !0; return !1; }
    canParse(e, t) { return B1(e, t); }
    appendFrame(e, t, s) { if (this.basePTS !== null)
        return Tp(e, t, s, this.basePTS, this.frameIndex); }
}
const V1 = /\/emsg[-/]ID3/i;
class K1 {
    constructor(e, t) { this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t; }
    resetTimeStamp() { }
    resetInitSegment(e, t, s, n) { const r = this.videoTrack = Yt("video", 1), a = this.audioTrack = Yt("audio", 1), o = this.txtTrack = Yt("text", 1); if (this.id3Track = Yt("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
        return; const l = Fg(e); if (l.video) {
        const { id: u, timescale: c, codec: d, supplemental: h } = l.video;
        r.id = u, r.timescale = o.timescale = c, r.codec = d, r.supplemental = h;
    } if (l.audio) {
        const { id: u, timescale: c, codec: d } = l.audio;
        a.id = u, a.timescale = c, a.codec = d;
    } o.id = Ng.text, r.sampleDuration = 0, r.duration = a.duration = n; }
    resetContiguity() { this.remainderData = null; }
    static probe(e) { return jS(e); }
    demux(e, t) { this.timeOffset = t; let s = e; const n = this.videoTrack, r = this.txtTrack; if (this.config.progressive) {
        this.remainderData && (s = wt(this.remainderData, e));
        const o = YS(s);
        this.remainderData = o.remainder, n.samples = o.valid || new Uint8Array;
    }
    else
        n.samples = s; const a = this.extractID3Track(n, t); return r.samples = Uh(t, n), { videoTrack: n, audioTrack: this.audioTrack, id3Track: a, textTrack: this.txtTrack }; }
    flush() { const e = this.timeOffset, t = this.videoTrack, s = this.txtTrack; t.samples = this.remainderData || new Uint8Array, this.remainderData = null; const n = this.extractID3Track(t, this.timeOffset); return s.samples = Uh(e, t), { videoTrack: t, audioTrack: Yt(), id3Track: n, textTrack: Yt() }; }
    extractID3Track(e, t) { const s = this.id3Track; if (e.samples.length) {
        const n = te(e.samples, ["emsg"]);
        n && n.forEach(r => { const a = QS(r); if (V1.test(a.schemeIdUri)) {
            const o = Tf(a, t);
            let l = a.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : a.eventDuration / a.timeScale;
            l <= .001 && (l = Number.POSITIVE_INFINITY);
            const u = a.payload;
            s.samples.push({ data: u, len: u.byteLength, dts: o, pts: o, type: ht.emsg, duration: l });
        }
        else if (this.config.enableEmsgKLVMetadata && a.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")) {
            const o = Tf(a, t);
            s.samples.push({ data: a.payload, len: a.payload.byteLength, dts: o, pts: o, type: ht.misbklv, duration: Number.POSITIVE_INFINITY });
        } });
    } return s; }
    demuxSampleAes(e, t, s) { return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption")); }
    destroy() { this.config = null, this.remainderData = null, this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0; }
}
function Tf(i, e) { return G(i.presentationTime) ? i.presentationTime / i.timeScale : e + i.presentationTimeDelta / i.timeScale; }
class H1 {
    constructor(e, t, s) { this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new qc(t, { removePKCS7Padding: !1 }); }
    decryptBuffer(e) { return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, Ki.cbc); }
    decryptAacSample(e, t, s) { const n = e[t].unit; if (n.length <= 16)
        return; const r = n.subarray(16, n.length - n.length % 16), a = r.buffer.slice(r.byteOffset, r.byteOffset + r.length); this.decryptBuffer(a).then(o => { const l = new Uint8Array(o); n.set(l, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, s); }).catch(s); }
    decryptAacSamples(e, t, s) { for (;; t++) {
        if (t >= e.length) {
            s();
            return;
        }
        if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, s), !this.decrypter.isSync()))
            return;
    } }
    getAvcEncryptedData(e) { const t = Math.floor((e.length - 48) / 160) * 16 + 16, s = new Int8Array(t); let n = 0; for (let r = 32; r < e.length - 16; r += 160, n += 16)
        s.set(e.subarray(r, r + 16), n); return s; }
    getAvcDecryptedUnit(e, t) { const s = new Uint8Array(t); let n = 0; for (let r = 32; r < e.length - 16; r += 160, n += 16)
        e.set(s.subarray(n, n + 16), r); return e; }
    decryptAvcSample(e, t, s, n, r) { const a = $g(r.data), o = this.getAvcEncryptedData(a); this.decryptBuffer(o.buffer).then(l => { r.data = this.getAvcDecryptedUnit(a, l), this.decrypter.isSync() || this.decryptAvcSamples(e, t, s + 1, n); }).catch(n); }
    decryptAvcSamples(e, t, s, n) { if (e instanceof Uint8Array)
        throw new Error("Cannot decrypt samples of type Uint8Array"); for (;; t++, s = 0) {
        if (t >= e.length) {
            n();
            return;
        }
        const r = e[t].units;
        for (; !(s >= r.length); s++) {
            const a = r[s];
            if (!(a.data.length <= 48 || a.type !== 1 && a.type !== 5) && (this.decryptAvcSample(e, t, s, n, a), !this.decrypter.isSync()))
                return;
        }
    } }
}
class _p {
    constructor() { this.VideoSample = null; }
    createVideoSample(e, t, s) { return { key: e, frame: !1, pts: t, dts: s, units: [], length: 0 }; }
    getLastNalUnit(e) { var t; let s = this.VideoSample, n; if ((!s || s.units.length === 0) && (s = e[e.length - 1]), (t = s) != null && t.units) {
        const r = s.units;
        n = r[r.length - 1];
    } return n; }
    pushAccessUnit(e, t) { if (e.units.length && e.frame) {
        if (e.pts === void 0) {
            const s = t.samples, n = s.length;
            if (n) {
                const r = s[n - 1];
                e.pts = r.pts, e.dts = r.dts;
            }
            else {
                t.dropped++;
                return;
            }
        }
        t.samples.push(e);
    } }
    parseNALu(e, t, s) { const n = t.byteLength; let r = e.naluState || 0; const a = r, o = []; let l = 0, u, c, d, h = -1, f = 0; for (r === -1 && (h = 0, f = this.getNALuType(t, 0), r = 0, l = 1); l < n;) {
        if (u = t[l++], !r) {
            r = u ? 0 : 1;
            continue;
        }
        if (r === 1) {
            r = u ? 0 : 2;
            continue;
        }
        if (!u)
            r = 3;
        else if (u === 1) {
            if (c = l - r - 1, h >= 0) {
                const m = { data: t.subarray(h, c), type: f };
                o.push(m);
            }
            else {
                const m = this.getLastNalUnit(e.samples);
                m && (a && l <= 4 - a && m.state && (m.data = m.data.subarray(0, m.data.byteLength - a)), c > 0 && (m.data = wt(m.data, t.subarray(0, c)), m.state = 0));
            }
            l < n ? (d = this.getNALuType(t, l), h = l, f = d, r = 0) : r = -1;
        }
        else
            r = 0;
    } if (h >= 0 && r >= 0) {
        const m = { data: t.subarray(h, n), type: f, state: r };
        o.push(m);
    } if (o.length === 0) {
        const m = this.getLastNalUnit(e.samples);
        m && (m.data = wt(m.data, t));
    } return e.naluState = r, o; }
}
class Fn {
    constructor(e) { this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0; }
    loadWord() { const e = this.data, t = this.bytesAvailable, s = e.byteLength - t, n = new Uint8Array(4), r = Math.min(4, t); if (r === 0)
        throw new Error("no bytes available"); n.set(e.subarray(s, s + r)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = r * 8, this.bytesAvailable -= r; }
    skipBits(e) { let t; e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e); }
    readBits(e) { let t = Math.min(this.bitsAvailable, e); const s = this.word >>> 32 - t; if (e > 32 && le.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
        this.word <<= t;
    else if (this.bytesAvailable > 0)
        this.loadWord();
    else
        throw new Error("no bits available"); return t = e - t, t > 0 && this.bitsAvailable ? s << t | this.readBits(t) : s; }
    skipLZ() { let e; for (e = 0; e < this.bitsAvailable; ++e)
        if (this.word & 2147483648 >>> e)
            return this.word <<= e, this.bitsAvailable -= e, e; return this.loadWord(), e + this.skipLZ(); }
    skipUEG() { this.skipBits(1 + this.skipLZ()); }
    skipEG() { this.skipBits(1 + this.skipLZ()); }
    readUEG() { const e = this.skipLZ(); return this.readBits(e + 1) - 1; }
    readEG() { const e = this.readUEG(); return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1); }
    readBoolean() { return this.readBits(1) === 1; }
    readUByte() { return this.readBits(8); }
    readUShort() { return this.readBits(16); }
    readUInt() { return this.readBits(32); }
}
class z1 extends _p {
    parsePES(e, t, s, n) { const r = this.parseNALu(e, s.data, n); let a = this.VideoSample, o, l = !1; s.data = null, a && r.length && !e.audFound && (this.pushAccessUnit(a, e), a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach(u => { var c, d; switch (u.type) {
        case 1: {
            let p = !1;
            o = !0;
            const x = u.data;
            if (l && x.length > 4) {
                const y = this.readSliceType(x);
                (y === 2 || y === 4 || y === 7 || y === 9) && (p = !0);
            }
            if (p) {
                var h;
                (h = a) != null && h.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null);
            }
            a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.frame = !0, a.key = p;
            break;
        }
        case 5:
            o = !0, (c = a) != null && c.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
            break;
        case 6: {
            o = !0, Hc(u.data, 1, s.pts, t.samples);
            break;
        }
        case 7: {
            var f, m;
            o = !0, l = !0;
            const p = u.data, x = this.readSPS(p);
            if (!e.sps || e.width !== x.width || e.height !== x.height || ((f = e.pixelRatio) == null ? void 0 : f[0]) !== x.pixelRatio[0] || ((m = e.pixelRatio) == null ? void 0 : m[1]) !== x.pixelRatio[1]) {
                e.width = x.width, e.height = x.height, e.pixelRatio = x.pixelRatio, e.sps = [p];
                const y = p.subarray(1, 4);
                let v = "avc1.";
                for (let E = 0; E < 3; E++) {
                    let T = y[E].toString(16);
                    T.length < 2 && (T = "0" + T), v += T;
                }
                e.codec = v;
            }
            break;
        }
        case 8:
            o = !0, e.pps = [u.data];
            break;
        case 9:
            o = !0, e.audFound = !0, (d = a) != null && d.frame && (this.pushAccessUnit(a, e), a = null), a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
            break;
        case 12:
            o = !0;
            break;
        default:
            o = !1;
            break;
    } a && o && a.units.push(u); }), n && a && (this.pushAccessUnit(a, e), this.VideoSample = null); }
    getNALuType(e, t) { return e[t] & 31; }
    readSliceType(e) { const t = new Fn(e); return t.readUByte(), t.readUEG(), t.readUEG(); }
    skipScalingList(e, t) { let s = 8, n = 8, r; for (let a = 0; a < e; a++)
        n !== 0 && (r = t.readEG(), n = (s + r + 256) % 256), s = n === 0 ? s : n; }
    readSPS(e) { const t = new Fn(e); let s = 0, n = 0, r = 0, a = 0, o, l, u; const c = t.readUByte.bind(t), d = t.readBits.bind(t), h = t.readUEG.bind(t), f = t.readBoolean.bind(t), m = t.skipBits.bind(t), p = t.skipEG.bind(t), x = t.skipUEG.bind(t), y = this.skipScalingList.bind(this); c(); const v = c(); if (d(5), m(3), c(), x(), v === 100 || v === 110 || v === 122 || v === 244 || v === 44 || v === 83 || v === 86 || v === 118 || v === 128) {
        const R = h();
        if (R === 3 && m(1), x(), x(), m(1), f())
            for (l = R !== 3 ? 8 : 12, u = 0; u < l; u++)
                f() && (u < 6 ? y(16, t) : y(64, t));
    } x(); const E = h(); if (E === 0)
        h();
    else if (E === 1)
        for (m(1), p(), p(), o = h(), u = 0; u < o; u++)
            p(); x(), m(1); const T = h(), L = h(), w = d(1); w === 0 && m(1), m(1), f() && (s = h(), n = h(), r = h(), a = h()); let I = [1, 1]; if (f() && f())
        switch (c()) {
            case 1:
                I = [1, 1];
                break;
            case 2:
                I = [12, 11];
                break;
            case 3:
                I = [10, 11];
                break;
            case 4:
                I = [16, 11];
                break;
            case 5:
                I = [40, 33];
                break;
            case 6:
                I = [24, 11];
                break;
            case 7:
                I = [20, 11];
                break;
            case 8:
                I = [32, 11];
                break;
            case 9:
                I = [80, 33];
                break;
            case 10:
                I = [18, 11];
                break;
            case 11:
                I = [15, 11];
                break;
            case 12:
                I = [64, 33];
                break;
            case 13:
                I = [160, 99];
                break;
            case 14:
                I = [4, 3];
                break;
            case 15:
                I = [3, 2];
                break;
            case 16:
                I = [2, 1];
                break;
            case 255: {
                I = [c() << 8 | c(), c() << 8 | c()];
                break;
            }
        } return { width: Math.ceil((T + 1) * 16 - s * 2 - n * 2), height: (2 - w) * (L + 1) * 16 - (w ? 2 : 4) * (r + a), pixelRatio: I }; }
}
class W1 extends _p {
    constructor(...e) { super(...e), this.initVPS = null; }
    parsePES(e, t, s, n) { const r = this.parseNALu(e, s.data, n); let a = this.VideoSample, o, l = !1; s.data = null, a && r.length && !e.audFound && (this.pushAccessUnit(a, e), a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach(u => { var c, d; switch (u.type) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), a.frame = !0, o = !0;
            break;
        case 16:
        case 17:
        case 18:
        case 21:
            if (o = !0, l) {
                var h;
                (h = a) != null && h.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null);
            }
            a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
            break;
        case 19:
        case 20:
            o = !0, (c = a) != null && c.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
            break;
        case 39:
            o = !0, Hc(u.data, 2, s.pts, t.samples);
            break;
        case 32:
            o = !0, e.vps || (typeof e.params != "object" && (e.params = {}), e.params = ce(e.params, this.readVPS(u.data)), this.initVPS = u.data), e.vps = [u.data];
            break;
        case 33:
            if (o = !0, l = !0, e.vps !== void 0 && e.vps[0] !== this.initVPS && e.sps !== void 0 && !this.matchSPS(e.sps[0], u.data) && (this.initVPS = e.vps[0], e.sps = e.pps = void 0), !e.sps) {
                const f = this.readSPS(u.data);
                e.width = f.width, e.height = f.height, e.pixelRatio = f.pixelRatio, e.codec = f.codecString, e.sps = [], typeof e.params != "object" && (e.params = {});
                for (const m in f.params)
                    e.params[m] = f.params[m];
            }
            this.pushParameterSet(e.sps, u.data, e.vps), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0;
            break;
        case 34:
            if (o = !0, typeof e.params == "object") {
                if (!e.pps) {
                    e.pps = [];
                    const f = this.readPPS(u.data);
                    for (const m in f)
                        e.params[m] = f[m];
                }
                this.pushParameterSet(e.pps, u.data, e.vps);
            }
            break;
        case 35:
            o = !0, e.audFound = !0, (d = a) != null && d.frame && (this.pushAccessUnit(a, e), a = null), a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
            break;
        default:
            o = !1;
            break;
    } a && o && a.units.push(u); }), n && a && (this.pushAccessUnit(a, e), this.VideoSample = null); }
    pushParameterSet(e, t, s) { (s && s[0] === this.initVPS || !s && !e.length) && e.push(t); }
    getNALuType(e, t) { return (e[t] & 126) >>> 1; }
    ebsp2rbsp(e) { const t = new Uint8Array(e.byteLength); let s = 0; for (let n = 0; n < e.byteLength; n++)
        n >= 2 && e[n] === 3 && e[n - 1] === 0 && e[n - 2] === 0 || (t[s] = e[n], s++); return new Uint8Array(t.buffer, 0, s); }
    pushAccessUnit(e, t) { super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null); }
    readVPS(e) { const t = new Fn(e); t.readUByte(), t.readUByte(), t.readBits(4), t.skipBits(2), t.readBits(6); const s = t.readBits(3), n = t.readBoolean(); return { numTemporalLayers: s + 1, temporalIdNested: n }; }
    readSPS(e) { const t = new Fn(this.ebsp2rbsp(e)); t.readUByte(), t.readUByte(), t.readBits(4); const s = t.readBits(3); t.readBoolean(); const n = t.readBits(2), r = t.readBoolean(), a = t.readBits(5), o = t.readUByte(), l = t.readUByte(), u = t.readUByte(), c = t.readUByte(), d = t.readUByte(), h = t.readUByte(), f = t.readUByte(), m = t.readUByte(), p = t.readUByte(), x = t.readUByte(), y = t.readUByte(), v = [], E = []; for (let ae = 0; ae < s; ae++)
        v.push(t.readBoolean()), E.push(t.readBoolean()); if (s > 0)
        for (let ae = s; ae < 8; ae++)
            t.readBits(2); for (let ae = 0; ae < s; ae++)
        v[ae] && (t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte()), E[ae] && t.readUByte(); t.readUEG(); const T = t.readUEG(); T == 3 && t.skipBits(1); const L = t.readUEG(), w = t.readUEG(), I = t.readBoolean(); let R = 0, _ = 0, A = 0, D = 0; I && (R += t.readUEG(), _ += t.readUEG(), A += t.readUEG(), D += t.readUEG()); const B = t.readUEG(), V = t.readUEG(), Y = t.readUEG(), K = t.readBoolean(); for (let ae = K ? 0 : s; ae <= s; ae++)
        t.skipUEG(), t.skipUEG(), t.skipUEG(); if (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.readBoolean() && t.readBoolean())
        for (let He = 0; He < 4; He++)
            for (let Et = 0; Et < (He === 3 ? 2 : 6); Et++)
                if (!t.readBoolean())
                    t.readUEG();
                else {
                    const bt = Math.min(64, 1 << 4 + (He << 1));
                    He > 1 && t.readEG();
                    for (let vs = 0; vs < bt; vs++)
                        t.readEG();
                } t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean()); const C = t.readUEG(); let O = 0; for (let ae = 0; ae < C; ae++) {
        let He = !1;
        if (ae !== 0 && (He = t.readBoolean()), He) {
            ae === C && t.readUEG(), t.readBoolean(), t.readUEG();
            let Et = 0;
            for (let qi = 0; qi <= O; qi++) {
                const bt = t.readBoolean();
                let vs = !1;
                bt || (vs = t.readBoolean()), (bt || vs) && Et++;
            }
            O = Et;
        }
        else {
            const Et = t.readUEG(), qi = t.readUEG();
            O = Et + qi;
            for (let bt = 0; bt < Et; bt++)
                t.readUEG(), t.readBoolean();
            for (let bt = 0; bt < qi; bt++)
                t.readUEG(), t.readBoolean();
        }
    } if (t.readBoolean()) {
        const ae = t.readUEG();
        for (let He = 0; He < ae; He++) {
            for (let Et = 0; Et < Y + 4; Et++)
                t.readBits(1);
            t.readBits(1);
        }
    } let M = 0, F = 1, X = 1, ie = !0, J = 1, ee = 0; t.readBoolean(), t.readBoolean(); let we = !1; if (t.readBoolean()) {
        if (t.readBoolean()) {
            const Qi = t.readUByte(), fd = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], Sr = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
            Qi > 0 && Qi < 16 ? (F = fd[Qi - 1], X = Sr[Qi - 1]) : Qi === 255 && (F = t.readBits(16), X = t.readBits(16));
        }
        if (t.readBoolean() && t.readBoolean(), t.readBoolean() && (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())), t.readBoolean() && (t.readUEG(), t.readUEG()), t.readBoolean(), t.readBoolean(), t.readBoolean(), we = t.readBoolean(), we && (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG()), t.readBoolean() && (J = t.readBits(32), ee = t.readBits(32), t.readBoolean() && t.readUEG(), t.readBoolean())) {
            const Sr = t.readBoolean(), md = t.readBoolean();
            let cn = !1;
            (Sr || md) && (cn = t.readBoolean(), cn && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)), t.readBits(4), t.readBits(4), cn && t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
            for (let gd = 0; gd <= s; gd++) {
                ie = t.readBoolean();
                const ly = ie || t.readBoolean();
                let pd = !1;
                ly ? t.readEG() : pd = t.readBoolean();
                const yd = pd ? 1 : t.readUEG() + 1;
                if (Sr)
                    for (let dn = 0; dn < yd; dn++)
                        t.readUEG(), t.readUEG(), cn && (t.readUEG(), t.readUEG()), t.skipBits(1);
                if (md)
                    for (let dn = 0; dn < yd; dn++)
                        t.readUEG(), t.readUEG(), cn && (t.readUEG(), t.readUEG()), t.skipBits(1);
            }
        }
        t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), M = t.readUEG());
    } let xt = L, jt = w; if (I) {
        let ae = 1, He = 1;
        T === 1 ? ae = He = 2 : T == 2 && (ae = 2), xt = L - ae * _ - ae * R, jt = w - He * D - He * A;
    } const Yi = n ? ["A", "B", "C"][n] : "", oy = o << 24 | l << 16 | u << 8 | c; let _o = 0; for (let ae = 0; ae < 32; ae++)
        _o = (_o | (oy >> ae & 1) << 31 - ae) >>> 0; let bo = _o.toString(16); return a === 1 && bo === "2" && (bo = "6"), { codecString: `hvc1.${Yi}${a}.${bo}.${r ? "H" : "L"}${y}.B0`, params: { general_tier_flag: r, general_profile_idc: a, general_profile_space: n, general_profile_compatibility_flags: [o, l, u, c], general_constraint_indicator_flags: [d, h, f, m, p, x], general_level_idc: y, bit_depth: B + 8, bit_depth_luma_minus8: B, bit_depth_chroma_minus8: V, min_spatial_segmentation_idc: M, chroma_format_idc: T, frame_rate: { fixed: ie, fps: ee / J } }, width: xt, height: jt, pixelRatio: [F, X] }; }
    readPPS(e) { const t = new Fn(this.ebsp2rbsp(e)); t.readUByte(), t.readUByte(), t.skipUEG(), t.skipUEG(), t.skipBits(2), t.skipBits(3), t.skipBits(2), t.skipUEG(), t.skipUEG(), t.skipEG(), t.skipBits(2), t.readBoolean() && t.skipUEG(), t.skipEG(), t.skipEG(), t.skipBits(4); const n = t.readBoolean(), r = t.readBoolean(); let a = 1; return r && n ? a = 0 : r ? a = 3 : n && (a = 2), { parallelismType: a }; }
    matchSPS(e, t) { return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3); }
}
const Oe = 188;
class wi {
    constructor(e, t, s, n) { this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.logger = n, this.videoParser = null; }
    static probe(e, t) { const s = wi.syncOffset(e); return s > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${s}`), s !== -1; }
    static syncOffset(e) { const t = e.length; let s = Math.min(Oe * 5, t - Oe) + 1, n = 0; for (; n < s;) {
        let r = !1, a = -1, o = 0;
        for (let l = n; l < t; l += Oe)
            if (e[l] === 71 && (t - l === Oe || e[l + Oe] === 71)) {
                if (o++, a === -1 && (a = l, a !== 0 && (s = Math.min(a + Oe * 99, e.length - Oe) + 1)), r || (r = Pu(e, l) === 0), r && o > 1 && (a === 0 && o > 2 || l + Oe > s))
                    return a;
            }
            else {
                if (o)
                    return -1;
                break;
            }
        n++;
    } return -1; }
    static createTrack(e, t) { return { container: e === "video" || e === "audio" ? "video/mp2t" : void 0, type: e, id: Ng[e], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: e === "audio" ? t : void 0 }; }
    resetInitSegment(e, t, s, n) { this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = wi.createTrack("video"), this._videoTrack.duration = n, this._audioTrack = wi.createTrack("audio", n), this._id3Track = wi.createTrack("id3"), this._txtTrack = wi.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.videoParser = null, this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = s; }
    resetTimeStamp() { }
    resetContiguity() { const { _audioTrack: e, _videoTrack: t, _id3Track: s } = this; e && (e.pesData = null), t && (t.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null; }
    demux(e, t, s = !1, n = !1) { s || (this.sampleAes = null); let r; const a = this._videoTrack, o = this._audioTrack, l = this._id3Track, u = this._txtTrack; let c = a.pid, d = a.pesData, h = o.pid, f = l.pid, m = o.pesData, p = l.pesData, x = null, y = this.pmtParsed, v = this._pmtId, E = e.length; if (this.remainderData && (e = wt(this.remainderData, e), E = e.length, this.remainderData = null), E < Oe && !n)
        return this.remainderData = e, { audioTrack: o, videoTrack: a, id3Track: l, textTrack: u }; const T = Math.max(0, wi.syncOffset(e)); E -= (E - T) % Oe, E < e.byteLength && !n && (this.remainderData = new Uint8Array(e.buffer, E, e.buffer.byteLength - E)); let L = 0; for (let I = T; I < E; I += Oe)
        if (e[I] === 71) {
            const R = !!(e[I + 1] & 64), _ = Pu(e, I), A = (e[I + 3] & 48) >> 4;
            let D;
            if (A > 1) {
                if (D = I + 5 + e[I + 4], D === I + Oe)
                    continue;
            }
            else
                D = I + 4;
            switch (_) {
                case c:
                    R && (d && (r = Ls(d, this.logger)) && (this.readyVideoParser(a.segmentCodec), this.videoParser !== null && this.videoParser.parsePES(a, u, r, !1)), d = { data: [], size: 0 }), d && (d.data.push(e.subarray(D, I + Oe)), d.size += I + Oe - D);
                    break;
                case h:
                    if (R) {
                        if (m && (r = Ls(m, this.logger)))
                            switch (o.segmentCodec) {
                                case "aac":
                                    this.parseAACPES(o, r);
                                    break;
                                case "mp3":
                                    this.parseMPEGPES(o, r);
                                    break;
                                case "ac3":
                                    this.parseAC3PES(o, r);
                                    break;
                            }
                        m = { data: [], size: 0 };
                    }
                    m && (m.data.push(e.subarray(D, I + Oe)), m.size += I + Oe - D);
                    break;
                case f:
                    R && (p && (r = Ls(p, this.logger)) && this.parseID3PES(l, r), p = { data: [], size: 0 }), p && (p.data.push(e.subarray(D, I + Oe)), p.size += I + Oe - D);
                    break;
                case 0:
                    R && (D += e[D] + 1), v = this._pmtId = Y1(e, D);
                    break;
                case v: {
                    R && (D += e[D] + 1);
                    const B = q1(e, D, this.typeSupported, s, this.observer, this.logger);
                    c = B.videoPid, c > 0 && (a.pid = c, a.segmentCodec = B.segmentVideoCodec), h = B.audioPid, h > 0 && (o.pid = h, o.segmentCodec = B.segmentAudioCodec), f = B.id3Pid, f > 0 && (l.pid = f), x !== null && !y && (this.logger.warn(`MPEG-TS PMT found at ${I} after unknown PID '${x}'. Backtracking to sync byte @${T} to parse all TS packets.`), x = null, I = T - 188), y = this.pmtParsed = !0;
                    break;
                }
                case 17:
                case 8191: break;
                default:
                    x = _;
                    break;
            }
        }
        else
            L++; L > 0 && Nu(this.observer, new Error(`Found ${L} TS packet/s that do not start with 0x47`), void 0, this.logger), a.pesData = d, o.pesData = m, l.pesData = p; const w = { audioTrack: o, videoTrack: a, id3Track: l, textTrack: u }; return n && this.extractRemainingSamples(w), w; }
    flush() { const { remainderData: e } = this; this.remainderData = null; let t; return e ? t = this.demux(e, -1, !1, !0) : t = { videoTrack: this._videoTrack, audioTrack: this._audioTrack, id3Track: this._id3Track, textTrack: this._txtTrack }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t; }
    extractRemainingSamples(e) { const { audioTrack: t, videoTrack: s, id3Track: n, textTrack: r } = e, a = s.pesData, o = t.pesData, l = n.pesData; let u; if (a && (u = Ls(a, this.logger)) ? (this.readyVideoParser(s.segmentCodec), this.videoParser !== null && (this.videoParser.parsePES(s, r, u, !0), s.pesData = null)) : s.pesData = a, o && (u = Ls(o, this.logger))) {
        switch (t.segmentCodec) {
            case "aac":
                this.parseAACPES(t, u);
                break;
            case "mp3":
                this.parseMPEGPES(t, u);
                break;
            case "ac3":
                this.parseAC3PES(t, u);
                break;
        }
        t.pesData = null;
    }
    else
        o != null && o.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o; l && (u = Ls(l, this.logger)) ? (this.parseID3PES(n, u), n.pesData = null) : n.pesData = l; }
    demuxSampleAes(e, t, s) { const n = this.demux(e, s, !0, !this.config.progressive), r = this.sampleAes = new H1(this.observer, this.config, t); return this.decrypt(n, r); }
    readyVideoParser(e) { this.videoParser === null && (e === "avc" ? this.videoParser = new z1 : e === "hevc" && (this.videoParser = new W1)); }
    decrypt(e, t) { return new Promise(s => { const { audioTrack: n, videoTrack: r } = e; n.samples && n.segmentCodec === "aac" ? t.decryptAacSamples(n.samples, 0, () => { r.samples ? t.decryptAvcSamples(r.samples, 0, 0, () => { s(e); }) : s(e); }) : r.samples && t.decryptAvcSamples(r.samples, 0, 0, () => { s(e); }); }); }
    destroy() { this.observer && this.observer.removeAllListeners(), this.config = this.logger = this.observer = null, this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null, this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = void 0; }
    parseAACPES(e, t) { let s = 0; const n = this.aacOverFlow; let r = t.data; if (n) {
        this.aacOverFlow = null;
        const d = n.missing, h = n.sample.unit.byteLength;
        if (d === -1)
            r = wt(n.sample.unit, r);
        else {
            const f = h - d;
            n.sample.unit.set(r.subarray(0, d), f), e.samples.push(n.sample), s = n.missing;
        }
    } let a, o; for (a = s, o = r.length; a < o - 1 && !no(r, a); a++)
        ; if (a !== s) {
        let d;
        const h = a < o - 1;
        if (h ? d = `AAC PES did not start with ADTS header,offset:${a}` : d = "No ADTS header found in AAC PES", Nu(this.observer, new Error(d), h, this.logger), !h)
            return;
    } yp(e, this.observer, r, a, this.audioCodec); let l; if (t.pts !== void 0)
        l = t.pts;
    else if (n) {
        const d = vp(e.samplerate);
        l = n.sample.pts + d;
    }
    else {
        this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
        return;
    } let u = 0, c; for (; a < o;)
        if (c = xp(e, r, a, l, u), a += c.length, c.missing) {
            this.aacOverFlow = c;
            break;
        }
        else
            for (u++; a < o - 1 && !no(r, a); a++)
                ; }
    parseMPEGPES(e, t) { const s = t.data, n = s.length; let r = 0, a = 0; const o = t.pts; if (o === void 0) {
        this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
        return;
    } for (; a < n;)
        if (Ip(s, a)) {
            const l = Tp(e, s, a, o, r);
            if (l)
                a += l.length, r++;
            else
                break;
        }
        else
            a++; }
    parseAC3PES(e, t) { {
        const s = t.data, n = t.pts;
        if (n === void 0) {
            this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
            return;
        }
        const r = s.length;
        let a = 0, o = 0, l;
        for (; o < r && (l = wp(e, s, o, n, a++)) > 0;)
            o += l;
    } }
    parseID3PES(e, t) { if (t.pts === void 0) {
        this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
        return;
    } const s = ce({}, t, { type: this._videoTrack ? ht.emsg : ht.audioId3, duration: Number.POSITIVE_INFINITY }); e.samples.push(s); }
}
function Pu(i, e) { return ((i[e + 1] & 31) << 8) + i[e + 2]; }
function Y1(i, e) { return (i[e + 10] & 31) << 8 | i[e + 11]; }
function q1(i, e, t, s, n, r) { const a = { audioPid: -1, videoPid: -1, id3Pid: -1, segmentVideoCodec: "avc", segmentAudioCodec: "aac" }, o = (i[e + 1] & 15) << 8 | i[e + 2], l = e + 3 + o - 4, u = (i[e + 10] & 15) << 8 | i[e + 11]; for (e += 12 + u; e < l;) {
    const c = Pu(i, e), d = (i[e + 3] & 15) << 8 | i[e + 4];
    switch (i[e]) {
        case 207: if (!s) {
            ml("ADTS AAC", r);
            break;
        }
        case 15:
            a.audioPid === -1 && (a.audioPid = c);
            break;
        case 21:
            a.id3Pid === -1 && (a.id3Pid = c);
            break;
        case 219: if (!s) {
            ml("H.264", r);
            break;
        }
        case 27:
            a.videoPid === -1 && (a.videoPid = c);
            break;
        case 3:
        case 4:
            !t.mpeg && !t.mp3 ? r.log("MPEG audio found, not supported in this browser") : a.audioPid === -1 && (a.audioPid = c, a.segmentAudioCodec = "mp3");
            break;
        case 193: if (!s) {
            ml("AC-3", r);
            break;
        }
        case 129:
            t.ac3 ? a.audioPid === -1 && (a.audioPid = c, a.segmentAudioCodec = "ac3") : r.log("AC-3 audio found, not supported in this browser");
            break;
        case 6:
            if (a.audioPid === -1 && d > 0) {
                let h = e + 5, f = d;
                for (; f > 2;) {
                    switch (i[h]) {
                        case 106:
                            t.ac3 !== !0 ? r.log("AC-3 audio found, not supported in this browser for now") : (a.audioPid = c, a.segmentAudioCodec = "ac3");
                            break;
                    }
                    const p = i[h + 1] + 2;
                    h += p, f -= p;
                }
            }
            break;
        case 194:
        case 135: return Nu(n, new Error("Unsupported EC-3 in M2TS found"), void 0, r), a;
        case 36:
            a.videoPid === -1 && (a.videoPid = c, a.segmentVideoCodec = "hevc", r.log("HEVC in M2TS found"));
            break;
    }
    e += d + 5;
} return a; }
function Nu(i, e, t, s) { s.warn(`parsing error: ${e.message}`), i.emit(S.ERROR, S.ERROR, { type: q.MEDIA_ERROR, details: k.FRAG_PARSING_ERROR, fatal: !1, levelRetry: t, error: e, reason: e.message }); }
function ml(i, e) { e.log(`${i} with AES-128-CBC encryption found in unencrypted stream`); }
function Ls(i, e) { let t = 0, s, n, r, a, o; const l = i.data; if (!i || i.size === 0)
    return null; for (; l[0].length < 19 && l.length > 1;)
    l[0] = wt(l[0], l[1]), l.splice(1, 1); if (s = l[0], (s[0] << 16) + (s[1] << 8) + s[2] === 1) {
    if (n = (s[4] << 8) + s[5], n && n > i.size - 6)
        return null;
    const c = s[7];
    c & 192 && (a = (s[9] & 14) * 536870912 + (s[10] & 255) * 4194304 + (s[11] & 254) * 16384 + (s[12] & 255) * 128 + (s[13] & 254) / 2, c & 64 ? (o = (s[14] & 14) * 536870912 + (s[15] & 255) * 4194304 + (s[16] & 254) * 16384 + (s[17] & 255) * 128 + (s[18] & 254) / 2, a - o > 60 * 9e4 && (e.warn(`${Math.round((a - o) / 9e4)}s delta between PTS and DTS, align them`), a = o)) : o = a), r = s[8];
    let d = r + 9;
    if (i.size <= d)
        return null;
    i.size -= d;
    const h = new Uint8Array(i.size);
    for (let f = 0, m = l.length; f < m; f++) {
        s = l[f];
        let p = s.byteLength;
        if (d)
            if (d > p) {
                d -= p;
                continue;
            }
            else
                s = s.subarray(d), p -= d, d = 0;
        h.set(s, t), t += p;
    }
    return n && (n -= r + 3), { data: h, pts: a, dts: o, len: n };
} return null; }
class Q1 {
    static getSilentFrame(e, t) { switch (e) {
        case "mp4a.40.2":
            if (t === 1)
                return new Uint8Array([0, 200, 0, 128, 35, 128]);
            if (t === 2)
                return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
            if (t === 3)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
            if (t === 4)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
            if (t === 5)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
            if (t === 6)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
            break;
        default:
            if (t === 1)
                return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            if (t === 2)
                return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            if (t === 3)
                return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            break;
    } }
}
const Ti = Math.pow(2, 32) - 1;
class b {
    static init() { b.types = { avc1: [], avcC: [], hvc1: [], hvcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], dac3: [], "ac-3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }; let e; for (e in b.types)
        b.types.hasOwnProperty(e) && (b.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]); const t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]); b.HDLR_TYPES = { video: t, audio: s }; const n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]); b.STTS = b.STSC = b.STCO = r, b.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), b.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), b.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), b.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]); const a = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]); b.FTYP = b.box(b.types.ftyp, a, l, a, o), b.DINF = b.box(b.types.dinf, b.box(b.types.dref, n)); }
    static box(e, ...t) { let s = 8, n = t.length; const r = n; for (; n--;)
        s += t[n].byteLength; const a = new Uint8Array(s); for (a[0] = s >> 24 & 255, a[1] = s >> 16 & 255, a[2] = s >> 8 & 255, a[3] = s & 255, a.set(e, 4), n = 0, s = 8; n < r; n++)
        a.set(t[n], s), s += t[n].byteLength; return a; }
    static hdlr(e) { return b.box(b.types.hdlr, b.HDLR_TYPES[e]); }
    static mdat(e) { return b.box(b.types.mdat, e); }
    static mdhd(e, t) { t *= e; const s = Math.floor(t / (Ti + 1)), n = Math.floor(t % (Ti + 1)); return b.box(b.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, s >> 24, s >> 16 & 255, s >> 8 & 255, s & 255, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255, 85, 196, 0, 0])); }
    static mdia(e) { return b.box(b.types.mdia, b.mdhd(e.timescale || 0, e.duration || 0), b.hdlr(e.type), b.minf(e)); }
    static mfhd(e) { return b.box(b.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, e & 255])); }
    static minf(e) { return e.type === "audio" ? b.box(b.types.minf, b.box(b.types.smhd, b.SMHD), b.DINF, b.stbl(e)) : b.box(b.types.minf, b.box(b.types.vmhd, b.VMHD), b.DINF, b.stbl(e)); }
    static moof(e, t, s) { return b.box(b.types.moof, b.mfhd(e), b.traf(s, t)); }
    static moov(e) { let t = e.length; const s = []; for (; t--;)
        s[t] = b.trak(e[t]); return b.box.apply(null, [b.types.moov, b.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(s).concat(b.mvex(e))); }
    static mvex(e) { let t = e.length; const s = []; for (; t--;)
        s[t] = b.trex(e[t]); return b.box.apply(null, [b.types.mvex, ...s]); }
    static mvhd(e, t) { t *= e; const s = Math.floor(t / (Ti + 1)), n = Math.floor(t % (Ti + 1)), r = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, s >> 24, s >> 16 & 255, s >> 8 & 255, s & 255, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]); return b.box(b.types.mvhd, r); }
    static sdtp(e) { const t = e.samples || [], s = new Uint8Array(4 + t.length); let n, r; for (n = 0; n < t.length; n++)
        r = t[n].flags, s[n + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy; return b.box(b.types.sdtp, s); }
    static stbl(e) { return b.box(b.types.stbl, b.stsd(e), b.box(b.types.stts, b.STTS), b.box(b.types.stsc, b.STSC), b.box(b.types.stsz, b.STSZ), b.box(b.types.stco, b.STCO)); }
    static avc1(e) { let t = [], s = [], n, r, a; for (n = 0; n < e.sps.length; n++)
        r = e.sps[n], a = r.byteLength, t.push(a >>> 8 & 255), t.push(a & 255), t = t.concat(Array.prototype.slice.call(r)); for (n = 0; n < e.pps.length; n++)
        r = e.pps[n], a = r.byteLength, s.push(a >>> 8 & 255), s.push(a & 255), s = s.concat(Array.prototype.slice.call(r)); const o = b.box(b.types.avcC, new Uint8Array([1, t[3], t[4], t[5], 255, 224 | e.sps.length].concat(t).concat([e.pps.length]).concat(s))), l = e.width, u = e.height, c = e.pixelRatio[0], d = e.pixelRatio[1]; return b.box(b.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, l & 255, u >> 8 & 255, u & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, b.box(b.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), b.box(b.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, c & 255, d >> 24, d >> 16 & 255, d >> 8 & 255, d & 255]))); }
    static esds(e) { const t = e.config; return new Uint8Array([0, 0, 0, 0, 3, 25, 0, 1, 0, 4, 17, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, ...t, 6, 1, 2]); }
    static audioStsd(e) { const t = e.samplerate || 0; return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount || 0, 0, 16, 0, 0, 0, 0, t >> 8 & 255, t & 255, 0, 0]); }
    static mp4a(e) { return b.box(b.types.mp4a, b.audioStsd(e), b.box(b.types.esds, b.esds(e))); }
    static mp3(e) { return b.box(b.types[".mp3"], b.audioStsd(e)); }
    static ac3(e) { return b.box(b.types["ac-3"], b.audioStsd(e), b.box(b.types.dac3, e.config)); }
    static stsd(e) { const { segmentCodec: t } = e; if (e.type === "audio") {
        if (t === "aac")
            return b.box(b.types.stsd, b.STSD, b.mp4a(e));
        if (t === "ac3" && e.config)
            return b.box(b.types.stsd, b.STSD, b.ac3(e));
        if (t === "mp3" && e.codec === "mp3")
            return b.box(b.types.stsd, b.STSD, b.mp3(e));
    }
    else if (e.pps && e.sps) {
        if (t === "avc")
            return b.box(b.types.stsd, b.STSD, b.avc1(e));
        if (t === "hevc" && e.vps)
            return b.box(b.types.stsd, b.STSD, b.hvc1(e));
    }
    else
        throw new Error("video track missing pps or sps"); throw new Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`); }
    static tkhd(e) { const t = e.id, s = (e.duration || 0) * (e.timescale || 0), n = e.width || 0, r = e.height || 0, a = Math.floor(s / (Ti + 1)), o = Math.floor(s % (Ti + 1)); return b.box(b.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, a & 255, o >> 24, o >> 16 & 255, o >> 8 & 255, o & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, n & 255, 0, 0, r >> 8 & 255, r & 255, 0, 0])); }
    static traf(e, t) { const s = b.sdtp(e), n = e.id, r = Math.floor(t / (Ti + 1)), a = Math.floor(t % (Ti + 1)); return b.box(b.types.traf, b.box(b.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255])), b.box(b.types.tfdt, new Uint8Array([1, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, r & 255, a >> 24, a >> 16 & 255, a >> 8 & 255, a & 255])), b.trun(e, s.length + 16 + 20 + 8 + 16 + 8 + 8), s); }
    static trak(e) { return e.duration = e.duration || 4294967295, b.box(b.types.trak, b.tkhd(e), b.mdia(e)); }
    static trex(e) { const t = e.id; return b.box(b.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1])); }
    static trun(e, t) { const s = e.samples || [], n = s.length, r = 12 + 16 * n, a = new Uint8Array(r); let o, l, u, c, d, h; for (t += 8 + r, a.set([e.type === "video" ? 1 : 0, 0, 15, 1, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t & 255], 0), o = 0; o < n; o++)
        l = s[o], u = l.duration, c = l.size, d = l.flags, h = l.cts, a.set([u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, u & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c & 255, d.isLeading << 2 | d.dependsOn, d.isDependedOn << 6 | d.hasRedundancy << 4 | d.paddingValue << 1 | d.isNonSync, d.degradPrio & 61440, d.degradPrio & 15, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, h & 255], 12 + 16 * o); return b.box(b.types.trun, a); }
    static initSegment(e) { b.types || b.init(); const t = b.moov(e); return wt(b.FTYP, t); }
    static hvc1(e) { const t = e.params, s = [e.vps, e.sps, e.pps], n = 4, r = new Uint8Array([1, t.general_profile_space << 6 | (t.general_tier_flag ? 32 : 0) | t.general_profile_idc, t.general_profile_compatibility_flags[0], t.general_profile_compatibility_flags[1], t.general_profile_compatibility_flags[2], t.general_profile_compatibility_flags[3], t.general_constraint_indicator_flags[0], t.general_constraint_indicator_flags[1], t.general_constraint_indicator_flags[2], t.general_constraint_indicator_flags[3], t.general_constraint_indicator_flags[4], t.general_constraint_indicator_flags[5], t.general_level_idc, 240 | t.min_spatial_segmentation_idc >> 8, 255 & t.min_spatial_segmentation_idc, 252 | t.parallelismType, 252 | t.chroma_format_idc, 248 | t.bit_depth_luma_minus8, 248 | t.bit_depth_chroma_minus8, 0, parseInt(t.frame_rate.fps), n - 1 | t.temporal_id_nested << 2 | t.num_temporal_layers << 3 | (t.frame_rate.fixed ? 64 : 0), s.length]); let a = r.length; for (let m = 0; m < s.length; m += 1) {
        a += 3;
        for (let p = 0; p < s[m].length; p += 1)
            a += 2 + s[m][p].length;
    } const o = new Uint8Array(a); o.set(r, 0), a = r.length; const l = s.length - 1; for (let m = 0; m < s.length; m += 1) {
        o.set(new Uint8Array([32 + m | (m === l ? 128 : 0), 0, s[m].length]), a), a += 3;
        for (let p = 0; p < s[m].length; p += 1)
            o.set(new Uint8Array([s[m][p].length >> 8, s[m][p].length & 255]), a), a += 2, o.set(s[m][p], a), a += s[m][p].length;
    } const u = b.box(b.types.hvcC, o), c = e.width, d = e.height, h = e.pixelRatio[0], f = e.pixelRatio[1]; return b.box(b.types.hvc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, c >> 8 & 255, c & 255, d >> 8 & 255, d & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), u, b.box(b.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), b.box(b.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, h & 255, f >> 24, f >> 16 & 255, f >> 8 & 255, f & 255]))); }
}
b.types = void 0;
b.HDLR_TYPES = void 0;
b.STTS = void 0;
b.STSC = void 0;
b.STCO = void 0;
b.STSZ = void 0;
b.VMHD = void 0;
b.SMHD = void 0;
b.STSD = void 0;
b.FTYP = void 0;
b.DINF = void 0;
const bp = 9e4;
function ad(i, e, t = 1, s = !1) { const n = i * e * t; return s ? Math.round(n) : n; }
function X1(i, e, t = 1, s = !1) { return ad(i, e, 1 / t, s); }
function Sn(i, e = !1) { return ad(i, 1e3, 1 / bp, e); }
function Z1(i, e = 1) { return ad(i, bp, 1 / e); }
function Lf(i) { const { baseTime: e, timescale: t, trackId: s } = i; return `${e / t} (${e}/${t}) trackId: ${s}`; }
const J1 = 10 * 1e3, eL = 1024, tL = 1152, iL = 1536;
let Is = null, gl = null;
function If(i, e, t, s) { return { duration: e, size: t, cts: s, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: i ? 2 : 1, isNonSync: i ? 0 : 1 } }; }
class va extends _t {
    constructor(e, t, s, n) { if (super("mp4-remuxer", n), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextVideoTs = null, this.nextAudioTs = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.ISGenerated = !1, Is === null) {
        const a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
        Is = a ? parseInt(a[1]) : 0;
    } if (gl === null) {
        const r = navigator.userAgent.match(/Safari\/(\d+)/i);
        gl = r ? parseInt(r[1]) : 0;
    } }
    destroy() { this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null; }
    resetTimeStamp(e) { const t = this._initPTS; (!t || !e || e.trackId !== t.trackId || e.baseTime !== t.baseTime || e.timescale !== t.timescale) && this.log(`Reset initPTS: ${t && Lf(t)} > ${e && Lf(e)}`), this._initPTS = this._initDTS = e; }
    resetNextTimestamp() { this.log("reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1; }
    resetInitSegment() { this.log("ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0; }
    getVideoStartPts(e) { let t = !1; const s = e[0].pts, n = e.reduce((r, a) => { let o = a.pts, l = o - r; return l < -4294967296 && (t = !0, o = ct(o, s), l = o - r), l > 0 ? r : o; }, s); return t && this.debug("PTS rollover detected"), n; }
    remux(e, t, s, n, r, a, o, l) { let u, c, d, h, f, m, p = r, x = r; const y = e.pid > -1, v = t.pid > -1, E = t.samples.length, T = e.samples.length > 0, L = o && E > 0 || E > 1; if ((!y || T) && (!v || L) || this.ISGenerated || o) {
        if (this.ISGenerated) {
            var I, R, _, A;
            const Y = this.videoTrackConfig;
            (Y && (t.width !== Y.width || t.height !== Y.height || ((I = t.pixelRatio) == null ? void 0 : I[0]) !== ((R = Y.pixelRatio) == null ? void 0 : R[0]) || ((_ = t.pixelRatio) == null ? void 0 : _[1]) !== ((A = Y.pixelRatio) == null ? void 0 : A[1])) || !Y && L || this.nextAudioTs === null && T) && this.resetInitSegment();
        }
        this.ISGenerated || (d = this.generateIS(e, t, r, a));
        const D = this.isVideoContiguous;
        let B = -1, V;
        if (L && (B = sL(t.samples), !D && this.config.forceKeyFrameOnDiscontinuity))
            if (m = !0, B > 0) {
                this.warn(`Dropped ${B} out of ${E} video samples due to a missing keyframe`);
                const Y = this.getVideoStartPts(t.samples);
                t.samples = t.samples.slice(B), t.dropped += B, x += (t.samples[0].pts - Y) / t.inputTimeScale, V = x;
            }
            else
                B === -1 && (this.warn(`No keyframe found out of ${E} video samples`), m = !1);
        if (this.ISGenerated) {
            if (T && L) {
                const Y = this.getVideoStartPts(t.samples), $ = (ct(e.samples[0].pts, Y) - Y) / t.inputTimeScale;
                p += Math.max(0, $), x += Math.max(0, -$);
            }
            if (T) {
                if (e.samplerate || (this.warn("regenerate InitSegment as audio detected"), d = this.generateIS(e, t, r, a)), c = this.remuxAudio(e, p, this.isAudioContiguous, a, v || L || l === z.AUDIO ? x : void 0), L) {
                    const Y = c ? c.endPTS - c.startPTS : 0;
                    t.inputTimeScale || (this.warn("regenerate InitSegment as video detected"), d = this.generateIS(e, t, r, a)), u = this.remuxVideo(t, x, D, Y);
                }
            }
            else
                L && (u = this.remuxVideo(t, x, D, 0));
            u && (u.firstKeyFrame = B, u.independent = B !== -1, u.firstKeyFramePTS = V);
        }
    } return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (f = kp(s, r, this._initPTS, this._initDTS)), n.samples.length && (h = Cp(n, r, this._initPTS))), { audio: c, video: u, initSegment: d, independent: m, text: h, id3: f }; }
    computeInitPts(e, t, s, n) { const r = Math.round(s * t); let a = ct(e, r); if (a < r + t)
        for (this.log(`Adjusting PTS for rollover in timeline near ${(r - a) / t} ${n}`); a < r + t;)
            a += 8589934592; return a - r; }
    generateIS(e, t, s, n) { const r = e.samples, a = t.samples, o = this.typeSupported, l = {}, u = this._initPTS; let c = !u || n, d = "audio/mp4", h, f, m, p = -1; if (c && (h = f = 1 / 0), e.config && r.length) {
        switch (e.timescale = e.samplerate, e.segmentCodec) {
            case "mp3":
                o.mpeg ? (d = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
                break;
            case "ac3":
                e.codec = "ac-3";
                break;
        }
        l.audio = { id: "audio", container: d, codec: e.codec, initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : b.initSegment([e]), metadata: { channelCount: e.channelCount } }, c && (p = e.id, m = e.inputTimeScale, !u || m !== u.timescale ? h = f = this.computeInitPts(r[0].pts, m, s, "audio") : c = !1);
    } if (t.sps && t.pps && a.length) {
        if (t.timescale = t.inputTimeScale, l.video = { id: "main", container: "video/mp4", codec: t.codec, initSegment: b.initSegment([t]), metadata: { width: t.width, height: t.height } }, c)
            if (p = t.id, m = t.inputTimeScale, !u || m !== u.timescale) {
                const x = this.getVideoStartPts(a), y = ct(a[0].dts, x), v = this.computeInitPts(y, m, s, "video"), E = this.computeInitPts(x, m, s, "video");
                f = Math.min(f, v), h = Math.min(h, E);
            }
            else
                c = !1;
        this.videoTrackConfig = { width: t.width, height: t.height, pixelRatio: t.pixelRatio };
    } if (Object.keys(l).length)
        return this.ISGenerated = !0, c ? (u && this.warn(`Timestamps at playlist time: ${n ? "" : "~"}${s} ${h / m} != initPTS: ${u.baseTime / u.timescale} (${u.baseTime}/${u.timescale}) trackId: ${u.trackId}`), this.log(`Found initPTS at playlist time: ${s} offset: ${h / m} (${h}/${m}) trackId: ${p}`), this._initPTS = { baseTime: h, timescale: m, trackId: p }, this._initDTS = { baseTime: f, timescale: m, trackId: p }) : h = m = void 0, { tracks: l, initPTS: h, timescale: m, trackId: p }; }
    remuxVideo(e, t, s, n) { const r = e.inputTimeScale, a = e.samples, o = [], l = a.length, u = this._initPTS, c = u.baseTime * r / u.timescale; let d = this.nextVideoTs, h = 8, f = this.videoSampleDuration, m, p, x = Number.POSITIVE_INFINITY, y = Number.NEGATIVE_INFINITY, v = !1; if (!s || d === null) {
        const M = c + t * r, F = a[0].pts - ct(a[0].dts, a[0].pts);
        Is && d !== null && Math.abs(M - F - (d + c)) < 15e3 ? s = !0 : d = M - F - c;
    } const E = d + c; for (let M = 0; M < l; M++) {
        const F = a[M];
        F.pts = ct(F.pts, E), F.dts = ct(F.dts, E), F.dts < a[M > 0 ? M - 1 : M].dts && (v = !0);
    } v && a.sort(function (M, F) { const X = M.dts - F.dts, ie = M.pts - F.pts; return X || ie; }), m = a[0].dts, p = a[a.length - 1].dts; const T = p - m, L = T ? Math.round(T / (l - 1)) : f || e.inputTimeScale / 30; if (s) {
        const M = m - E, F = M > L, X = M < -1;
        if ((F || X) && (F ? this.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Sn(M, !0)} ms (${M}dts) hole between fragments detected at ${t.toFixed(3)}`) : this.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Sn(-M, !0)} ms (${M}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !X || E >= a[0].pts || Is)) {
            m = E;
            const ie = a[0].pts - M;
            if (F)
                a[0].dts = m, a[0].pts = ie;
            else {
                let J = !0;
                for (let ee = 0; ee < a.length && !(a[ee].dts > ie && J); ee++) {
                    const we = a[ee].pts;
                    if (a[ee].dts -= M, a[ee].pts -= M, ee < a.length - 1) {
                        const Ue = a[ee + 1].pts, xt = a[ee].pts, jt = Ue <= xt, Yi = Ue <= we;
                        J = jt == Yi;
                    }
                }
            }
            this.log(`Video: Initial PTS/DTS adjusted: ${Sn(ie, !0)}/${Sn(m, !0)}, delta: ${Sn(M, !0)} ms`);
        }
    } m = Math.max(0, m); let w = 0, I = 0, R = m; for (let M = 0; M < l; M++) {
        const F = a[M], X = F.units, ie = X.length;
        let J = 0;
        for (let ee = 0; ee < ie; ee++)
            J += X[ee].data.length;
        I += J, w += ie, F.length = J, F.dts < R ? (F.dts = R, R += L / 4 | 0 || 1) : R = F.dts, x = Math.min(F.pts, x), y = Math.max(F.pts, y);
    } p = a[l - 1].dts; const _ = I + 4 * w + 8; let A; try {
        A = new Uint8Array(_);
    }
    catch (M) {
        this.observer.emit(S.ERROR, S.ERROR, { type: q.MUX_ERROR, details: k.REMUX_ALLOC_ERROR, fatal: !1, error: M, bytes: _, reason: `fail allocating video mdat ${_}` });
        return;
    } const D = new DataView(A.buffer); D.setUint32(0, _), A.set(b.types.mdat, 4); let B = !1, V = Number.POSITIVE_INFINITY, Y = Number.POSITIVE_INFINITY, K = Number.NEGATIVE_INFINITY, $ = Number.NEGATIVE_INFINITY; for (let M = 0; M < l; M++) {
        const F = a[M], X = F.units;
        let ie = 0;
        for (let we = 0, Ue = X.length; we < Ue; we++) {
            const xt = X[we], jt = xt.data, Yi = xt.data.byteLength;
            D.setUint32(h, Yi), h += 4, A.set(jt, h), h += Yi, ie += 4 + Yi;
        }
        let J;
        if (M < l - 1)
            f = a[M + 1].dts - F.dts, J = a[M + 1].pts - F.pts;
        else {
            const we = this.config, Ue = M > 0 ? F.dts - a[M - 1].dts : L;
            if (J = M > 0 ? F.pts - a[M - 1].pts : L, we.stretchShortVideoTrack && this.nextAudioTs !== null) {
                const xt = Math.floor(we.maxBufferHole * r), jt = (n ? x + n * r : this.nextAudioTs + c) - F.pts;
                jt > xt ? (f = jt - Ue, f < 0 ? f = Ue : B = !0, this.log(`It is approximately ${jt / 90} ms to the next segment; using duration ${f / 90} ms for the last video frame.`)) : f = Ue;
            }
            else
                f = Ue;
        }
        const ee = Math.round(F.pts - F.dts);
        V = Math.min(V, f), K = Math.max(K, f), Y = Math.min(Y, J), $ = Math.max($, J), o.push(If(F.key, f, ie, ee));
    } if (o.length) {
        if (Is) {
            if (Is < 70) {
                const M = o[0].flags;
                M.dependsOn = 2, M.isNonSync = 0;
            }
        }
        else if (gl && $ - Y < K - V && L / K < .025 && o[0].cts === 0) {
            this.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
            let M = m;
            for (let F = 0, X = o.length; F < X; F++) {
                const ie = M + o[F].duration, J = M + o[F].cts;
                if (F < X - 1) {
                    const ee = ie + o[F + 1].cts;
                    o[F].duration = ee - J;
                }
                else
                    o[F].duration = F ? o[F - 1].duration : L;
                o[F].cts = 0, M = ie;
            }
        }
    } f = B || !f ? L : f; const H = p + f; this.nextVideoTs = d = H - c, this.videoSampleDuration = f, this.isVideoContiguous = !0; const j = { data1: b.moof(e.sequenceNumber++, m, ce(e, { samples: o })), data2: A, startPTS: (x - c) / r, endPTS: (y + f - c) / r, startDTS: (m - c) / r, endDTS: d / r, type: "video", hasAudio: !1, hasVideo: !0, nb: o.length, dropped: e.dropped }; return e.samples = [], e.dropped = 0, j; }
    getSamplesPerFrame(e) { switch (e.segmentCodec) {
        case "mp3": return tL;
        case "ac3": return iL;
        default: return eL;
    } }
    remuxAudio(e, t, s, n, r) { const a = e.inputTimeScale, o = e.samplerate ? e.samplerate : a, l = a / o, u = this.getSamplesPerFrame(e), c = u * l, d = this._initPTS, h = e.segmentCodec === "mp3" && this.typeSupported.mpeg, f = [], m = r !== void 0; let p = e.samples, x = h ? 0 : 8, y = this.nextAudioTs || -1; const v = d.baseTime * a / d.timescale, E = v + t * a; if (this.isAudioContiguous = s = s || p.length && y > 0 && (n && Math.abs(E - (y + v)) < 9e3 || Math.abs(ct(p[0].pts, E) - (y + v)) < 20 * c), p.forEach(function ($) { $.pts = ct($.pts, E); }), !s || y < 0) {
        const $ = p.length;
        if (p = p.filter(H => H.pts >= 0), $ !== p.length && this.warn(`Removed ${p.length - $} of ${$} samples (initPTS ${v} / ${a})`), !p.length)
            return;
        r === 0 ? y = 0 : n && !m ? y = Math.max(0, E - v) : y = p[0].pts - v;
    } if (e.segmentCodec === "aac") {
        const $ = this.config.maxAudioFramesDrift;
        for (let H = 0, C = y + v; H < p.length; H++) {
            const O = p[H], j = O.pts, M = j - C, F = Math.abs(1e3 * M / a);
            if (M <= -$ * c && m)
                H === 0 && (this.warn(`Audio frame @ ${(j / a).toFixed(3)}s overlaps marker by ${Math.round(1e3 * M / a)} ms.`), this.nextAudioTs = y = j - v, C = j);
            else if (M >= $ * c && F < J1 && m) {
                let X = Math.round(M / c);
                for (C = j - X * c; C < 0 && X && c;)
                    X--, C += c;
                H === 0 && (this.nextAudioTs = y = C - v), this.warn(`Injecting ${X} audio frames @ ${((C - v) / a).toFixed(3)}s due to ${Math.round(1e3 * M / a)} ms gap.`);
                for (let ie = 0; ie < X; ie++) {
                    let J = Q1.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
                    J || (this.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), J = O.unit.subarray()), p.splice(H, 0, { unit: J, pts: C }), C += c, H++;
                }
            }
            O.pts = C, C += c;
        }
    } let T = null, L = null, w, I = 0, R = p.length; for (; R--;)
        I += p[R].unit.byteLength; for (let $ = 0, H = p.length; $ < H; $++) {
        const C = p[$], O = C.unit;
        let j = C.pts;
        if (L !== null) {
            const F = f[$ - 1];
            F.duration = Math.round((j - L) / l);
        }
        else if (s && e.segmentCodec === "aac" && (j = y + v), T = j, I > 0) {
            I += x;
            try {
                w = new Uint8Array(I);
            }
            catch (F) {
                this.observer.emit(S.ERROR, S.ERROR, { type: q.MUX_ERROR, details: k.REMUX_ALLOC_ERROR, fatal: !1, error: F, bytes: I, reason: `fail allocating audio mdat ${I}` });
                return;
            }
            h || (new DataView(w.buffer).setUint32(0, I), w.set(b.types.mdat, 4));
        }
        else
            return;
        w.set(O, x);
        const M = O.byteLength;
        x += M, f.push(If(!0, u, M, 0)), L = j;
    } const _ = f.length; if (!_)
        return; const A = f[f.length - 1]; y = L - v, this.nextAudioTs = y + l * A.duration; const D = h ? new Uint8Array(0) : b.moof(e.sequenceNumber++, T / l, ce({}, e, { samples: f })); e.samples = []; const B = (T - v) / a, V = this.nextAudioTs / a, K = { data1: D, data2: w, startPTS: B, endPTS: V, startDTS: B, endDTS: V, type: "audio", hasAudio: !0, hasVideo: !1, nb: _ }; return this.isAudioContiguous = !0, K; }
}
function ct(i, e) { let t; if (e === null)
    return i; for (e < i ? t = -8589934592 : t = 8589934592; Math.abs(i - e) > 4294967296;)
    i += t; return i; }
function sL(i) { for (let e = 0; e < i.length; e++)
    if (i[e].key)
        return e; return -1; }
function kp(i, e, t, s) { const n = i.samples.length; if (!n)
    return; const r = i.inputTimeScale; for (let o = 0; o < n; o++) {
    const l = i.samples[o];
    l.pts = ct(l.pts - t.baseTime * r / t.timescale, e * r) / r, l.dts = ct(l.dts - s.baseTime * r / s.timescale, e * r) / r;
} const a = i.samples; return i.samples = [], { samples: a }; }
function Cp(i, e, t) { const s = i.samples.length; if (!s)
    return; const n = i.inputTimeScale; for (let a = 0; a < s; a++) {
    const o = i.samples[a];
    o.pts = ct(o.pts - t.baseTime * n / t.timescale, e * n) / n;
} i.samples.sort((a, o) => a.pts - o.pts); const r = i.samples; return i.samples = [], { samples: r }; }
class nL extends _t {
    constructor(e, t, s, n) { super("passthrough-remuxer", n), this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null, this.isVideoContiguous = !1; }
    destroy() { }
    resetTimeStamp(e) { this.lastEndTime = null; const t = this.initPTS; t && e && t.baseTime === e.baseTime && t.timescale === e.timescale || (this.initPTS = e); }
    resetNextTimestamp() { this.isVideoContiguous = !1, this.lastEndTime = null; }
    resetInitSegment(e, t, s, n) { this.audioCodec = t, this.videoCodec = s, this.generateInitSegment(e, n), this.emitInitSegment = !0; }
    generateInitSegment(e, t) { let { audioCodec: s, videoCodec: n } = this; if (!(e != null && e.byteLength)) {
        this.initTracks = void 0, this.initData = void 0;
        return;
    } const { audio: r, video: a } = this.initData = Fg(e); if (t)
        HS(e, t);
    else {
        const l = r || a;
        l != null && l.encrypted && this.warn(`Init segment with encrypted track with has no key ("${l.codec}")!`);
    } r && (s = Af(r, he.AUDIO, this)), a && (n = Af(a, he.VIDEO, this)); const o = {}; r && a ? o.audiovideo = { container: "video/mp4", codec: s + "," + n, supplemental: a.supplemental, encrypted: a.encrypted, initSegment: e, id: "main" } : r ? o.audio = { container: "audio/mp4", codec: s, encrypted: r.encrypted, initSegment: e, id: "audio" } : a ? o.video = { container: "video/mp4", codec: n, supplemental: a.supplemental, encrypted: a.encrypted, initSegment: e, id: "main" } : this.warn("initSegment does not contain moov or trak boxes."), this.initTracks = o; }
    remux(e, t, s, n, r, a) { var o, l; let { initPTS: u, lastEndTime: c } = this; const d = { audio: void 0, video: void 0, text: n, id3: s, initSegment: void 0 }; G(c) || (c = this.lastEndTime = r || 0); const h = t.samples; if (!h.length)
        return d; const f = { initPTS: void 0, timescale: void 0, trackId: void 0 }; let m = this.initData; if ((o = m) != null && o.length || (this.generateInitSegment(h), m = this.initData), !((l = m) != null && l.length))
        return this.warn("Failed to generate initSegment."), d; this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1); const p = WS(h, m, this), x = m.audio ? p[m.audio.id] : null, y = m.video ? p[m.video.id] : null, v = zr(y, 1 / 0), E = zr(x, 1 / 0), T = zr(y, 0, !0), L = zr(x, 0, !0); let w = r, I = 0; const R = x && (!y || !u && E < v || u && u.trackId === m.audio.id), _ = R ? x : y; if (_) {
        const C = _.timescale, O = _.start - r * C, j = R ? m.audio.id : m.video.id;
        w = _.start / C, I = R ? L - E : T - v, (a || !u) && (rL(u, w, r, I) || C !== u.timescale) && (u && this.warn(`Timestamps at playlist time: ${a ? "" : "~"}${r} ${O / C} != initPTS: ${u.baseTime / u.timescale} (${u.baseTime}/${u.timescale}) trackId: ${u.trackId}`), this.log(`Found initPTS at playlist time: ${r} offset: ${w - r} (${O}/${C}) trackId: ${j}`), u = null, f.initPTS = O, f.timescale = C, f.trackId = j);
    }
    else
        this.warn(`No audio or video samples found for initPTS at playlist time: ${r}`); u ? (f.initPTS = u.baseTime, f.timescale = u.timescale, f.trackId = u.trackId) : ((!f.timescale || f.trackId === void 0 || f.initPTS === void 0) && (this.warn("Could not set initPTS"), f.initPTS = w, f.timescale = 1, f.trackId = -1), this.initPTS = u = { baseTime: f.initPTS, timescale: f.timescale, trackId: f.trackId }); const A = w - u.baseTime / u.timescale, D = A + I; I > 0 ? this.lastEndTime = D : (this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp()); const B = !!m.audio, V = !!m.video; let Y = ""; B && (Y += "audio"), V && (Y += "video"); const K = (m.audio ? m.audio.encrypted : !1) || (m.video ? m.video.encrypted : !1), $ = { data1: h, startPTS: A, startDTS: A, endPTS: D, endDTS: D, type: Y, hasAudio: B, hasVideo: V, nb: 1, dropped: 0, encrypted: K }; d.audio = B && !V ? $ : void 0, d.video = V ? $ : void 0; const H = y == null ? void 0 : y.sampleCount; if (H) {
        const C = y.keyFrameIndex, O = C !== -1;
        $.nb = H, $.dropped = C === 0 || this.isVideoContiguous ? 0 : O ? C : H, $.independent = O, $.firstKeyFrame = C, O && y.keyFrameStart && ($.firstKeyFramePTS = (y.keyFrameStart - u.baseTime) / u.timescale), this.isVideoContiguous || (d.independent = O), this.isVideoContiguous || (this.isVideoContiguous = O), $.dropped && this.warn(`fmp4 does not start with IDR: firstIDR ${C}/${H} dropped: ${$.dropped} start: ${$.firstKeyFramePTS || "NA"}`);
    } return d.initSegment = f, d.id3 = kp(s, r, u, u), n.samples.length && (d.text = Cp(n, r, u)), d; }
}
function zr(i, e, t = !1) { return (i == null ? void 0 : i.start) !== void 0 ? (i.start + (t ? i.duration : 0)) / i.timescale : e; }
function rL(i, e, t, s) { if (i === null)
    return !0; const n = Math.max(s, 1), r = e - i.baseTime / i.timescale; return Math.abs(r - t) > n; }
function Af(i, e, t) { const s = i.codec; return s && s.length > 4 ? s : e === he.AUDIO ? s === "ec-3" || s === "ac-3" || s === "alac" ? s : s === "fLaC" || s === "Opus" ? Qa(s, !1) : (t.warn(`Unhandled audio codec "${s}" in mp4 MAP`), s || "mp4a") : (t.warn(`Unhandled video codec "${s}" in mp4 MAP`), s || "avc1"); }
let li;
try {
    li = self.performance.now.bind(self.performance);
}
catch {
    li = Date.now;
}
const xa = [{ demux: K1, remux: nL }, { demux: wi, remux: va }, { demux: $1, remux: va }, { demux: G1, remux: va }];
xa.splice(2, 0, { demux: j1, remux: va });
class Rf {
    constructor(e, t, s, n, r, a) { this.asyncResult = !1, this.logger = void 0, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = s, this.id = r, this.logger = a; }
    configure(e) { this.transmuxConfig = e, this.decrypter && this.decrypter.reset(); }
    push(e, t, s, n) { const r = s.transmuxing; r.executeStart = li(); let a = new Uint8Array(e); const { currentTransmuxState: o, transmuxConfig: l } = this; n && (this.currentTransmuxState = n); const { contiguous: u, discontinuity: c, trackSwitch: d, accurateTimeOffset: h, timeOffset: f, initSegmentChange: m } = n || o, { audioCodec: p, videoCodec: x, defaultInitPts: y, duration: v, initSegmentData: E } = l, T = aL(a, t); if (T && zs(T.method)) {
        const R = this.getDecrypter(), _ = Xc(T.method);
        if (R.isSync()) {
            let A = R.softwareDecrypt(a, T.key.buffer, T.iv.buffer, _);
            if (s.part > -1) {
                const B = R.flush();
                A = B && B.buffer;
            }
            if (!A)
                return r.executeEnd = li(), pl(s);
            a = new Uint8Array(A);
        }
        else
            return this.asyncResult = !0, this.decryptionPromise = R.webCryptoDecrypt(a, T.key.buffer, T.iv.buffer, _).then(A => { const D = this.push(A, null, s); return this.decryptionPromise = null, D; }), this.decryptionPromise;
    } const L = this.needsProbing(c, d); if (L) {
        const R = this.configureTransmuxer(a);
        if (R)
            return this.logger.warn(`[transmuxer] ${R.message}`), this.observer.emit(S.ERROR, S.ERROR, { type: q.MEDIA_ERROR, details: k.FRAG_PARSING_ERROR, fatal: !1, error: R, reason: R.message }), r.executeEnd = li(), pl(s);
    } (c || d || m || L) && this.resetInitSegment(E, p, x, v, t), (c || m || L) && this.resetInitialTimestamp(y), u || this.resetContiguity(); const w = this.transmux(a, T, f, h, s); this.asyncResult = cr(w); const I = this.currentTransmuxState; return I.contiguous = !0, I.discontinuity = !1, I.trackSwitch = !1, r.executeEnd = li(), w; }
    flush(e) { const t = e.transmuxing; t.executeStart = li(); const { decrypter: s, currentTransmuxState: n, decryptionPromise: r } = this; if (r)
        return this.asyncResult = !0, r.then(() => this.flush(e)); const a = [], { timeOffset: o } = n; if (s) {
        const d = s.flush();
        d && a.push(this.push(d.buffer, null, e));
    } const { demuxer: l, remuxer: u } = this; if (!l || !u) {
        t.executeEnd = li();
        const d = [pl(e)];
        return this.asyncResult ? Promise.resolve(d) : d;
    } const c = l.flush(o); return cr(c) ? (this.asyncResult = !0, c.then(d => (this.flushRemux(a, d, e), a))) : (this.flushRemux(a, c, e), this.asyncResult ? Promise.resolve(a) : a); }
    flushRemux(e, t, s) { const { audioTrack: n, videoTrack: r, id3Track: a, textTrack: o } = t, { accurateTimeOffset: l, timeOffset: u } = this.currentTransmuxState; this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${s.sn}${s.part > -1 ? " part: " + s.part : ""} of ${this.id === z.MAIN ? "level" : "track"} ${s.level}`); const c = this.remuxer.remux(n, r, a, o, u, l, !0, this.id); e.push({ remuxResult: c, chunkMeta: s }), s.transmuxing.executeEnd = li(); }
    resetInitialTimestamp(e) { const { demuxer: t, remuxer: s } = this; !t || !s || (t.resetTimeStamp(e), s.resetTimeStamp(e)); }
    resetContiguity() { const { demuxer: e, remuxer: t } = this; !e || !t || (e.resetContiguity(), t.resetNextTimestamp()); }
    resetInitSegment(e, t, s, n, r) { const { demuxer: a, remuxer: o } = this; !a || !o || (a.resetInitSegment(e, t, s, n), o.resetInitSegment(e, t, s, r)); }
    destroy() { this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0); }
    transmux(e, t, s, n, r) { let a; return t && t.method === "SAMPLE-AES" ? a = this.transmuxSampleAes(e, t, s, n, r) : a = this.transmuxUnencrypted(e, s, n, r), a; }
    transmuxUnencrypted(e, t, s, n) { const { audioTrack: r, videoTrack: a, id3Track: o, textTrack: l } = this.demuxer.demux(e, t, !1, !this.config.progressive); return { remuxResult: this.remuxer.remux(r, a, o, l, t, s, !1, this.id), chunkMeta: n }; }
    transmuxSampleAes(e, t, s, n, r) { return this.demuxer.demuxSampleAes(e, t, s).then(a => ({ remuxResult: this.remuxer.remux(a.audioTrack, a.videoTrack, a.id3Track, a.textTrack, s, n, !1, this.id), chunkMeta: r })); }
    configureTransmuxer(e) { const { config: t, observer: s, typeSupported: n } = this; let r; for (let d = 0, h = xa.length; d < h; d++) {
        var a;
        if ((a = xa[d].demux) != null && a.probe(e, this.logger)) {
            r = xa[d];
            break;
        }
    } if (!r)
        return new Error("Failed to find demuxer by probing fragment data"); const o = this.demuxer, l = this.remuxer, u = r.remux, c = r.demux; (!l || !(l instanceof u)) && (this.remuxer = new u(s, t, n, this.logger)), (!o || !(o instanceof c)) && (this.demuxer = new c(s, t, n, this.logger), this.probe = c.probe); }
    needsProbing(e, t) { return !this.demuxer || !this.remuxer || e || t; }
    getDecrypter() { let e = this.decrypter; return e || (e = this.decrypter = new qc(this.config)), e; }
}
function aL(i, e) { let t = null; return i.byteLength > 0 && (e == null ? void 0 : e.key) != null && e.iv !== null && e.method != null && (t = e), t; }
const pl = i => ({ remuxResult: {}, chunkMeta: i });
function cr(i) { return "then" in i && i.then instanceof Function; }
class oL {
    constructor(e, t, s, n, r) { this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = s, this.duration = n, this.defaultInitPts = r || null; }
}
class lL {
    constructor(e, t, s, n, r, a) { this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = s, this.trackSwitch = n, this.timeOffset = r, this.initSegmentChange = a; }
}
let wf = 0;
class Dp {
    constructor(e, t, s, n) { this.error = null, this.hls = void 0, this.id = void 0, this.instanceNo = wf++, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.onWorkerMessage = l => { const u = l.data, c = this.hls; if (!(!c || !(u != null && u.event) || u.instanceNo !== this.instanceNo))
        switch (u.event) {
            case "init": {
                var d;
                const h = (d = this.workerContext) == null ? void 0 : d.objectURL;
                h && self.URL.revokeObjectURL(h);
                break;
            }
            case "transmuxComplete": {
                this.handleTransmuxComplete(u.data);
                break;
            }
            case "flush": {
                this.onFlush(u.data);
                break;
            }
            case "workerLog": {
                c.logger[u.data.logType] && c.logger[u.data.logType](u.data.message);
                break;
            }
            default: {
                u.data = u.data || {}, u.data.frag = this.frag, u.data.part = this.part, u.data.id = this.id, c.trigger(u.event, u.data);
                break;
            }
        } }, this.onWorkerError = l => { if (!this.hls)
        return; const u = new Error(`${l.message}  (${l.filename}:${l.lineno})`); this.hls.config.enableWorker = !1, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.INTERNAL_EXCEPTION, fatal: !1, event: "demuxerWorker", error: u }); }; const r = e.config; this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = n; const a = (l, u) => { u = u || {}, u.frag = this.frag || void 0, l === S.ERROR && (u = u, u.parent = this.id, u.part = this.part, this.error = u.error), this.hls.trigger(l, u); }; this.observer = new ed, this.observer.on(S.FRAG_DECRYPTED, a), this.observer.on(S.ERROR, a); const o = jh(r.preferManagedMediaSource); if (this.useWorker && typeof Worker < "u") {
        const l = this.hls.logger;
        if (r.workerPath || h1()) {
            try {
                r.workerPath ? (l.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = m1(r.workerPath)) : (l.log(`injecting Web Worker for "${t}"`), this.workerContext = f1());
                const { worker: c } = this.workerContext;
                c.addEventListener("message", this.onWorkerMessage), c.addEventListener("error", this.onWorkerError), c.postMessage({ instanceNo: this.instanceNo, cmd: "init", typeSupported: o, id: t, config: fe(r) });
            }
            catch (c) {
                l.warn(`Error setting up "${t}" Web Worker, fallback to inline`, c), this.terminateWorker(), this.error = null, this.transmuxer = new Rf(this.observer, o, r, "", t, e.logger);
            }
            return;
        }
    } this.transmuxer = new Rf(this.observer, o, r, "", t, e.logger); }
    reset() { if (this.frag = null, this.part = null, this.workerContext) {
        const e = this.instanceNo;
        this.instanceNo = wf++;
        const t = this.hls.config, s = jh(t.preferManagedMediaSource);
        this.workerContext.worker.postMessage({ instanceNo: this.instanceNo, cmd: "reset", resetNo: e, typeSupported: s, id: this.id, config: fe(t) });
    } }
    terminateWorker() { if (this.workerContext) {
        const { worker: e } = this.workerContext;
        this.workerContext = null, e.removeEventListener("message", this.onWorkerMessage), e.removeEventListener("error", this.onWorkerError), g1(this.hls.config.workerPath);
    } }
    destroy() { if (this.workerContext)
        this.terminateWorker(), this.onWorkerMessage = this.onWorkerError = null;
    else {
        const t = this.transmuxer;
        t && (t.destroy(), this.transmuxer = null);
    } const e = this.observer; e && e.removeAllListeners(), this.frag = null, this.part = null, this.observer = null, this.hls = null; }
    push(e, t, s, n, r, a, o, l, u, c) {
        var d, h;
        u.transmuxing.start = self.performance.now();
        const { instanceNo: f, transmuxer: m } = this, p = a ? a.start : r.start, x = r.decryptdata, y = this.frag, v = !(y && r.cc === y.cc), E = !(y && u.level === y.level), T = y ? u.sn - y.sn : -1, L = this.part ? u.part - this.part.index : -1, w = T === 0 && u.id > 1 && u.id === (y == null ? void 0 : y.stats.chunkCount), I = !E && (T === 1 || T === 0 && (L === 1 || w && L <= 0)), R = self.performance.now();
        (E || T || r.stats.parsing.start === 0) && (r.stats.parsing.start = R), a && (L || !I) && (a.stats.parsing.start = R);
        const _ = !(y && ((d = r.initSegment) == null ? void 0 : d.url) === ((h = y.initSegment) == null ? void 0 : h.url)), A = new lL(v, I, l, E, p, _);
        if (!I || v || _) {
            this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${r.type} sn: ${u.sn}${u.part > -1 ? " part: " + u.part : ""} ${this.id === z.MAIN ? "level" : "track"}: ${u.level} id: ${u.id}
        discontinuity: ${v}
        trackSwitch: ${E}
        contiguous: ${I}
        accurateTimeOffset: ${l}
        timeOffset: ${p}
        initSegmentChange: ${_}`);
            const D = new oL(s, n, t, o, c);
            this.configureTransmuxer(D);
        }
        if (this.frag = r, this.part = a, this.workerContext)
            this.workerContext.worker.postMessage({ instanceNo: f, cmd: "demux", data: e, decryptdata: x, chunkMeta: u, state: A }, e instanceof ArrayBuffer ? [e] : []);
        else if (m) {
            const D = m.push(e, x, u, A);
            cr(D) ? D.then(B => { this.handleTransmuxComplete(B); }).catch(B => { this.transmuxerError(B, u, "transmuxer-interface push error"); }) : this.handleTransmuxComplete(D);
        }
    }
    flush(e) { e.transmuxing.start = self.performance.now(); const { instanceNo: t, transmuxer: s } = this; if (this.workerContext)
        this.workerContext.worker.postMessage({ instanceNo: t, cmd: "flush", chunkMeta: e });
    else if (s) {
        const n = s.flush(e);
        cr(n) ? n.then(r => { this.handleFlushResult(r, e); }).catch(r => { this.transmuxerError(r, e, "transmuxer-interface flush error"); }) : this.handleFlushResult(n, e);
    } }
    transmuxerError(e, t, s) { this.hls && (this.error = e, this.hls.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.FRAG_PARSING_ERROR, chunkMeta: t, frag: this.frag || void 0, part: this.part || void 0, fatal: !1, error: e, err: e, reason: s })); }
    handleFlushResult(e, t) { e.forEach(s => { this.handleTransmuxComplete(s); }), this.onFlush(t); }
    configureTransmuxer(e) { const { instanceNo: t, transmuxer: s } = this; this.workerContext ? this.workerContext.worker.postMessage({ instanceNo: t, cmd: "configure", config: e }) : s && s.configure(e); }
    handleTransmuxComplete(e) { e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e); }
}
const _f = 100;
class uL extends Jc {
    constructor(e, t, s) { super(e, t, s, "audio-stream-controller", z.AUDIO), this.mainAnchor = null, this.mainFragLoading = null, this.audioOnly = !1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this.registerListeners(); }
    onHandlerDestroying() { this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem(); }
    resetItem() { this.mainDetails = this.mainAnchor = this.mainFragLoading = this.bufferedTrack = this.switchingTrack = this.waitingData = this.cachedTrackLoadedData = null; }
    registerListeners() { super.registerListeners(); const { hls: e } = this; e.on(S.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(S.BUFFER_RESET, this.onBufferReset, this), e.on(S.BUFFER_CREATED, this.onBufferCreated, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(S.FRAG_LOADING, this.onFragLoading, this), e.on(S.FRAG_BUFFERED, this.onFragBuffered, this); }
    unregisterListeners() { const { hls: e } = this; e && (super.unregisterListeners(), e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(S.BUFFER_RESET, this.onBufferReset, this), e.off(S.BUFFER_CREATED, this.onBufferCreated, this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(S.FRAG_LOADING, this.onFragLoading, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered, this)); }
    onInitPtsFound(e, { frag: t, id: s, initPTS: n, timescale: r, trackId: a }) { if (s === z.MAIN) {
        const o = t.cc, l = this.fragCurrent;
        if (this.initPTS[o] = { baseTime: n, timescale: r, trackId: a }, this.log(`InitPTS for cc: ${o} found from main: ${n / r} (${n}/${r}) trackId: ${a}`), this.mainAnchor = t, this.state === N.WAITING_INIT_PTS) {
            const u = this.waitingData;
            (!u && !this.loadingParts || u && u.frag.cc !== o) && this.syncWithAnchor(t, u == null ? void 0 : u.frag);
        }
        else
            !this.hls.hasEnoughToStart && l && l.cc !== o ? (l.abortRequests(), this.syncWithAnchor(t, l)) : this.state === N.IDLE && this.tick();
    } }
    getLoadPosition() { return !this.startFragRequested && this.nextLoadPosition >= 0 ? this.nextLoadPosition : super.getLoadPosition(); }
    syncWithAnchor(e, t) { var s; const n = ((s = this.mainFragLoading) == null ? void 0 : s.frag) || null; if (t && (n == null ? void 0 : n.cc) === t.cc)
        return; const r = (n || e).cc, a = this.getLevelDetails(), o = this.getLoadPosition(), l = Yg(a, r, o); l && (this.log(`Syncing with main frag at ${l.start} cc ${l.cc}`), this.startFragRequested = !1, this.nextLoadPosition = l.start, this.resetLoadingState(), this.state === N.IDLE && this.doTickIdle()); }
    startLoad(e, t) { if (!this.levels) {
        this.startPosition = e, this.state = N.STOPPED;
        return;
    } const s = this.lastCurrentTime; this.stopLoad(), this.setInterval(_f), s > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s, this.state = N.IDLE) : this.state = N.WAITING_TRACK, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick(); }
    doTick() { switch (this.state) {
        case N.IDLE:
            this.doTickIdle();
            break;
        case N.WAITING_TRACK: {
            const { levels: e, trackId: t } = this, s = e == null ? void 0 : e[t], n = s == null ? void 0 : s.details;
            if (n && !this.waitForLive(s)) {
                if (this.waitForCdnTuneIn(n))
                    break;
                this.state = N.WAITING_INIT_PTS;
            }
            break;
        }
        case N.FRAG_LOADING_WAITING_RETRY: {
            this.checkRetryDate();
            break;
        }
        case N.WAITING_INIT_PTS: {
            const e = this.waitingData;
            if (e) {
                const { frag: t, part: s, cache: n, complete: r } = e, a = this.mainAnchor;
                if (this.initPTS[t.cc] !== void 0) {
                    this.waitingData = null, this.state = N.FRAG_LOADING;
                    const o = n.flush().buffer, l = { frag: t, part: s, payload: o, networkDetails: null };
                    this._handleFragmentLoadProgress(l), r && super._handleFragmentLoadComplete(l);
                }
                else
                    a && a.cc !== e.frag.cc && this.syncWithAnchor(a, e.frag);
            }
            else
                this.state = N.IDLE;
        }
    } this.onTickEnd(); }
    resetLoadingState() { const e = this.waitingData; e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null), super.resetLoadingState(); }
    onTickEnd() { const { media: e } = this; e != null && e.readyState && (this.lastCurrentTime = e.currentTime); }
    doTickIdle() { var e; const { hls: t, levels: s, media: n, trackId: r } = this, a = t.config; if (!this.buffering || !n && !this.primaryPrefetch && (this.startFragRequested || !a.startFragPrefetch) || !(s != null && s[r]))
        return; const o = s[r], l = o.details; if (!l || this.waitForLive(o) || this.waitForCdnTuneIn(l)) {
        this.state = N.WAITING_TRACK, this.startFragRequested = !1;
        return;
    } const u = this.mediaBuffer ? this.mediaBuffer : this.media; this.bufferFlushed && u && (this.bufferFlushed = !1, this.afterBufferFlushed(u, he.AUDIO, z.AUDIO)); const c = this.getFwdBufferInfo(u, z.AUDIO); if (c === null)
        return; if (!this.switchingTrack && this._streamEnded(c, l)) {
        t.trigger(S.BUFFER_EOS, { type: "audio" }), this.state = N.ENDED;
        return;
    } const d = c.len, h = t.maxBufferLength, f = l.fragments, m = f[0].start, p = this.getLoadPosition(), x = this.flushing ? p : c.end; if (this.switchingTrack && n) {
        const E = p;
        l.PTSKnown && E < m && (c.end > m || c.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), n.currentTime = m + .05);
    } if (d >= h && !this.switchingTrack && x < f[f.length - 1].start)
        return; let y = this.getNextFragment(x, l); if (y && this.isLoopLoading(y, x) && (y = this.getNextFragmentLoopLoading(y, l, c, z.MAIN, h)), !y) {
        this.bufferFlushed = !0;
        return;
    } let v = ((e = this.mainFragLoading) == null ? void 0 : e.frag) || null; if (!this.audioOnly && this.startFragRequested && v && be(y) && !y.endList && (!l.live || !this.loadingParts && x < this.hls.liveSyncPosition) && (this.fragmentTracker.getState(v) === Pe.OK && (this.mainFragLoading = v = null), v && be(v))) {
        if (y.start > v.end) {
            const T = this.fragmentTracker.getFragAtPos(x, z.MAIN);
            T && T.end > v.end && (v = T, this.mainFragLoading = { frag: T, targetBufferTime: null });
        }
        if (y.start > v.end)
            return;
    } this.loadFragment(y, o, x); }
    onMediaDetaching(e, t) { this.bufferFlushed = this.flushing = !1, super.onMediaDetaching(e, t); }
    onAudioTracksUpdated(e, { audioTracks: t }) { this.resetTransmuxer(), this.levels = t.map(s => new or(s)); }
    onAudioTrackSwitching(e, t) { const s = !!t.url; this.trackId = t.id; const { fragCurrent: n } = this; n && (n.abortRequests(), this.removeUnbufferedFrags(n.start)), this.resetLoadingState(), s ? (this.switchingTrack = t, this.flushAudioIfNeeded(t), this.state !== N.STOPPED && (this.setInterval(_f), this.state = N.IDLE, this.tick())) : (this.resetTransmuxer(), this.switchingTrack = null, this.bufferedTrack = t, this.clearInterval()); }
    onManifestLoading() { super.onManifestLoading(), this.bufferFlushed = this.flushing = this.audioOnly = !1, this.resetItem(), this.trackId = -1; }
    onLevelLoaded(e, t) { this.mainDetails = t.details; const s = this.cachedTrackLoadedData; s && (this.cachedTrackLoadedData = null, this.onAudioTrackLoaded(S.AUDIO_TRACK_LOADED, s)); }
    onAudioTrackLoaded(e, t) { var s; const { levels: n } = this, { details: r, id: a, groupId: o, track: l } = t; if (!n) {
        this.warn(`Audio tracks reset while loading track ${a} "${l.name}" of "${o}"`);
        return;
    } const u = this.mainDetails; if (!u || r.endCC > u.endCC || u.expired) {
        this.cachedTrackLoadedData = t, this.state !== N.STOPPED && (this.state = N.WAITING_TRACK);
        return;
    } this.cachedTrackLoadedData = null, this.log(`Audio track ${a} "${l.name}" of "${o}" loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""},duration:${r.totalduration}`); const c = n[a]; let d = 0; if (r.live || (s = c.details) != null && s.live) {
        if (this.checkLiveUpdate(r), r.deltaUpdateFailed)
            return;
        if (c.details) {
            var h;
            d = this.alignPlaylists(r, c.details, (h = this.levelLastLoaded) == null ? void 0 : h.details);
        }
        r.alignedSliding || (hp(r, u), r.alignedSliding || so(r, u), d = r.fragmentStart);
    } c.details = r, this.levelLastLoaded = c, this.startFragRequested || this.setStartPosition(u, d), this.hls.trigger(S.AUDIO_TRACK_UPDATED, { details: r, id: a, groupId: t.groupId }), this.state === N.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = N.IDLE), this.tick(); }
    _handleFragmentLoadProgress(e) { var t; const s = e.frag, { part: n, payload: r } = e, { config: a, trackId: o, levels: l } = this; if (!l) {
        this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
        return;
    } const u = l[o]; if (!u) {
        this.warn("Audio track is undefined on fragment load progress");
        return;
    } const c = u.details; if (!c) {
        this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
        return;
    } const d = a.defaultAudioCodec || u.audioCodec || "mp4a.40.2"; let h = this.transmuxer; h || (h = this.transmuxer = new Dp(this.hls, z.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this))); const f = this.initPTS[s.cc], m = (t = s.initSegment) == null ? void 0 : t.data; if (f !== void 0) {
        const x = n ? n.index : -1, y = x !== -1, v = new Qc(s.level, s.sn, s.stats.chunkCount, r.byteLength, x, y);
        h.push(r, m, d, "", s, n, c.totalduration, !1, v, f);
    }
    else {
        this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${c.startSN} ,${c.endSN}],track ${o}`);
        const { cache: p } = this.waitingData = this.waitingData || { frag: s, part: n, cache: new fp, complete: !1 };
        p.push(new Uint8Array(r)), this.state !== N.STOPPED && (this.state = N.WAITING_INIT_PTS);
    } }
    _handleFragmentLoadComplete(e) { if (this.waitingData) {
        this.waitingData.complete = !0;
        return;
    } super._handleFragmentLoadComplete(e); }
    onBufferReset() { this.mediaBuffer = null; }
    onBufferCreated(e, t) { this.bufferFlushed = this.flushing = !1; const s = t.tracks.audio; s && (this.mediaBuffer = s.buffer || null); }
    onFragLoading(e, t) { !this.audioOnly && t.frag.type === z.MAIN && be(t.frag) && (this.mainFragLoading = t, this.state === N.IDLE && this.tick()); }
    onFragBuffered(e, t) { const { frag: s, part: n } = t; if (s.type !== z.AUDIO) {
        !this.audioOnly && s.type === z.MAIN && !s.elementaryStreams.video && !s.elementaryStreams.audiovideo && (this.audioOnly = !0, this.mainFragLoading = null);
        return;
    } if (this.fragContextChanged(s)) {
        this.warn(`Fragment ${s.sn}${n ? " p: " + n.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
        return;
    } if (be(s)) {
        this.fragPrevious = s;
        const r = this.switchingTrack;
        r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(S.AUDIO_TRACK_SWITCHED, oe({}, r)));
    } this.fragBufferedComplete(s, n), this.media && this.tick(); }
    onError(e, t) { var s; if (t.fatal) {
        this.state = N.ERROR;
        return;
    } switch (t.details) {
        case k.FRAG_GAP:
        case k.FRAG_PARSING_ERROR:
        case k.FRAG_DECRYPT_ERROR:
        case k.FRAG_LOAD_ERROR:
        case k.FRAG_LOAD_TIMEOUT:
        case k.KEY_LOAD_ERROR:
        case k.KEY_LOAD_TIMEOUT:
            this.onFragmentOrKeyLoadError(z.AUDIO, t);
            break;
        case k.AUDIO_TRACK_LOAD_ERROR:
        case k.AUDIO_TRACK_LOAD_TIMEOUT:
        case k.LEVEL_PARSING_ERROR:
            !t.levelRetry && this.state === N.WAITING_TRACK && ((s = t.context) == null ? void 0 : s.type) === se.AUDIO_TRACK && (this.state = N.IDLE);
            break;
        case k.BUFFER_ADD_CODEC_ERROR:
        case k.BUFFER_APPEND_ERROR:
            if (t.parent !== "audio")
                return;
            this.reduceLengthAndFlushBuffer(t) || this.resetLoadingState();
            break;
        case k.BUFFER_FULL_ERROR:
            if (t.parent !== "audio")
                return;
            this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
            break;
        case k.INTERNAL_EXCEPTION:
            this.recoverWorkerError(t);
            break;
    } }
    onBufferFlushing(e, { type: t }) { t !== he.VIDEO && (this.flushing = !0); }
    onBufferFlushed(e, { type: t }) { if (t !== he.VIDEO) {
        this.flushing = !1, this.bufferFlushed = !0, this.state === N.ENDED && (this.state = N.IDLE);
        const s = this.mediaBuffer || this.media;
        s && (this.afterBufferFlushed(s, t, z.AUDIO), this.tick());
    } }
    _handleTransmuxComplete(e) { var t; const s = "audio", { hls: n } = this, { remuxResult: r, chunkMeta: a } = e, o = this.getCurrentContext(a); if (!o) {
        this.resetWhenMissingContext(a);
        return;
    } const { frag: l, part: u, level: c } = o, { details: d } = c, { audio: h, text: f, id3: m, initSegment: p } = r; if (this.fragContextChanged(l) || !d) {
        this.fragmentTracker.removeFragment(l);
        return;
    } if (this.state = N.PARSING, this.switchingTrack && h && this.completeAudioSwitch(this.switchingTrack), p != null && p.tracks) {
        const x = l.initSegment || l;
        if (this.unhandledEncryptionError(p, l))
            return;
        this._bufferInitSegment(c, p.tracks, x, a), n.trigger(S.FRAG_PARSING_INIT_SEGMENT, { frag: x, id: s, tracks: p.tracks });
    } if (h) {
        const { startPTS: x, endPTS: y, startDTS: v, endDTS: E } = h;
        u && (u.elementaryStreams[he.AUDIO] = { startPTS: x, endPTS: y, startDTS: v, endDTS: E }), l.setElementaryStreamInfo(he.AUDIO, x, y, v, E), this.bufferFragmentData(h, l, u, a);
    } if (m != null && (t = m.samples) != null && t.length) {
        const x = ce({ id: s, frag: l, details: d }, m);
        n.trigger(S.FRAG_PARSING_METADATA, x);
    } if (f) {
        const x = ce({ id: s, frag: l, details: d }, f);
        n.trigger(S.FRAG_PARSING_USERDATA, x);
    } }
    _bufferInitSegment(e, t, s, n) { if (this.state !== N.PARSING || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio))
        return; const r = t.audio; r.id = z.AUDIO; const a = e.audioCodec; this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${a}/${r.codec}]`), a && a.split(",").length === 1 && (r.levelCodec = a), this.hls.trigger(S.BUFFER_CODECS, t); const o = r.initSegment; if (o != null && o.byteLength) {
        const l = { type: "audio", frag: s, part: null, chunkMeta: n, parent: s.type, data: o };
        this.hls.trigger(S.BUFFER_APPENDING, l);
    } this.tickImmediate(); }
    loadFragment(e, t, s) { const n = this.fragmentTracker.getState(e); if (this.switchingTrack || n === Pe.NOT_LOADED || n === Pe.PARTIAL) {
        var r;
        if (!be(e))
            this._loadInitSegment(e, t);
        else if ((r = t.details) != null && r.live && !this.initPTS[e.cc]) {
            this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = N.WAITING_INIT_PTS;
            const a = this.mainDetails;
            a && a.fragmentStart !== t.details.fragmentStart && so(t.details, a);
        }
        else
            super.loadFragment(e, t, s);
    }
    else
        this.clearTrackerIfNeeded(e); }
    flushAudioIfNeeded(e) { if (this.media && this.bufferedTrack) {
        const { name: t, lang: s, assocLang: n, characteristics: r, audioCodec: a, channels: o } = this.bufferedTrack;
        ls({ name: t, lang: s, assocLang: n, characteristics: r, audioCodec: a, channels: o }, e, is) || (Za(e.url, this.hls) ? (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null) : this.bufferedTrack = e);
    } }
    completeAudioSwitch(e) { const { hls: t } = this; this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(S.AUDIO_TRACK_SWITCHED, oe({}, e)); }
}
class od extends _t {
    constructor(e, t) { super(t, e.logger), this.hls = void 0, this.canLoad = !1, this.timer = -1, this.hls = e; }
    destroy() { this.clearTimer(), this.hls = this.log = this.warn = null; }
    clearTimer() { this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1); }
    startLoad() { this.canLoad = !0, this.loadPlaylist(); }
    stopLoad() { this.canLoad = !1, this.clearTimer(); }
    switchParams(e, t, s) { const n = t == null ? void 0 : t.renditionReports; if (n) {
        let r = -1;
        for (let a = 0; a < n.length; a++) {
            const o = n[a];
            let l;
            try {
                l = new self.URL(o.URI, t.url).href;
            }
            catch (u) {
                this.warn(`Could not construct new URL for Rendition Report: ${u}`), l = o.URI || "";
            }
            if (l === e) {
                r = a;
                break;
            }
            else
                l === e.substring(0, l.length) && (r = a);
        }
        if (r !== -1) {
            const a = n[r], o = parseInt(a["LAST-MSN"]) || t.lastPartSn;
            let l = parseInt(a["LAST-PART"]) || t.lastPartIndex;
            if (this.hls.config.lowLatencyMode) {
                const c = Math.min(t.age - t.partTarget, t.targetduration);
                l >= 0 && c > t.partTarget && (l += 1);
            }
            const u = s && Gh(s);
            return new Vh(o, l >= 0 ? l : void 0, u);
        }
    } }
    loadPlaylist(e) { this.clearTimer(); }
    loadingPlaylist(e, t) { this.clearTimer(); }
    shouldLoadPlaylist(e) { return this.canLoad && !!e && !!e.url && (!e.details || e.details.live); }
    getUrlWithDirectives(e, t) { if (t)
        try {
            return t.addDirectives(e);
        }
        catch (s) {
            this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`);
        } return e; }
    playlistLoaded(e, t, s) { const { details: n, stats: r } = t, a = self.performance.now(), o = r.loading.first ? Math.max(0, a - r.loading.first) : 0; n.advancedDateTime = Date.now() - o; const l = this.hls.config.timelineOffset; if (l !== n.appliedTimelineOffset) {
        const c = Math.max(l || 0, 0);
        n.appliedTimelineOffset = c, n.fragments.forEach(d => { d.setStart(d.playlistOffset + c); });
    } if (n.live || s != null && s.live) {
        const c = "levelInfo" in t ? t.levelInfo : t.track;
        if (n.reloaded(s), s && n.fragments.length > 0) {
            t1(s, n, this);
            const v = n.playlistParsingError;
            if (v) {
                this.warn(v);
                const E = this.hls;
                if (!E.config.ignorePlaylistParsingErrors) {
                    var u;
                    const { networkDetails: T } = t;
                    E.trigger(S.ERROR, { type: q.NETWORK_ERROR, details: k.LEVEL_PARSING_ERROR, fatal: !1, url: n.url, error: v, reason: v.message, level: t.level || void 0, parent: (u = n.fragments[0]) == null ? void 0 : u.type, networkDetails: T, stats: r });
                    return;
                }
                n.playlistParsingError = null;
            }
        }
        n.requestScheduled === -1 && (n.requestScheduled = r.loading.start);
        const d = this.hls.mainForwardBufferInfo, h = d ? d.end - d.len : 0, f = (n.edge - h) * 1e3, m = op(n, f);
        if (n.requestScheduled + m < a ? n.requestScheduled = a : n.requestScheduled += m, this.log(`live playlist ${e} ${n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : n.updated ? "UPDATED" : "MISSED"}`), !this.canLoad || !n.live)
            return;
        let p, x, y;
        if (n.canBlockReload && n.endSN && n.advanced) {
            const v = this.hls.config.lowLatencyMode, E = n.lastPartSn, T = n.endSN, L = n.lastPartIndex, w = L !== -1, I = E === T;
            w ? I ? (x = T + 1, y = v ? 0 : L) : (x = E, y = v ? L + 1 : n.maxPartIndex) : x = T + 1;
            const R = n.age, _ = R + n.ageHeader;
            let A = Math.min(_ - n.partTarget, n.targetduration * 1.5);
            if (A > 0) {
                if (_ > n.targetduration * 3)
                    this.log(`Playlist last advanced ${R.toFixed(2)}s ago. Omitting segment and part directives.`), x = void 0, y = void 0;
                else if (s != null && s.tuneInGoal && _ - n.partTarget > s.tuneInGoal)
                    this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${A} with playlist age: ${n.age}`), A = 0;
                else {
                    const D = Math.floor(A / n.targetduration);
                    if (x += D, y !== void 0) {
                        const B = Math.round(A % n.targetduration / n.partTarget);
                        y += B;
                    }
                    this.log(`CDN Tune-in age: ${n.ageHeader}s last advanced ${R.toFixed(2)}s goal: ${A} skip sn ${D} to part ${y}`);
                }
                n.tuneInGoal = A;
            }
            if (p = this.getDeliveryDirectives(n, t.deliveryDirectives, x, y), v || !I) {
                n.requestScheduled = a, this.loadingPlaylist(c, p);
                return;
            }
        }
        else
            (n.canBlockReload || n.canSkipUntil) && (p = this.getDeliveryDirectives(n, t.deliveryDirectives, x, y));
        p && x !== void 0 && n.canBlockReload && (n.requestScheduled = r.loading.first + Math.max(m - o * 2, m / 2)), this.scheduleLoading(c, p, n);
    }
    else
        this.clearTimer(); }
    scheduleLoading(e, t, s) { const n = s || e.details; if (!n) {
        this.loadingPlaylist(e, t);
        return;
    } const r = self.performance.now(), a = n.requestScheduled; if (r >= a) {
        this.loadingPlaylist(e, t);
        return;
    } const o = a - r; this.log(`reload live playlist ${e.name || e.bitrate + "bps"} in ${Math.round(o)} ms`), this.clearTimer(), this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), o); }
    getDeliveryDirectives(e, t, s, n) { let r = Gh(e); return t != null && t.skip && e.deltaUpdateFailed && (s = t.msn, n = t.part, r = pa.No), new Vh(s, n, r); }
    checkRetry(e) { const t = e.details, s = Ja(e), n = e.errorAction, { action: r, retryCount: a = 0, retryConfig: o } = n || {}, l = !!n && !!o && (r === $e.RetryRequest || !n.resolved && r === $e.SendAlternateToPenaltyBox); if (l) {
        var u;
        if (a >= o.maxNumRetry)
            return !1;
        if (s && (u = e.context) != null && u.deliveryDirectives)
            this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
        else {
            const c = Yc(o, a);
            this.clearTimer(), this.timer = self.setTimeout(() => this.loadPlaylist(), c), this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" in ${c}ms`);
        }
        e.levelRetry = !0, n.resolved = !0;
    } return l; }
}
function Pp(i, e) { if (i.length !== e.length)
    return !1; for (let t = 0; t < i.length; t++)
    if (!dr(i[t].attrs, e[t].attrs))
        return !1; return !0; }
function dr(i, e, t) { const s = i["STABLE-RENDITION-ID"]; return s && !t ? s === e["STABLE-RENDITION-ID"] : !(t || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some(n => i[n] !== e[n]); }
function Ou(i, e) { return e.label.toLowerCase() === i.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (i.lang || "").toLowerCase()); }
class cL extends od {
    constructor(e) { super(e, "audio-track-controller"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners(); }
    registerListeners() { const { hls: e } = this; e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.LEVEL_LOADING, this.onLevelLoading, this), e.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(S.ERROR, this.onError, this); }
    unregisterListeners() { const { hls: e } = this; e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.LEVEL_LOADING, this.onLevelLoading, this), e.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(S.ERROR, this.onError, this); }
    destroy() { this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy(); }
    onManifestLoading() { this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0; }
    onManifestParsed(e, t) { this.tracks = t.audioTracks || []; }
    onAudioTrackLoaded(e, t) { const { id: s, groupId: n, details: r } = t, a = this.tracksInGroup[s]; if (!a || a.groupId !== n) {
        this.warn(`Audio track with id:${s} and group:${n} not found in active group ${a == null ? void 0 : a.groupId}`);
        return;
    } const o = a.details; a.details = t.details, this.log(`Audio track ${s} "${a.name}" lang:${a.lang} group:${n} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o); }
    onLevelLoading(e, t) { this.switchLevel(t.level); }
    onLevelSwitching(e, t) { this.switchLevel(t.level); }
    switchLevel(e) { const t = this.hls.levels[e]; if (!t)
        return; const s = t.audioGroups || null, n = this.groupIds; let r = this.currentTrack; if (!s || (n == null ? void 0 : n.length) !== (s == null ? void 0 : s.length) || s != null && s.some(o => (n == null ? void 0 : n.indexOf(o)) === -1)) {
        this.groupIds = s, this.trackId = -1, this.currentTrack = null;
        const o = this.tracks.filter(h => !s || s.indexOf(h.groupId) !== -1);
        if (o.length)
            this.selectDefaultTrack && !o.some(h => h.default) && (this.selectDefaultTrack = !1), o.forEach((h, f) => { h.id = f; });
        else if (!r && !this.tracksInGroup.length)
            return;
        this.tracksInGroup = o;
        const l = this.hls.config.audioPreference;
        if (!r && l) {
            const h = Xt(l, o, is);
            if (h > -1)
                r = o[h];
            else {
                const f = Xt(l, this.tracks);
                r = this.tracks[f];
            }
        }
        let u = this.findTrackId(r);
        u === -1 && r && (u = this.findTrackId(null));
        const c = { audioTracks: o };
        this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s == null ? void 0 : s.join(",")}`), this.hls.trigger(S.AUDIO_TRACKS_UPDATED, c);
        const d = this.trackId;
        if (u !== -1 && d === -1)
            this.setAudioTrack(u);
        else if (o.length && d === -1) {
            var a;
            const h = new Error(`No audio track selected for current audio group-ID(s): ${(a = this.groupIds) == null ? void 0 : a.join(",")} track count: ${o.length}`);
            this.warn(h.message), this.hls.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.AUDIO_TRACK_LOAD_ERROR, fatal: !0, error: h });
        }
    } }
    onError(e, t) { t.fatal || !t.context || t.context.type === se.AUDIO_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t); }
    get allAudioTracks() { return this.tracks; }
    get audioTracks() { return this.tracksInGroup; }
    get audioTrack() { return this.trackId; }
    set audioTrack(e) { this.selectDefaultTrack = !1, this.setAudioTrack(e); }
    setAudioOption(e) { const t = this.hls; if (t.config.audioPreference = e, e) {
        const s = this.allAudioTracks;
        if (this.selectDefaultTrack = !1, s.length) {
            const n = this.currentTrack;
            if (n && ls(e, n, is))
                return n;
            const r = Xt(e, this.tracksInGroup, is);
            if (r > -1) {
                const a = this.tracksInGroup[r];
                return this.setAudioTrack(r), a;
            }
            else if (n) {
                let a = t.loadLevel;
                a === -1 && (a = t.firstAutoLevel);
                const o = TT(e, t.levels, s, a, is);
                if (o === -1)
                    return null;
                t.nextLoadLevel = o;
            }
            if (e.channels || e.audioCodec) {
                const a = Xt(e, s);
                if (a > -1)
                    return s[a];
            }
        }
    } return null; }
    setAudioTrack(e) { const t = this.tracksInGroup; if (e < 0 || e >= t.length) {
        this.warn(`Invalid audio track id: ${e}`);
        return;
    } this.selectDefaultTrack = !1; const s = this.currentTrack, n = t[e], r = n.details && !n.details.live; if (e === this.trackId && n === s && r || (this.log(`Switching to audio-track ${e} "${n.name}" lang:${n.lang} group:${n.groupId} channels:${n.channels}`), this.trackId = e, this.currentTrack = n, this.hls.trigger(S.AUDIO_TRACK_SWITCHING, oe({}, n)), r))
        return; const a = this.switchParams(n.url, s == null ? void 0 : s.details, n.details); this.loadPlaylist(a); }
    findTrackId(e) { const t = this.tracksInGroup; for (let s = 0; s < t.length; s++) {
        const n = t[s];
        if (!(this.selectDefaultTrack && !n.default) && (!e || ls(e, n, is)))
            return s;
    } if (e) {
        const { name: s, lang: n, assocLang: r, characteristics: a, audioCodec: o, channels: l } = e;
        for (let u = 0; u < t.length; u++) {
            const c = t[u];
            if (ls({ name: s, lang: n, assocLang: r, characteristics: a, audioCodec: o, channels: l }, c, is))
                return u;
        }
        for (let u = 0; u < t.length; u++) {
            const c = t[u];
            if (dr(e.attrs, c.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
                return u;
        }
        for (let u = 0; u < t.length; u++) {
            const c = t[u];
            if (dr(e.attrs, c.attrs, ["LANGUAGE"]))
                return u;
        }
    } return -1; }
    loadPlaylist(e) { super.loadPlaylist(); const t = this.currentTrack; this.shouldLoadPlaylist(t) && Za(t.url, this.hls) && this.scheduleLoading(t, e); }
    loadingPlaylist(e, t) { super.loadingPlaylist(e, t); const s = e.id, n = e.groupId, r = this.getUrlWithDirectives(e.url, t), a = e.details, o = a == null ? void 0 : a.age; this.log(`Loading audio-track ${s} "${e.name}" lang:${e.lang} group:${n}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${r}`), this.hls.trigger(S.AUDIO_TRACK_LOADING, { url: r, id: s, groupId: n, deliveryDirectives: t || null, track: e }); }
}
class dL {
    constructor(e) { this.tracks = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.tracks = e; }
    destroy() { this.tracks = this.queues = null; }
    append(e, t, s) { if (this.queues === null || this.tracks === null)
        return; const n = this.queues[t]; n.push(e), n.length === 1 && !s && this.executeNext(t); }
    appendBlocker(e) { return new Promise(t => { const s = { label: "async-blocker", execute: t, onStart: () => { }, onComplete: () => { }, onError: () => { } }; this.append(s, e); }); }
    prependBlocker(e) { return new Promise(t => { if (this.queues) {
        const s = { label: "async-blocker-prepend", execute: t, onStart: () => { }, onComplete: () => { }, onError: () => { } };
        this.queues[e].unshift(s);
    } }); }
    removeBlockers() { this.queues !== null && [this.queues.video, this.queues.audio, this.queues.audiovideo].forEach(e => { var t; const s = (t = e[0]) == null ? void 0 : t.label; (s === "async-blocker" || s === "async-blocker-prepend") && (e[0].execute(), e.splice(0, 1)); }); }
    unblockAudio(e) { if (this.queues === null)
        return; this.queues.audio[0] === e && this.shiftAndExecuteNext("audio"); }
    executeNext(e) { if (this.queues === null || this.tracks === null)
        return; const t = this.queues[e]; if (t.length) {
        const n = t[0];
        try {
            n.execute();
        }
        catch (r) {
            var s;
            if (n.onError(r), this.queues === null || this.tracks === null)
                return;
            const a = (s = this.tracks[e]) == null ? void 0 : s.buffer;
            a != null && a.updating || this.shiftAndExecuteNext(e);
        }
    } }
    shiftAndExecuteNext(e) { this.queues !== null && (this.queues[e].shift(), this.executeNext(e)); }
    current(e) { var t; return ((t = this.queues) == null ? void 0 : t[e][0]) || null; }
    toString() {
        const { queues: e, tracks: t } = this;
        return e === null || t === null ? "<destroyed>" : `
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`;
    }
    list(e) { var t, s; return (t = this.queues) != null && t[e] || (s = this.tracks) != null && s[e] ? `${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}` : ""; }
    listSbInfo(e) { var t; const s = (t = this.tracks) == null ? void 0 : t[e], n = s == null ? void 0 : s.buffer; return n ? `SourceBuffer${n.updating ? " updating" : ""}${s.ended ? " ended" : ""}${s.ending ? " ending" : ""}` : "none"; }
    listOps(e) { var t; return ((t = this.queues) == null ? void 0 : t[e].map(s => s.label).join(", ")) || ""; }
}
const bf = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, Np = "HlsJsTrackRemovedError";
class hL extends Error {
    constructor(e) { super(e), this.name = Np; }
}
class fL extends _t {
    constructor(e, t) { super("buffer-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.details = null, this._objectUrl = null, this.operationQueue = null, this.bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0, this.appendSource = void 0, this.transferData = void 0, this.overrides = void 0, this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }, this.tracks = {}, this.sourceBuffers = [[null, null], [null, null]], this._onEndStreaming = s => { var n; this.hls && ((n = this.mediaSource) == null ? void 0 : n.readyState) === "open" && this.hls.pauseBuffering(); }, this._onStartStreaming = s => { this.hls && this.hls.resumeBuffering(); }, this._onMediaSourceOpen = s => { const { media: n, mediaSource: r } = this; s && this.log("Media source opened"), !(!n || !r) && (r.removeEventListener("sourceopen", this._onMediaSourceOpen), n.removeEventListener("emptied", this._onMediaEmptied), this.updateDuration(), this.hls.trigger(S.MEDIA_ATTACHED, { media: n, mediaSource: r }), this.mediaSource !== null && this.checkPendingTracks()); }, this._onMediaSourceClose = () => { this.log("Media source closed"); }, this._onMediaSourceEnded = () => { this.log("Media source ended"); }, this._onMediaEmptied = () => { const { mediaSrc: s, _objectUrl: n } = this; s !== n && this.error(`Media element src was set while attaching MediaSource (${n} > ${s})`); }, this.hls = e, this.fragmentTracker = t, this.appendSource = OS(Vi(e.config.preferManagedMediaSource)), this.initTracks(), this.registerListeners(); }
    hasSourceTypes() { return Object.keys(this.tracks).length > 0; }
    destroy() { this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.transferData = this.overrides = void 0, this.operationQueue && (this.operationQueue.destroy(), this.operationQueue = null), this.hls = this.fragmentTracker = null, this._onMediaSourceOpen = this._onMediaSourceClose = null, this._onMediaSourceEnded = null, this._onStartStreaming = this._onEndStreaming = null; }
    registerListeners() { const { hls: e } = this; e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.BUFFER_RESET, this.onBufferReset, this), e.on(S.BUFFER_APPENDING, this.onBufferAppending, this), e.on(S.BUFFER_CODECS, this.onBufferCodecs, this), e.on(S.BUFFER_EOS, this.onBufferEos, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(S.FRAG_PARSED, this.onFragParsed, this), e.on(S.FRAG_CHANGED, this.onFragChanged, this), e.on(S.ERROR, this.onError, this); }
    unregisterListeners() { const { hls: e } = this; e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.BUFFER_RESET, this.onBufferReset, this), e.off(S.BUFFER_APPENDING, this.onBufferAppending, this), e.off(S.BUFFER_CODECS, this.onBufferCodecs, this), e.off(S.BUFFER_EOS, this.onBufferEos, this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(S.FRAG_PARSED, this.onFragParsed, this), e.off(S.FRAG_CHANGED, this.onFragChanged, this), e.off(S.ERROR, this.onError, this); }
    transferMedia() { const { media: e, mediaSource: t } = this; if (!e)
        return null; const s = {}; if (this.operationQueue) {
        const r = this.isUpdating();
        r || this.operationQueue.removeBlockers();
        const a = this.isQueued();
        (r || a) && this.warn(`Transfering MediaSource with${a ? " operations in queue" : ""}${r ? " updating SourceBuffer(s)" : ""} ${this.operationQueue}`), this.operationQueue.destroy();
    } const n = this.transferData; return !this.sourceBufferCount && n && n.mediaSource === t ? ce(s, n.tracks) : this.sourceBuffers.forEach(r => { const [a] = r; a && (s[a] = ce({}, this.tracks[a]), this.removeBuffer(a)), r[0] = r[1] = null; }), { media: e, mediaSource: t, tracks: s }; }
    initTracks() { const e = {}; this.sourceBuffers = [[null, null], [null, null]], this.tracks = e, this.resetQueue(), this.resetAppendErrors(), this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0; }
    onManifestLoading() { this.bufferCodecEventsTotal = 0, this.details = null; }
    onManifestParsed(e, t) { var s; let n = 2; (t.audio && !t.video || !t.altAudio) && (n = 1), this.bufferCodecEventsTotal = n, this.log(`${n} bufferCodec event(s) expected.`), (s = this.transferData) != null && s.mediaSource && this.sourceBufferCount && n && this.bufferCreated(); }
    onMediaAttaching(e, t) { const s = this.media = t.media; this.transferData = this.overrides = void 0; const n = Vi(this.appendSource); if (n) {
        const r = !!t.mediaSource;
        (r || t.overrides) && (this.transferData = t, this.overrides = t.overrides);
        const a = this.mediaSource = t.mediaSource || new n;
        if (this.assignMediaSource(a), r)
            this._objectUrl = s.src, this.attachTransferred();
        else {
            const o = this._objectUrl = self.URL.createObjectURL(a);
            if (this.appendSource)
                try {
                    s.removeAttribute("src");
                    const l = self.ManagedMediaSource;
                    s.disableRemotePlayback = s.disableRemotePlayback || l && a instanceof l, kf(s), mL(s, o), s.load();
                }
                catch {
                    s.src = o;
                }
            else
                s.src = o;
        }
        s.addEventListener("emptied", this._onMediaEmptied);
    } }
    assignMediaSource(e) { var t, s; this.log(`${((t = this.transferData) == null ? void 0 : t.mediaSource) === e ? "transferred" : "created"} media source: ${(s = e.constructor) == null ? void 0 : s.name}`), e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded), e.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e.addEventListener("startstreaming", this._onStartStreaming), e.addEventListener("endstreaming", this._onEndStreaming)); }
    attachTransferred() {
        const e = this.media, t = this.transferData;
        if (!t || !e)
            return;
        const s = this.tracks, n = t.tracks, r = n ? Object.keys(n) : null, a = r ? r.length : 0, o = () => { Promise.resolve().then(() => { this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen(); }); };
        if (n && r && a) {
            if (!this.tracksReady) {
                this.hls.config.startFragPrefetch = !0, this.log("attachTransferred: waiting for SourceBuffer track info");
                return;
            }
            if (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${fe(s, (l, u) => l === "initSegment" ? void 0 : u)};
transfer tracks: ${fe(n, (l, u) => l === "initSegment" ? void 0 : u)}}`), !kg(n, s)) {
                t.mediaSource = null, t.tracks = void 0;
                const l = e.currentTime, u = this.details, c = Math.max(l, (u == null ? void 0 : u.fragments[0].start) || 0);
                if (c - l > 1) {
                    this.log(`attachTransferred: waiting for playback to reach new tracks start time ${l} -> ${c}`);
                    return;
                }
                this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(n)}"->"${Object.keys(s)}") start time: ${c} currentTime: ${l}`), this.onMediaDetaching(S.MEDIA_DETACHING, {}), this.onMediaAttaching(S.MEDIA_ATTACHING, t), e.currentTime = c;
                return;
            }
            this.transferData = void 0, r.forEach(l => { const u = l, c = n[u]; if (c) {
                const d = c.buffer;
                if (d) {
                    const h = this.fragmentTracker, f = c.id;
                    if (h.hasFragments(f) || h.hasParts(f)) {
                        const x = Z.getBuffered(d);
                        h.detectEvictedFragments(u, x, f, null, !0);
                    }
                    const m = yl(u), p = [u, d];
                    this.sourceBuffers[m] = p, d.updating && this.operationQueue && this.operationQueue.prependBlocker(u), this.trackSourceBuffer(u, c);
                }
            } }), o(), this.bufferCreated();
        }
        else
            this.log("attachTransferred: MediaSource w/o SourceBuffers"), o();
    }
    get mediaSourceOpenOrEnded() { var e; const t = (e = this.mediaSource) == null ? void 0 : e.readyState; return t === "open" || t === "ended"; }
    onMediaDetaching(e, t) { const s = !!t.transferMedia; this.transferData = this.overrides = void 0; const { media: n, mediaSource: r, _objectUrl: a } = this; if (r) {
        if (this.log(`media source ${s ? "transferring" : "detaching"}`), s)
            this.sourceBuffers.forEach(([o]) => { o && this.removeBuffer(o); }), this.resetQueue();
        else {
            if (this.mediaSourceOpenOrEnded) {
                const o = r.readyState === "open";
                try {
                    const l = r.sourceBuffers;
                    for (let u = l.length; u--;)
                        o && l[u].abort(), r.removeSourceBuffer(l[u]);
                    o && r.endOfStream();
                }
                catch (l) {
                    this.warn(`onMediaDetaching: ${l.message} while calling endOfStream`);
                }
            }
            this.sourceBufferCount && this.onBufferReset();
        }
        r.removeEventListener("sourceopen", this._onMediaSourceOpen), r.removeEventListener("sourceended", this._onMediaSourceEnded), r.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (r.removeEventListener("startstreaming", this._onStartStreaming), r.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource = null, this._objectUrl = null;
    } n && (n.removeEventListener("emptied", this._onMediaEmptied), s || (a && self.URL.revokeObjectURL(a), this.mediaSrc === a ? (n.removeAttribute("src"), this.appendSource && kf(n), n.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.media = null), this.hls.trigger(S.MEDIA_DETACHED, t); }
    onBufferReset() { this.sourceBuffers.forEach(([e]) => { e && this.resetBuffer(e); }), this.initTracks(); }
    resetBuffer(e) { var t; const s = (t = this.tracks[e]) == null ? void 0 : t.buffer; if (this.removeBuffer(e), s)
        try {
            var n;
            (n = this.mediaSource) != null && n.sourceBuffers.length && this.mediaSource.removeSourceBuffer(s);
        }
        catch (r) {
            this.warn(`onBufferReset ${e}`, r);
        } delete this.tracks[e]; }
    removeBuffer(e) { this.removeBufferListeners(e), this.sourceBuffers[yl(e)] = [null, null]; const t = this.tracks[e]; t && (t.buffer = void 0); }
    resetQueue() { this.operationQueue && this.operationQueue.destroy(), this.operationQueue = new dL(this.tracks); }
    onBufferCodecs(e, t) { var s; const n = this.tracks, r = Object.keys(t); this.log(`BUFFER_CODECS: "${r}" (current SB count ${this.sourceBufferCount})`); const a = "audiovideo" in t && (n.audio || n.video) || n.audiovideo && ("audio" in t || "video" in t), o = !a && this.sourceBufferCount && this.media && r.some(l => !n[l]); if (a || o) {
        this.warn(`Unsupported transition between "${Object.keys(n)}" and "${r}" SourceBuffers`);
        return;
    } r.forEach(l => { var u, c; const d = t[l], { id: h, codec: f, levelCodec: m, container: p, metadata: x, supplemental: y } = d; let v = n[l]; const E = (u = this.transferData) == null || (u = u.tracks) == null ? void 0 : u[l], T = E != null && E.buffer ? E : v, L = (T == null ? void 0 : T.pendingCodec) || (T == null ? void 0 : T.codec), w = T == null ? void 0 : T.levelCodec; v || (v = n[l] = { buffer: void 0, listeners: [], codec: f, supplemental: y, container: p, levelCodec: m, metadata: x, id: h }); const I = ga(L, w), R = I == null ? void 0 : I.replace(bf, "$1"); let _ = ga(f, m); const A = (c = _) == null ? void 0 : c.replace(bf, "$1"); _ && I && R !== A && (l.slice(0, 5) === "audio" && (_ = Qa(_, this.appendSource)), this.log(`switching codec ${L} to ${_}`), _ !== (v.pendingCodec || v.codec) && (v.pendingCodec = _), v.container = p, this.appendChangeType(l, p, _)); }), (this.tracksReady || this.sourceBufferCount) && (t.tracks = this.sourceBufferTracks), !this.sourceBufferCount && (this.bufferCodecEventsTotal > 1 && !this.tracks.video && !t.video && ((s = t.audio) == null ? void 0 : s.id) === "main" && (this.log("Main audio-only"), this.bufferCodecEventsTotal = 1), this.mediaSourceOpenOrEnded && this.checkPendingTracks()); }
    get sourceBufferTracks() { return Object.keys(this.tracks).reduce((e, t) => { const s = this.tracks[t]; return e[t] = { id: s.id, container: s.container, codec: s.codec, levelCodec: s.levelCodec }, e; }, {}); }
    appendChangeType(e, t, s) { const n = `${t};codecs=${s}`, r = { label: `change-type=${n}`, execute: () => { const a = this.tracks[e]; if (a) {
            const o = a.buffer;
            o != null && o.changeType && (this.log(`changing ${e} sourceBuffer type to ${n}`), o.changeType(n), a.codec = s, a.container = t);
        } this.shiftAndExecuteNext(e); }, onStart: () => { }, onComplete: () => { }, onError: a => { this.warn(`Failed to change ${e} SourceBuffer type`, a); } }; this.append(r, e, this.isPending(this.tracks[e])); }
    blockAudio(e) { var t; const s = e.start, n = s + e.duration * .05; if (((t = this.fragmentTracker.getAppendedFrag(s, z.MAIN)) == null ? void 0 : t.gap) === !0)
        return; const a = { label: "block-audio", execute: () => { var o; const l = this.tracks.video; (this.lastVideoAppendEnd > n || l != null && l.buffer && Z.isBuffered(l.buffer, n) || ((o = this.fragmentTracker.getAppendedFrag(n, z.MAIN)) == null ? void 0 : o.gap) === !0) && (this.blockedAudioAppend = null, this.shiftAndExecuteNext("audio")); }, onStart: () => { }, onComplete: () => { }, onError: o => { this.warn("Error executing block-audio operation", o); } }; this.blockedAudioAppend = { op: a, frag: e }, this.append(a, "audio", !0); }
    unblockAudio() { const { blockedAudioAppend: e, operationQueue: t } = this; e && t && (this.blockedAudioAppend = null, t.unblockAudio(e.op)); }
    onBufferAppending(e, t) { const { tracks: s } = this, { data: n, type: r, parent: a, frag: o, part: l, chunkMeta: u, offset: c } = t, d = u.buffering[r], { sn: h, cc: f } = o, m = self.performance.now(); d.start = m; const p = o.stats.buffering, x = l ? l.stats.buffering : null; p.start === 0 && (p.start = m), x && x.start === 0 && (x.start = m); const y = s.audio; let v = !1; r === "audio" && (y == null ? void 0 : y.container) === "audio/mpeg" && (v = !this.lastMpegAudioChunk || u.id === 1 || this.lastMpegAudioChunk.sn !== u.sn, this.lastMpegAudioChunk = u); const E = s.video, T = E == null ? void 0 : E.buffer; if (T && h !== "initSegment") {
        const I = l || o, R = this.blockedAudioAppend;
        if (r === "audio" && a !== "main" && !this.blockedAudioAppend && !(E.ending || E.ended)) {
            const A = I.start + I.duration * .05, D = T.buffered, B = this.currentOp("video");
            !D.length && !B ? this.blockAudio(I) : !B && !Z.isBuffered(T, A) && this.lastVideoAppendEnd < A && this.blockAudio(I);
        }
        else if (r === "video") {
            const _ = I.end;
            if (R) {
                const A = R.frag.start;
                (_ > A || _ < this.lastVideoAppendEnd || Z.isBuffered(T, A)) && this.unblockAudio();
            }
            this.lastVideoAppendEnd = _;
        }
    } const L = (l || o).start, w = { label: `append-${r}`, execute: () => { var I; d.executeStart = self.performance.now(); const R = (I = this.tracks[r]) == null ? void 0 : I.buffer; R && (v ? this.updateTimestampOffset(R, L, .1, r, h, f) : c !== void 0 && G(c) && this.updateTimestampOffset(R, c, 1e-6, r, h, f)), this.appendExecutor(n, r); }, onStart: () => { }, onComplete: () => { const I = self.performance.now(); d.executeEnd = d.end = I, p.first === 0 && (p.first = I), x && x.first === 0 && (x.first = I); const R = {}; this.sourceBuffers.forEach(([_, A]) => { _ && (R[_] = Z.getBuffered(A)); }), this.appendErrors[r] = 0, r === "audio" || r === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(S.BUFFER_APPENDED, { type: r, frag: o, part: l, chunkMeta: u, parent: o.type, timeRanges: R }); }, onError: I => { var R; const _ = { type: q.MEDIA_ERROR, parent: o.type, details: k.BUFFER_APPEND_ERROR, sourceBufferName: r, frag: o, part: l, chunkMeta: u, error: I, err: I, fatal: !1 }, A = (R = this.media) == null ? void 0 : R.error; if (I.code === DOMException.QUOTA_EXCEEDED_ERR || I.name == "QuotaExceededError" || "quota" in I)
            _.details = k.BUFFER_FULL_ERROR;
        else if (I.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !A)
            _.errorAction = Hs(!0);
        else if (I.name === Np && this.sourceBufferCount === 0)
            _.errorAction = Hs(!0);
        else {
            const D = ++this.appendErrors[r];
            this.warn(`Failed ${D}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${r}" sourceBuffer (${A || "no media error"})`), (D >= this.hls.config.appendErrorMaxRetry || A) && (_.fatal = !0);
        } this.hls.trigger(S.ERROR, _); } }; this.log(`queuing "${r}" append sn: ${h}${l ? " p: " + l.index : ""} of ${o.type === z.MAIN ? "level" : "track"} ${o.level} cc: ${f}`), this.append(w, r, this.isPending(this.tracks[r])); }
    getFlushOp(e, t, s) { return this.log(`queuing "${e}" remove ${t}-${s}`), { label: "remove", execute: () => { this.removeExecutor(e, t, s); }, onStart: () => { }, onComplete: () => { this.hls.trigger(S.BUFFER_FLUSHED, { type: e }); }, onError: n => { this.warn(`Failed to remove ${t}-${s} from "${e}" SourceBuffer`, n); } }; }
    onBufferFlushing(e, t) { const { type: s, startOffset: n, endOffset: r } = t; s ? this.append(this.getFlushOp(s, n, r), s) : this.sourceBuffers.forEach(([a]) => { a && this.append(this.getFlushOp(a, n, r), a); }); }
    onFragParsed(e, t) { const { frag: s, part: n } = t, r = [], a = n ? n.elementaryStreams : s.elementaryStreams; a[he.AUDIOVIDEO] ? r.push("audiovideo") : (a[he.AUDIO] && r.push("audio"), a[he.VIDEO] && r.push("video")); const o = () => { const l = self.performance.now(); s.stats.buffering.end = l, n && (n.stats.buffering.end = l); const u = n ? n.stats : s.stats; this.hls.trigger(S.FRAG_BUFFERED, { frag: s, part: n, stats: u, id: s.type }); }; r.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, r).catch(l => { this.warn(`Fragment buffered callback ${l}`), this.stepOperationQueue(this.sourceBufferTypes); }); }
    onFragChanged(e, t) { this.trimBuffers(); }
    get bufferedToEnd() { return this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e]) => { if (e) {
        const t = this.tracks[e];
        if (t)
            return !t.ended || t.ending;
    } return !1; }); }
    onBufferEos(e, t) { var s; this.sourceBuffers.forEach(([a]) => { if (a) {
        const o = this.tracks[a];
        (!t.type || t.type === a) && (o.ending = !0, o.ended || (o.ended = !0, this.log(`${a} buffer reached EOS`)));
    } }); const n = ((s = this.overrides) == null ? void 0 : s.endOfStream) !== !1; this.sourceBufferCount > 0 && !this.sourceBuffers.some(([a]) => { var o; return a && !((o = this.tracks[a]) != null && o.ended); }) ? n ? (this.log("Queueing EOS"), this.blockUntilOpen(() => { this.tracksEnded(); const { mediaSource: a } = this; if (!a || a.readyState !== "open") {
        a && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${a.readyState}`);
        return;
    } this.log("Calling mediaSource.endOfStream()"), a.endOfStream(), this.hls.trigger(S.BUFFERED_TO_END, void 0); })) : (this.tracksEnded(), this.hls.trigger(S.BUFFERED_TO_END, void 0)) : t.type === "video" && this.unblockAudio(); }
    tracksEnded() { this.sourceBuffers.forEach(([e]) => { if (e !== null) {
        const t = this.tracks[e];
        t && (t.ending = !1);
    } }); }
    onLevelUpdated(e, { details: t }) { t.fragments.length && (this.details = t, this.updateDuration()); }
    updateDuration() { this.blockUntilOpen(() => { const e = this.getDurationAndRange(); e && this.updateMediaSource(e); }); }
    onError(e, t) { if (t.details === k.BUFFER_APPEND_ERROR && t.frag) {
        var s;
        const n = (s = t.errorAction) == null ? void 0 : s.nextAutoLevel;
        G(n) && n !== t.frag.level && this.resetAppendErrors();
    } }
    resetAppendErrors() { this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }; }
    trimBuffers() { const { hls: e, details: t, media: s } = this; if (!s || t === null || !this.sourceBufferCount)
        return; const n = e.config, r = s.currentTime, a = t.levelTargetDuration, o = t.live && n.liveBackBufferLength !== null ? n.liveBackBufferLength : n.backBufferLength; if (G(o) && o >= 0) {
        const u = Math.max(o, a), c = Math.floor(r / a) * a - u;
        this.flushBackBuffer(r, a, c);
    } const l = n.frontBufferFlushThreshold; if (G(l) && l > 0) {
        const u = Math.max(n.maxBufferLength, l), c = Math.max(u, a), d = Math.floor(r / a) * a + c;
        this.flushFrontBuffer(r, a, d);
    } }
    flushBackBuffer(e, t, s) { this.sourceBuffers.forEach(([n, r]) => { if (r) {
        const o = Z.getBuffered(r);
        if (o.length > 0 && s > o.start(0)) {
            var a;
            this.hls.trigger(S.BACK_BUFFER_REACHED, { bufferEnd: s });
            const l = this.tracks[n];
            if ((a = this.details) != null && a.live)
                this.hls.trigger(S.LIVE_BACK_BUFFER_REACHED, { bufferEnd: s });
            else if (l != null && l.ended) {
                this.log(`Cannot flush ${n} back buffer while SourceBuffer is in ended state`);
                return;
            }
            this.hls.trigger(S.BUFFER_FLUSHING, { startOffset: 0, endOffset: s, type: n });
        }
    } }); }
    flushFrontBuffer(e, t, s) { this.sourceBuffers.forEach(([n, r]) => { if (r) {
        const a = Z.getBuffered(r), o = a.length;
        if (o < 2)
            return;
        const l = a.start(o - 1), u = a.end(o - 1);
        if (s > l || e >= l && e <= u)
            return;
        this.hls.trigger(S.BUFFER_FLUSHING, { startOffset: l, endOffset: 1 / 0, type: n });
    } }); }
    getDurationAndRange() { var e; const { details: t, mediaSource: s } = this; if (!t || !this.media || (s == null ? void 0 : s.readyState) !== "open")
        return null; const n = t.edge; if (t.live && this.hls.config.liveDurationInfinity) {
        if (t.fragments.length && s.setLiveSeekableRange) {
            const u = Math.max(0, t.fragmentStart), c = Math.max(u, n);
            return { duration: 1 / 0, start: u, end: c };
        }
        return { duration: 1 / 0 };
    } const r = (e = this.overrides) == null ? void 0 : e.duration; if (r)
        return G(r) ? { duration: r } : null; const a = this.media.duration, o = G(s.duration) ? s.duration : 0; return n > o && n > a || !G(a) ? { duration: n } : null; }
    updateMediaSource({ duration: e, start: t, end: s }) { const n = this.mediaSource; !this.media || !n || n.readyState !== "open" || (n.duration !== e && (G(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), n.duration = e), t !== void 0 && s !== void 0 && (this.log(`MediaSource duration is set to ${n.duration}. Setting seekable range to ${t}-${s}.`), n.setLiveSeekableRange(t, s))); }
    get tracksReady() { const e = this.pendingTrackCount; return e > 0 && (e >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo)); }
    checkPendingTracks() { const { bufferCodecEventsTotal: e, pendingTrackCount: t, tracks: s } = this; if (this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${fe(s)}`), this.tracksReady) {
        var n;
        const r = (n = this.transferData) == null ? void 0 : n.tracks;
        r && Object.keys(r).length ? this.attachTransferred() : this.createSourceBuffers();
    } }
    bufferCreated() { if (this.sourceBufferCount) {
        const e = {};
        this.sourceBuffers.forEach(([t, s]) => { if (t) {
            const n = this.tracks[t];
            e[t] = { buffer: s, container: n.container, codec: n.codec, supplemental: n.supplemental, levelCodec: n.levelCodec, id: n.id, metadata: n.metadata };
        } }), this.hls.trigger(S.BUFFER_CREATED, { tracks: e }), this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`), this.sourceBuffers.forEach(([t]) => { this.executeNext(t); });
    }
    else {
        const e = new Error("could not create source buffer for media codec(s)");
        this.hls.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: !0, error: e, reason: e.message });
    } }
    createSourceBuffers() { const { tracks: e, sourceBuffers: t, mediaSource: s } = this; if (!s)
        throw new Error("createSourceBuffers called when mediaSource was null"); for (const r in e) {
        const a = r, o = e[a];
        if (this.isPending(o)) {
            const l = this.getTrackCodec(o, a), u = `${o.container};codecs=${l}`;
            o.codec = l, this.log(`creating sourceBuffer(${u})${this.currentOp(a) ? " Queued" : ""} ${fe(o)}`);
            try {
                const c = s.addSourceBuffer(u), d = yl(a), h = [a, c];
                t[d] = h, o.buffer = c;
            }
            catch (c) {
                var n;
                this.error(`error while trying to add sourceBuffer: ${c.message}`), this.shiftAndExecuteNext(a), (n = this.operationQueue) == null || n.removeBlockers(), delete this.tracks[a], this.hls.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.BUFFER_ADD_CODEC_ERROR, fatal: !1, error: c, sourceBufferName: a, mimeType: u, parent: o.id });
                return;
            }
            this.trackSourceBuffer(a, o);
        }
    } this.bufferCreated(); }
    getTrackCodec(e, t) { const s = e.supplemental; let n = e.codec; s && (t === "video" || t === "audiovideo") && rr(s, "video") && (n = sT(n, s)); const r = ga(n, e.levelCodec); return r ? t.slice(0, 5) === "audio" ? Qa(r, this.appendSource) : r : ""; }
    trackSourceBuffer(e, t) { const s = t.buffer; if (!s)
        return; const n = this.getTrackCodec(t, e); this.tracks[e] = { buffer: s, codec: n, container: t.container, levelCodec: t.levelCodec, supplemental: t.supplemental, metadata: t.metadata, id: t.id, listeners: [] }, this.removeBufferListeners(e), this.addBufferListener(e, "updatestart", this.onSBUpdateStart), this.addBufferListener(e, "updateend", this.onSBUpdateEnd), this.addBufferListener(e, "error", this.onSBUpdateError), this.appendSource && this.addBufferListener(e, "bufferedchange", (r, a) => { const o = a.removedRanges; o != null && o.length && this.hls.trigger(S.BUFFER_FLUSHED, { type: r }); }); }
    get mediaSrc() { var e, t; const s = ((e = this.media) == null || (t = e.querySelector) == null ? void 0 : t.call(e, "source")) || this.media; return s == null ? void 0 : s.src; }
    onSBUpdateStart(e) { const t = this.currentOp(e); t && t.onStart(); }
    onSBUpdateEnd(e) { var t; if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
        this.resetBuffer(e);
        return;
    } const s = this.currentOp(e); s && (s.onComplete(), this.shiftAndExecuteNext(e)); }
    onSBUpdateError(e, t) { var s; const n = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(s = this.mediaSource) == null ? void 0 : s.readyState}`); this.error(`${n}`, t), this.hls.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.BUFFER_APPENDING_ERROR, sourceBufferName: e, error: n, fatal: !1 }); const r = this.currentOp(e); r && r.onError(n); }
    updateTimestampOffset(e, t, s, n, r, a) { const o = t - e.timestampOffset; Math.abs(o) >= s && (this.log(`Updating ${n} SourceBuffer timestampOffset to ${t} (sn: ${r} cc: ${a})`), e.timestampOffset = t); }
    removeExecutor(e, t, s) { const { media: n, mediaSource: r } = this, a = this.tracks[e], o = a == null ? void 0 : a.buffer; if (!n || !r || !o) {
        this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), this.shiftAndExecuteNext(e);
        return;
    } const l = G(n.duration) ? n.duration : 1 / 0, u = G(r.duration) ? r.duration : 1 / 0, c = Math.max(0, t), d = Math.min(s, l, u); d > c && (!a.ending || a.ended) ? (a.ended = !1, this.log(`Removing [${c},${d}] from the ${e} SourceBuffer`), o.remove(c, d)) : this.shiftAndExecuteNext(e); }
    appendExecutor(e, t) { const s = this.tracks[t], n = s == null ? void 0 : s.buffer; if (!n)
        throw new hL(`Attempting to append to the ${t} SourceBuffer, but it does not exist`); s.ending = !1, s.ended = !1, n.appendBuffer(e); }
    blockUntilOpen(e) { if (this.isUpdating() || this.isQueued())
        this.blockBuffers(e).catch(t => { this.warn(`SourceBuffer blocked callback ${t}`), this.stepOperationQueue(this.sourceBufferTypes); });
    else
        try {
            e();
        }
        catch (t) {
            this.warn(`Callback run without blocking ${this.operationQueue} ${t}`);
        } }
    isUpdating() { return this.sourceBuffers.some(([e, t]) => e && t.updating); }
    isQueued() { return this.sourceBuffers.some(([e]) => e && !!this.currentOp(e)); }
    isPending(e) { return !!e && !e.buffer; }
    blockBuffers(e, t = this.sourceBufferTypes) { if (!t.length)
        return this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e); const { operationQueue: s } = this, n = t.map(a => this.appendBlocker(a)); return t.length > 1 && !!this.blockedAudioAppend && this.unblockAudio(), Promise.all(n).then(a => { s === this.operationQueue && (e(), this.stepOperationQueue(this.sourceBufferTypes)); }); }
    stepOperationQueue(e) { e.forEach(t => { var s; const n = (s = this.tracks[t]) == null ? void 0 : s.buffer; !n || n.updating || this.shiftAndExecuteNext(t); }); }
    append(e, t, s) { this.operationQueue && this.operationQueue.append(e, t, s); }
    appendBlocker(e) { if (this.operationQueue)
        return this.operationQueue.appendBlocker(e); }
    currentOp(e) { return this.operationQueue ? this.operationQueue.current(e) : null; }
    executeNext(e) { e && this.operationQueue && this.operationQueue.executeNext(e); }
    shiftAndExecuteNext(e) { this.operationQueue && this.operationQueue.shiftAndExecuteNext(e); }
    get pendingTrackCount() { return Object.keys(this.tracks).reduce((e, t) => e + (this.isPending(this.tracks[t]) ? 1 : 0), 0); }
    get sourceBufferCount() { return this.sourceBuffers.reduce((e, [t]) => e + (t ? 1 : 0), 0); }
    get sourceBufferTypes() { return this.sourceBuffers.map(([e]) => e).filter(e => !!e); }
    addBufferListener(e, t, s) { const n = this.tracks[e]; if (!n)
        return; const r = n.buffer; if (!r)
        return; const a = s.bind(this, e); n.listeners.push({ event: t, listener: a }), r.addEventListener(t, a); }
    removeBufferListeners(e) { const t = this.tracks[e]; if (!t)
        return; const s = t.buffer; s && (t.listeners.forEach(n => { s.removeEventListener(n.event, n.listener); }), t.listeners.length = 0); }
}
function kf(i) { const e = i.querySelectorAll("source"); [].slice.call(e).forEach(t => { i.removeChild(t); }); }
function mL(i, e) { const t = self.document.createElement("source"); t.type = "video/mp4", t.src = e, i.appendChild(t); }
function yl(i) { return i === "audio" ? 1 : 0; }
class ld {
    constructor(e) { this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners(); }
    setStreamController(e) { this.streamController = e; }
    destroy() { this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null; }
    registerListeners() { const { hls: e } = this; e.on(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(S.BUFFER_CODECS, this.onBufferCodecs, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this); }
    unregisterListener() { const { hls: e } = this; e.off(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(S.BUFFER_CODECS, this.onBufferCodecs, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this); }
    onFpsDropLevelCapping(e, t) { const s = this.hls.levels[t.droppedLevel]; this.isLevelAllowed(s) && this.restrictedLevels.push({ bitrate: s.bitrate, height: s.height, width: s.width }); }
    onMediaAttaching(e, t) { this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize(); }
    onManifestParsed(e, t) { const s = this.hls; this.restrictedLevels = [], this.firstLevel = t.firstLevel, s.config.capLevelToPlayerSize && t.video && this.startCapping(); }
    onLevelsUpdated(e, t) { this.timer && G(this.autoLevelCapping) && this.detectPlayerSize(); }
    onBufferCodecs(e, t) { this.hls.config.capLevelToPlayerSize && t.video && this.startCapping(); }
    onMediaDetaching() { this.stopCapping(), this.media = null; }
    detectPlayerSize() { if (this.media) {
        if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
            this.clientRect = null;
            return;
        }
        const e = this.hls.levels;
        if (e.length) {
            const t = this.hls, s = this.getMaxLevel(e.length - 1);
            s !== this.autoLevelCapping && t.logger.log(`Setting autoLevelCapping to ${s}: ${e[s].height}p@${e[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = s, t.autoLevelEnabled && t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
        }
    } }
    getMaxLevel(e) { const t = this.hls.levels; if (!t.length)
        return -1; const s = t.filter((n, r) => this.isLevelAllowed(n) && r <= e); return this.clientRect = null, ld.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight); }
    startCapping() { this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize()); }
    stopCapping() { this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0); }
    getDimensions() { if (this.clientRect)
        return this.clientRect; const e = this.media, t = { width: 0, height: 0 }; if (e) {
        const s = e.getBoundingClientRect();
        t.width = s.width, t.height = s.height, !t.width && !t.height && (t.width = s.right - s.left || e.width || 0, t.height = s.bottom - s.top || e.height || 0);
    } return this.clientRect = t, t; }
    get mediaWidth() { return this.getDimensions().width * this.contentScaleFactor; }
    get mediaHeight() { return this.getDimensions().height * this.contentScaleFactor; }
    get contentScaleFactor() { let e = 1; if (!this.hls.config.ignoreDevicePixelRatio)
        try {
            e = self.devicePixelRatio;
        }
        catch { } return Math.min(e, this.hls.config.maxDevicePixelRatio); }
    isLevelAllowed(e) { return !this.restrictedLevels.some(s => e.bitrate === s.bitrate && e.width === s.width && e.height === s.height); }
    static getMaxLevelByMediaSize(e, t, s) { if (!(e != null && e.length))
        return -1; const n = (o, l) => l ? o.width !== l.width || o.height !== l.height : !0; let r = e.length - 1; const a = Math.max(t, s); for (let o = 0; o < e.length; o += 1) {
        const l = e[o];
        if ((l.width >= a || l.height >= a) && n(l, e[o + 1])) {
            r = o;
            break;
        }
    } return r; }
}
const gL = { MANIFEST: "m", AUDIO: "a", VIDEO: "v", MUXED: "av", INIT: "i", CAPTION: "c", TIMED_TEXT: "tt", KEY: "k", OTHER: "o" }, tt = gL, pL = { HLS: "h" }, yL = pL;
class ti {
    constructor(e, t) { Array.isArray(e) && (e = e.map(s => s instanceof ti ? s : new ti(s))), this.value = e, this.params = t; }
}
const vL = "Dict";
function xL(i) { return Array.isArray(i) ? JSON.stringify(i) : i instanceof Map ? "Map{}" : i instanceof Set ? "Set{}" : typeof i == "object" ? JSON.stringify(i) : String(i); }
function EL(i, e, t, s) { return new Error(`failed to ${i} "${xL(e)}" as ${t}`, { cause: s }); }
function ii(i, e, t) { return EL("serialize", i, e, t); }
class Op {
    constructor(e) { this.description = e; }
}
const Cf = "Bare Item", SL = "Boolean";
function TL(i) { if (typeof i != "boolean")
    throw ii(i, SL); return i ? "?1" : "?0"; }
function LL(i) { return btoa(String.fromCharCode(...i)); }
const IL = "Byte Sequence";
function AL(i) { if (ArrayBuffer.isView(i) === !1)
    throw ii(i, IL); return `:${LL(i)}:`; }
const RL = "Integer";
function wL(i) { return i < -999999999999999 || 999999999999999 < i; }
function Mp(i) { if (wL(i))
    throw ii(i, RL); return i.toString(); }
function _L(i) { return `@${Mp(i.getTime() / 1e3)}`; }
function Fp(i, e) { if (i < 0)
    return -Fp(-i, e); const t = Math.pow(10, e); if (Math.abs(i * t % 1 - .5) < Number.EPSILON) {
    const n = Math.floor(i * t);
    return (n % 2 === 0 ? n : n + 1) / t;
}
else
    return Math.round(i * t) / t; }
const bL = "Decimal";
function kL(i) { const e = Fp(i, 3); if (Math.floor(Math.abs(e)).toString().length > 12)
    throw ii(i, bL); const t = e.toString(); return t.includes(".") ? t : `${t}.0`; }
const CL = "String", DL = /[\x00-\x1f\x7f]+/;
function PL(i) { if (DL.test(i))
    throw ii(i, CL); return `"${i.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`; }
function NL(i) { return i.description || i.toString().slice(7, -1); }
const OL = "Token";
function Df(i) { const e = NL(i); if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e) === !1)
    throw ii(e, OL); return e; }
function Mu(i) { switch (typeof i) {
    case "number":
        if (!G(i))
            throw ii(i, Cf);
        return Number.isInteger(i) ? Mp(i) : kL(i);
    case "string": return PL(i);
    case "symbol": return Df(i);
    case "boolean": return TL(i);
    case "object":
        if (i instanceof Date)
            return _L(i);
        if (i instanceof Uint8Array)
            return AL(i);
        if (i instanceof Op)
            return Df(i);
    default: throw ii(i, Cf);
} }
const ML = "Key";
function Fu(i) { if (/^[a-z*][a-z0-9\-_.*]*$/.test(i) === !1)
    throw ii(i, ML); return i; }
function ud(i) { return i == null ? "" : Object.entries(i).map(([e, t]) => t === !0 ? `;${Fu(e)}` : `;${Fu(e)}=${Mu(t)}`).join(""); }
function Up(i) { return i instanceof ti ? `${Mu(i.value)}${ud(i.params)}` : Mu(i); }
function FL(i) { return `(${i.value.map(Up).join(" ")})${ud(i.params)}`; }
function UL(i, e = { whitespace: !0 }) { if (typeof i != "object" || i == null)
    throw ii(i, vL); const t = i instanceof Map ? i.entries() : Object.entries(i), s = e != null && e.whitespace ? " " : ""; return Array.from(t).map(([n, r]) => { r instanceof ti || (r = new ti(r)); let a = Fu(n); return r.value === !0 ? a += ud(r.params) : (a += "=", Array.isArray(r.value) ? a += FL(r) : a += Up(r)), a; }).join(`,${s}`); }
function Bp(i, e) { return UL(i, e); }
const Kt = "CMCD-Object", Ae = "CMCD-Request", Xi = "CMCD-Session", Li = "CMCD-Status", BL = { br: Kt, ab: Kt, d: Kt, ot: Kt, tb: Kt, tpb: Kt, lb: Kt, tab: Kt, lab: Kt, url: Kt, pb: Ae, bl: Ae, tbl: Ae, dl: Ae, ltc: Ae, mtp: Ae, nor: Ae, nrr: Ae, rc: Ae, sn: Ae, sta: Ae, su: Ae, ttfb: Ae, ttfbb: Ae, ttlb: Ae, cmsdd: Ae, cmsds: Ae, smrt: Ae, df: Ae, cs: Ae, ts: Ae, cid: Xi, pr: Xi, sf: Xi, sid: Xi, st: Xi, v: Xi, msd: Xi, bs: Li, bsd: Li, cdn: Li, rtp: Li, bg: Li, pt: Li, ec: Li, e: Li }, $L = { REQUEST: Ae };
function jL(i) { return Object.keys(i).reduce((e, t) => { var s; return (s = i[t]) === null || s === void 0 || s.forEach(n => e[n] = t), e; }, {}); }
function GL(i, e) { const t = {}; if (!i)
    return t; const s = Object.keys(i), n = e ? jL(e) : {}; return s.reduce((r, a) => { var o; const l = BL[a] || n[a] || $L.REQUEST, u = (o = r[l]) !== null && o !== void 0 ? o : r[l] = {}; return u[a] = i[a], r; }, t); }
function VL(i) { return ["ot", "sf", "st", "e", "sta"].includes(i); }
function KL(i) { return typeof i == "number" ? G(i) : i != null && i !== "" && i !== !1; }
const $p = "event";
function HL(i, e) { const t = new URL(i), s = new URL(e); if (t.origin !== s.origin)
    return i; const n = t.pathname.split("/").slice(1), r = s.pathname.split("/").slice(1, -1); for (; n[0] === r[0];)
    n.shift(), r.shift(); for (; r.length;)
    r.shift(), n.unshift(".."); return n.join("/") + t.search + t.hash; }
const Ea = i => Math.round(i), Uu = (i, e) => Array.isArray(i) ? i.map(t => Uu(t, e)) : i instanceof ti && typeof i.value == "string" ? new ti(Uu(i.value, e), i.params) : (e.baseUrl && (i = HL(i, e.baseUrl)), e.version === 1 ? encodeURIComponent(i) : i), Wr = i => Ea(i / 100) * 100, zL = (i, e) => { let t = i; return e.version >= 2 && (i instanceof ti && typeof i.value == "string" ? t = new ti([i]) : typeof i == "string" && (t = [i])), Uu(t, e); }, WL = { br: Ea, d: Ea, bl: Wr, dl: Wr, mtp: Wr, nor: zL, rtp: Wr, tb: Ea }, jp = "request", Gp = "response", cd = ["ab", "bg", "bl", "br", "bs", "bsd", "cdn", "cid", "cs", "df", "ec", "lab", "lb", "ltc", "msd", "mtp", "pb", "pr", "pt", "sf", "sid", "sn", "st", "sta", "tab", "tb", "tbl", "tpb", "ts", "v"], YL = ["e"], qL = /^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function wo(i) { return qL.test(i); }
function QL(i) { return cd.includes(i) || YL.includes(i) || wo(i); }
const Vp = ["d", "dl", "nor", "ot", "rtp", "su"];
function XL(i) { return cd.includes(i) || Vp.includes(i) || wo(i); }
const ZL = ["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"];
function JL(i) { return cd.includes(i) || Vp.includes(i) || ZL.includes(i) || wo(i); }
const eI = ["bl", "br", "bs", "cid", "d", "dl", "mtp", "nor", "nrr", "ot", "pr", "rtp", "sf", "sid", "st", "su", "tb", "v"];
function tI(i) { return eI.includes(i) || wo(i); }
const iI = { [Gp]: JL, [$p]: QL, [jp]: XL };
function Kp(i, e = {}) { const t = {}; if (i == null || typeof i != "object")
    return t; const s = e.version || i.v || 1, n = e.reportingMode || jp, r = s === 1 ? tI : iI[n]; let a = Object.keys(i).filter(r); const o = e.filter; typeof o == "function" && (a = a.filter(o)); const l = n === Gp || n === $p; l && !a.includes("ts") && a.push("ts"), s > 1 && !a.includes("v") && a.push("v"); const u = ce({}, WL, e.formatters), c = { version: s, reportingMode: n, baseUrl: e.baseUrl }; return a.sort().forEach(d => { let h = i[d]; const f = u[d]; if (typeof f == "function" && (h = f(h, c)), d === "v") {
    if (s === 1)
        return;
    h = s;
} d == "pr" && h === 1 || (l && d === "ts" && !G(h) && (h = Date.now()), KL(h) && (VL(d) && typeof h == "string" && (h = new Op(h)), t[d] = h)); }), t; }
function sI(i, e = {}) { const t = {}; if (!i)
    return t; const s = Kp(i, e), n = GL(s, e == null ? void 0 : e.customHeaderMap); return Object.entries(n).reduce((r, [a, o]) => { const l = Bp(o, { whitespace: !1 }); return l && (r[a] = l), r; }, t); }
function nI(i, e, t) { return ce(i, sI(e, t)); }
const rI = "CMCD";
function aI(i, e = {}) { return i ? Bp(Kp(i, e), { whitespace: !1 }) : ""; }
function oI(i, e = {}) { if (!i)
    return ""; const t = aI(i, e); return encodeURIComponent(t); }
function lI(i, e = {}) { if (!i)
    return ""; const t = oI(i, e); return `${rI}=${t}`; }
const Pf = /CMCD=[^&#]+/;
function uI(i, e, t) { const s = lI(e, t); if (!s)
    return i; if (Pf.test(i))
    return i.replace(Pf, s); const n = i.includes("?") ? "&" : "?"; return `${i}${n}${s}`; }
class cI {
    constructor(e) { this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => { this.initialized && (this.starved = !0), this.buffering = !0; }, this.onPlaying = () => { this.initialized || (this.initialized = !0), this.buffering = !1; }, this.applyPlaylistData = n => { try {
        this.apply(n, { ot: tt.MANIFEST, su: !this.initialized });
    }
    catch (r) {
        this.hls.logger.warn("Could not generate manifest CMCD data.", r);
    } }, this.applyFragmentData = n => { try {
        const { frag: r, part: a } = n, o = this.hls.levels[r.level], l = this.getObjectType(r), u = { d: (a || r).duration * 1e3, ot: l };
        (l === tt.VIDEO || l === tt.AUDIO || l == tt.MUXED) && (u.br = o.bitrate / 1e3, u.tb = this.getTopBandwidth(l) / 1e3, u.bl = this.getBufferLength(l));
        const c = a ? this.getNextPart(a) : this.getNextFrag(r);
        c != null && c.url && c.url !== r.url && (u.nor = c.url), this.apply(n, u);
    }
    catch (r) {
        this.hls.logger.warn("Could not generate segment CMCD data.", r);
    } }, this.hls = e; const t = this.config = e.config, { cmcd: s } = t; s != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || e.sessionId, this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.includeKeys = s.includeKeys, this.registerListeners()); }
    registerListeners() { const e = this.hls; e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHED, this.onMediaDetached, this), e.on(S.BUFFER_CREATED, this.onBufferCreated, this); }
    unregisterListeners() { const e = this.hls; e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHED, this.onMediaDetached, this), e.off(S.BUFFER_CREATED, this.onBufferCreated, this); }
    destroy() { this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = this.media = null; }
    onMediaAttached(e, t) { this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying); }
    onMediaDetached() { this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null); }
    onBufferCreated(e, t) { var s, n; this.audioBuffer = (s = t.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (n = t.tracks.video) == null ? void 0 : n.buffer; }
    createData() { var e; return { v: 1, sf: yL.HLS, sid: this.sid, cid: this.cid, pr: (e = this.media) == null ? void 0 : e.playbackRate, mtp: this.hls.bandwidthEstimate / 1e3 }; }
    apply(e, t = {}) { ce(t, this.createData()); const s = t.ot === tt.INIT || t.ot === tt.VIDEO || t.ot === tt.MUXED; this.starved && s && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering); const { includeKeys: n } = this; n && (t = Object.keys(t).reduce((a, o) => (n.includes(o) && (a[o] = t[o]), a), {})); const r = { baseUrl: e.url }; this.useHeaders ? (e.headers || (e.headers = {}), nI(e.headers, t, r)) : e.url = uI(e.url, t, r); }
    getNextFrag(e) { var t; const s = (t = this.hls.levels[e.level]) == null ? void 0 : t.details; if (s) {
        const n = e.sn - s.startSN;
        return s.fragments[n + 1];
    } }
    getNextPart(e) { var t; const { index: s, fragment: n } = e, r = (t = this.hls.levels[n.level]) == null || (t = t.details) == null ? void 0 : t.partList; if (r) {
        const { sn: a } = n;
        for (let o = r.length - 1; o >= 0; o--) {
            const l = r[o];
            if (l.index === s && l.fragment.sn === a)
                return r[o + 1];
        }
    } }
    getObjectType(e) { const { type: t } = e; if (t === "subtitle")
        return tt.TIMED_TEXT; if (e.sn === "initSegment")
        return tt.INIT; if (t === "audio")
        return tt.AUDIO; if (t === "main")
        return this.hls.audioTracks.length ? tt.VIDEO : tt.MUXED; }
    getTopBandwidth(e) { let t = 0, s; const n = this.hls; if (e === tt.AUDIO)
        s = n.audioTracks;
    else {
        const r = n.maxAutoLevel, a = r > -1 ? r + 1 : n.levels.length;
        s = n.levels.slice(0, a);
    } return s.forEach(r => { r.bitrate > t && (t = r.bitrate); }), t > 0 ? t : NaN; }
    getBufferLength(e) { const t = this.media, s = e === tt.AUDIO ? this.audioBuffer : this.videoBuffer; return !s || !t ? NaN : Z.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len * 1e3; }
    createPlaylistLoader() { const { pLoader: e } = this.config, t = this.applyPlaylistData, s = e || this.config.loader; return class {
        constructor(r) { this.loader = void 0, this.loader = new s(r); }
        get stats() { return this.loader.stats; }
        get context() { return this.loader.context; }
        destroy() { this.loader.destroy(); }
        abort() { this.loader.abort(); }
        load(r, a, o) { t(r), this.loader.load(r, a, o); }
    }; }
    createFragmentLoader() { const { fLoader: e } = this.config, t = this.applyFragmentData, s = e || this.config.loader; return class {
        constructor(r) { this.loader = void 0, this.loader = new s(r); }
        get stats() { return this.loader.stats; }
        get context() { return this.loader.context; }
        destroy() { this.loader.destroy(); }
        abort() { this.loader.abort(); }
        load(r, a, o) { t(r), this.loader.load(r, a, o); }
    }; }
}
const dI = 3e5;
class hI extends _t {
    constructor(e) { super("content-steering", e.logger), this.hls = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this._pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.registerListeners(); }
    registerListeners() { const e = this.hls; e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.ERROR, this.onError, this); }
    unregisterListeners() { const e = this.hls; e && (e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.ERROR, this.onError, this)); }
    pathways() { return (this.levels || []).reduce((e, t) => (e.indexOf(t.pathwayId) === -1 && e.push(t.pathwayId), e), []); }
    get pathwayPriority() { return this._pathwayPriority; }
    set pathwayPriority(e) { this.updatePathwayPriority(e); }
    startLoad() { if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
        if (this.updated) {
            const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
            if (e > 0) {
                this.scheduleRefresh(this.uri, e);
                return;
            }
        }
        this.loadSteeringManifest(this.uri);
    } }
    stopLoad() { this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout(); }
    clearTimeout() { this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1); }
    destroy() { this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null; }
    removeLevel(e) { const t = this.levels; t && (this.levels = t.filter(s => s !== e)); }
    onManifestLoading() { this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null; }
    onManifestLoaded(e, t) { const { contentSteering: s } = t; s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad()); }
    onManifestParsed(e, t) { this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks; }
    onError(e, t) { const { errorAction: s } = t; if ((s == null ? void 0 : s.action) === $e.SendAlternateToPenaltyBox && s.flags === ut.MoveAllAlternatesMatchingHost) {
        const n = this.levels;
        let r = this._pathwayPriority, a = this.pathwayId;
        if (t.context) {
            const { groupId: o, pathwayId: l, type: u } = t.context;
            o && n ? a = this.getPathwayForGroupId(o, u, a) : l && (a = l);
        }
        a in this.penalizedPathways || (this.penalizedPathways[a] = performance.now()), !r && n && (r = this.pathways()), r && r.length > 1 && (this.updatePathwayPriority(r), s.resolved = this.pathwayId !== a), t.details === k.BUFFER_APPEND_ERROR && !t.fatal ? s.resolved = !0 : s.resolved || this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${a} levels: ${n && n.length} priorities: ${fe(r)} penalized: ${fe(this.penalizedPathways)}`);
    } }
    filterParsedLevels(e) { this.levels = e; let t = this.getLevelsForPathway(this.pathwayId); if (t.length === 0) {
        const s = e[0].pathwayId;
        this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t = this.getLevelsForPathway(s), this.pathwayId = s;
    } return t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t; }
    getLevelsForPathway(e) { return this.levels === null ? [] : this.levels.filter(t => e === t.pathwayId); }
    updatePathwayPriority(e) { this._pathwayPriority = e; let t; const s = this.penalizedPathways, n = performance.now(); Object.keys(s).forEach(r => { n - s[r] > dI && delete s[r]; }); for (let r = 0; r < e.length; r++) {
        const a = e[r];
        if (a in s)
            continue;
        if (a === this.pathwayId)
            return;
        const o = this.hls.nextLoadLevel, l = this.hls.levels[o];
        if (t = this.getLevelsForPathway(a), t.length > 0) {
            this.log(`Setting Pathway to "${a}"`), this.pathwayId = a, cp(t), this.hls.trigger(S.LEVELS_UPDATED, { levels: t });
            const u = this.hls.levels[o];
            l && u && this.levels && (u.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] && u.bitrate !== l.bitrate && this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${u.bitrate}`), this.hls.nextLoadLevel = o);
            break;
        }
    } }
    getPathwayForGroupId(e, t, s) { const n = this.getLevelsForPathway(s).concat(this.levels || []); for (let r = 0; r < n.length; r++)
        if (t === se.AUDIO_TRACK && n[r].hasAudioGroup(e) || t === se.SUBTITLE_TRACK && n[r].hasSubtitleGroup(e))
            return n[r].pathwayId; return s; }
    clonePathways(e) { const t = this.levels; if (!t)
        return; const s = {}, n = {}; e.forEach(r => { const { ID: a, "BASE-ID": o, "URI-REPLACEMENT": l } = r; if (t.some(c => c.pathwayId === a))
        return; const u = this.getLevelsForPathway(o).map(c => { const d = new ve(c.attrs); d["PATHWAY-ID"] = a; const h = d.AUDIO && `${d.AUDIO}_clone_${a}`, f = d.SUBTITLES && `${d.SUBTITLES}_clone_${a}`; h && (s[d.AUDIO] = h, d.AUDIO = h), f && (n[d.SUBTITLES] = f, d.SUBTITLES = f); const m = Hp(c.uri, d["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l), p = new or({ attrs: d, audioCodec: c.audioCodec, bitrate: c.bitrate, height: c.height, name: c.name, url: m, videoCodec: c.videoCodec, width: c.width }); if (c.audioGroups)
        for (let x = 1; x < c.audioGroups.length; x++)
            p.addGroupId("audio", `${c.audioGroups[x]}_clone_${a}`); if (c.subtitleGroups)
        for (let x = 1; x < c.subtitleGroups.length; x++)
            p.addGroupId("text", `${c.subtitleGroups[x]}_clone_${a}`); return p; }); t.push(...u), Nf(this.audioTracks, s, l, a), Nf(this.subtitleTracks, n, l, a); }); }
    loadSteeringManifest(e) { const t = this.hls.config, s = t.loader; this.loader && this.loader.destroy(), this.loader = new s(t); let n; try {
        n = new self.URL(e);
    }
    catch {
        this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
        return;
    } if (n.protocol !== "data:") {
        const c = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
        n.searchParams.set("_HLS_pathway", this.pathwayId), n.searchParams.set("_HLS_throughput", "" + c);
    } const r = { responseType: "json", url: n.href }, a = t.steeringManifestLoadPolicy.default, o = a.errorRetry || a.timeoutRetry || {}, l = { loadPolicy: a, timeout: a.maxLoadTimeMs, maxRetry: o.maxNumRetry || 0, retryDelay: o.retryDelayMs || 0, maxRetryDelay: o.maxRetryDelayMs || 0 }, u = { onSuccess: (c, d, h, f) => { this.log(`Loaded steering manifest: "${n}"`); const m = c.data; if ((m == null ? void 0 : m.VERSION) !== 1) {
            this.log(`Steering VERSION ${m.VERSION} not supported!`);
            return;
        } this.updated = performance.now(), this.timeToLoad = m.TTL; const { "RELOAD-URI": p, "PATHWAY-CLONES": x, "PATHWAY-PRIORITY": y } = m; if (p)
            try {
                this.uri = new self.URL(p, n).href;
            }
            catch {
                this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${p}`);
                return;
            } this.scheduleRefresh(this.uri || h.url), x && this.clonePathways(x); const v = { steeringManifest: m, url: n.toString() }; this.hls.trigger(S.STEERING_MANIFEST_LOADED, v), y && this.updatePathwayPriority(y); }, onError: (c, d, h, f) => { if (this.log(`Error loading steering manifest: ${c.code} ${c.text} (${d.url})`), this.stopLoad(), c.code === 410) {
            this.enabled = !1, this.log(`Steering manifest ${d.url} no longer available`);
            return;
        } let m = this.timeToLoad * 1e3; if (c.code === 429) {
            const p = this.loader;
            if (typeof (p == null ? void 0 : p.getResponseHeader) == "function") {
                const x = p.getResponseHeader("Retry-After");
                x && (m = parseFloat(x) * 1e3);
            }
            this.log(`Steering manifest ${d.url} rate limited`);
            return;
        } this.scheduleRefresh(this.uri || d.url, m); }, onTimeout: (c, d, h) => { this.log(`Timeout loading steering manifest (${d.url})`), this.scheduleRefresh(this.uri || d.url); } }; this.log(`Requesting steering manifest: ${n}`), this.loader.load(r, l, u); }
    scheduleRefresh(e, t = this.timeToLoad * 1e3) { this.clearTimeout(), this.reloadTimer = self.setTimeout(() => { var s; const n = (s = this.hls) == null ? void 0 : s.media; if (n && !n.ended) {
        this.loadSteeringManifest(e);
        return;
    } this.scheduleRefresh(e, this.timeToLoad * 1e3); }, t); }
}
function Nf(i, e, t, s) { i && Object.keys(e).forEach(n => { const r = i.filter(a => a.groupId === n).map(a => { const o = ce({}, a); return o.details = void 0, o.attrs = new ve(o.attrs), o.url = o.attrs.URI = Hp(a.url, a.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[n], o.attrs["PATHWAY-ID"] = s, o; }); i.push(...r); }); }
function Hp(i, e, t, s) { const { HOST: n, PARAMS: r, [t]: a } = s; let o; e && (o = a == null ? void 0 : a[e], o && (i = o)); const l = new self.URL(i); return n && !o && (l.host = n), r && Object.keys(r).sort().forEach(u => { u && l.searchParams.set(u, r[u]); }), l.href; }
class Ws extends _t {
    constructor(e) { super("eme", e.logger), this.hls = void 0, this.config = void 0, this.media = null, this.mediaResolved = void 0, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.mediaKeys = null, this.setMediaKeysQueue = Ws.CDMCleanupPromise ? [Ws.CDMCleanupPromise] : [], this.bannedKeyIds = {}, this.onMediaEncrypted = t => { const { initDataType: s, initData: n } = t, r = `"${t.type}" event: init data type: "${s}"`; if (this.debug(r), n !== null) {
        if (!this.keyFormatPromise) {
            let a = Object.keys(this.keySystemAccessPromises);
            a.length || (a = Rn(this.config));
            const o = a.map(ul).filter(l => !!l);
            this.keyFormatPromise = this.getKeyFormatPromise(o);
        }
        this.keyFormatPromise.then(a => { const o = ya(a); if (s !== "sinf" || o !== Ee.FAIRPLAY) {
            this.log(`Ignoring "${t.type}" event with init data type: "${s}" for selected key-system ${o}`);
            return;
        } let l; try {
            const f = Ce(new Uint8Array(n)), m = Zc(JSON.parse(f).sinf), p = Bg(m);
            if (!p)
                throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
            l = new Uint8Array(p.subarray(8, 24));
        }
        catch (f) {
            this.warn(`${r} Failed to parse sinf: ${f}`);
            return;
        } const u = je(l), { keyIdToKeySessionPromise: c, mediaKeySessions: d } = this; let h = c[u]; for (let f = 0; f < d.length; f++) {
            const m = d[f], p = m.decryptdata;
            if (!p.keyId)
                continue;
            const x = je(p.keyId);
            if (to(l, p.keyId) || p.uri.replace(/-/g, "").indexOf(u) !== -1) {
                if (h = c[x], !h)
                    continue;
                if (p.pssh)
                    break;
                delete c[x], p.pssh = new Uint8Array(n), p.keyId = l, h = c[u] = h.then(() => this.generateRequestWithPreferredKeySession(m, s, n, "encrypted-event-key-match")), h.catch(y => this.handleError(y));
                break;
            }
        } h || this.handleError(new Error(`Key ID ${u} not encountered in playlist. Key-system sessions ${d.length}.`)); }).catch(a => this.handleError(a));
    } }, this.onWaitingForKey = t => { this.log(`"${t.type}" event`); }, this.hls = e, this.config = e.config, this.registerListeners(); }
    destroy() { this.onDestroying(), this.onMediaDetached(); const e = this.config; e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null; }
    registerListeners() { this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(S.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.on(S.DESTROYING, this.onDestroying, this); }
    unregisterListeners() { this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(S.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.off(S.DESTROYING, this.onDestroying, this); }
    getLicenseServerUrl(e) { const { drmSystems: t, widevineLicenseUrl: s } = this.config, n = t == null ? void 0 : t[e]; if (n)
        return n.licenseUrl; if (e === Ee.WIDEVINE && s)
        return s; }
    getLicenseServerUrlOrThrow(e) { const t = this.getLicenseServerUrl(e); if (t === void 0)
        throw new Error(`no license server URL configured for key-system "${e}"`); return t; }
    getServerCertificateUrl(e) { const { drmSystems: t } = this.config, s = t == null ? void 0 : t[e]; if (s)
        return s.serverCertificateUrl; this.log(`No Server Certificate in config.drmSystems["${e}"]`); }
    attemptKeySystemAccess(e) { const t = this.hls.levels, s = (a, o, l) => !!a && l.indexOf(a) === o, n = t.map(a => a.audioCodec).filter(s), r = t.map(a => a.videoCodec).filter(s); return n.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((a, o) => { const l = u => { const c = u.shift(); this.getMediaKeysPromise(c, n, r).then(d => a({ keySystem: c, mediaKeys: d })).catch(d => { u.length ? l(u) : d instanceof lt ? o(d) : o(new lt({ type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_NO_ACCESS, error: d, fatal: !0 }, d.message)); }); }; l(e); }); }
    requestMediaKeySystemAccess(e, t) { const { requestMediaKeySystemAccessFunc: s } = this.config; if (typeof s != "function") {
        let n = `Configured requestMediaKeySystemAccess is not a function ${s}`;
        return ip === null && self.location.protocol === "http:" && (n = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(n));
    } return s(e, t); }
    getMediaKeysPromise(e, t, s) { var n; const r = zT(e, t, s, this.config.drmSystemOptions || {}); let a = this.keySystemAccessPromises[e], o = (n = a) == null ? void 0 : n.keySystemAccess; if (!o) {
        this.log(`Requesting encrypted media "${e}" key-system access with config: ${fe(r)}`), o = this.requestMediaKeySystemAccess(e, r);
        const l = a = this.keySystemAccessPromises[e] = { keySystemAccess: o };
        return o.catch(u => { this.log(`Failed to obtain access to key-system "${e}": ${u}`); }), o.then(u => { this.log(`Access for key-system "${u.keySystem}" obtained`); const c = this.fetchServerCertificate(e); this.log(`Create media-keys for "${e}"`); const d = l.mediaKeys = u.createMediaKeys().then(h => (this.log(`Media-keys created for "${e}"`), l.hasMediaKeys = !0, c.then(f => f ? this.setMediaKeysServerCertificate(h, e, f) : h))); return d.catch(h => { this.error(`Failed to create media-keys for "${e}"}: ${h}`); }), d; });
    } return o.then(() => a.mediaKeys); }
    createMediaKeySessionContext({ decryptdata: e, keySystem: t, mediaKeys: s }) { this.log(`Creating key-system session "${t}" keyId: ${je(e.keyId || [])} keyUri: ${e.uri}`); const n = s.createSession(), r = { decryptdata: e, keySystem: t, mediaKeys: s, mediaKeysSession: n, keyStatus: "status-pending" }; return this.mediaKeySessions.push(r), r; }
    renewKeySession(e) { const t = e.decryptdata; if (t.pssh) {
        const s = this.createMediaKeySessionContext(e), n = Yr(t), r = "cenc";
        this.keyIdToKeySessionPromise[n] = this.generateRequestWithPreferredKeySession(s, r, t.pssh.buffer, "expired");
    }
    else
        this.warn("Could not renew expired session. Missing pssh initData."); this.removeSession(e); }
    updateKeySession(e, t) {
        const s = e.mediaKeysSession;
        return this.log(`Updating key-session "${s.sessionId}" for keyId ${je(e.decryptdata.keyId || [])}
      } (data length: ${t.byteLength})`), s.update(t);
    }
    getSelectedKeySystemFormats() { return Object.keys(this.keySystemAccessPromises).map(e => ({ keySystem: e, hasMediaKeys: this.keySystemAccessPromises[e].hasMediaKeys })).filter(({ hasMediaKeys: e }) => !!e).map(({ keySystem: e }) => ul(e)).filter(e => !!e); }
    getKeySystemAccess(e) { return this.getKeySystemSelectionPromise(e).then(({ keySystem: t, mediaKeys: s }) => this.attemptSetMediaKeys(t, s)); }
    selectKeySystem(e) { return new Promise((t, s) => { this.getKeySystemSelectionPromise(e).then(({ keySystem: n }) => { const r = ul(n); r ? t(r) : s(new Error(`Unable to find format for key-system "${n}"`)); }).catch(s); }); }
    selectKeySystemFormat(e) { const t = Object.keys(e.levelkeys || {}); return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise; }
    getKeyFormatPromise(e) { const t = Rn(this.config), s = e.map(ya).filter(n => !!n && t.indexOf(n) !== -1); return this.selectKeySystem(s); }
    getKeyStatus(e) { const { mediaKeySessions: t } = this; for (let s = 0; s < t.length; s++) {
        const n = fI(e, t[s]);
        if (n)
            return n;
    } }
    loadKey(e) { const t = e.keyInfo.decryptdata, s = Yr(t), n = this.bannedKeyIds[s]; if (n || this.getKeyStatus(t) === "internal-error") {
        const o = Of(n || "internal-error", t);
        return this.handleError(o, e.frag), Promise.reject(o);
    } const r = `(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`; this.log(`Starting session for key ${r}`); const a = this.keyIdToKeySessionPromise[s]; if (!a) {
        const o = this.getKeySystemForKeyPromise(t).then(({ keySystem: l, mediaKeys: u }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${r}`), this.attemptSetMediaKeys(l, u).then(() => (this.throwIfDestroyed(), this.createMediaKeySessionContext({ keySystem: l, mediaKeys: u, decryptdata: t }))))).then(l => { const u = "cenc", c = t.pssh ? t.pssh.buffer : null; return this.generateRequestWithPreferredKeySession(l, u, c, "playlist-key"); });
        return o.catch(l => this.handleError(l, e.frag)), this.keyIdToKeySessionPromise[s] = o, o;
    } return a.catch(o => { if (o instanceof lt) {
        const l = oe({}, o.data);
        this.getKeyStatus(t) === "internal-error" && (l.decryptdata = t);
        const u = new lt(l, o.message);
        this.handleError(u, e.frag);
    } }), a; }
    throwIfDestroyed(e = "Invalid state") { if (!this.hls)
        throw new Error("invalid state"); }
    handleError(e, t) { if (this.hls)
        if (e instanceof lt) {
            t && (e.data.frag = t);
            const s = e.data.decryptdata;
            this.error(`${e.message}${s ? ` (${je(s.keyId || [])})` : ""}`), this.hls.trigger(S.ERROR, e.data);
        }
        else
            this.error(e.message), this.hls.trigger(S.ERROR, { type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_NO_KEYS, error: e, fatal: !0 }); }
    getKeySystemForKeyPromise(e) { const t = Yr(e), s = this.keyIdToKeySessionPromise[t]; if (!s) {
        const n = ya(e.keyFormat), r = n ? [n] : Rn(this.config);
        return this.attemptKeySystemAccess(r);
    } return s; }
    getKeySystemSelectionPromise(e) { if (e.length || (e = Rn(this.config)), e.length === 0)
        throw new lt({ type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal: !0 }, `Missing key-system license configuration options ${fe({ drmSystems: this.config.drmSystems })}`); return this.attemptKeySystemAccess(e); }
    attemptSetMediaKeys(e, t) { if (this.mediaResolved = void 0, this.mediaKeys === t)
        return Promise.resolve(); const s = this.setMediaKeysQueue.slice(); this.log(`Setting media-keys for "${e}"`); const n = Promise.all(s).then(() => this.media ? this.media.setMediaKeys(t) : new Promise((r, a) => { this.mediaResolved = () => { if (this.mediaResolved = void 0, !this.media)
        return a(new Error("Attempted to set mediaKeys without media element attached")); this.mediaKeys = t, this.media.setMediaKeys(t).then(r).catch(a); }; })); return this.mediaKeys = t, this.setMediaKeysQueue.push(n), n.then(() => { this.log(`Media-keys set for "${e}"`), s.push(n), this.setMediaKeysQueue = this.setMediaKeysQueue.filter(r => s.indexOf(r) === -1); }); }
    generateRequestWithPreferredKeySession(e, t, s, n) { var r; const a = (r = this.config.drmSystems) == null || (r = r[e.keySystem]) == null ? void 0 : r.generateRequest; if (a)
        try {
            const m = a.call(this.hls, t, s, e);
            if (!m)
                throw new Error("Invalid response from configured generateRequest filter");
            t = m.initDataType, s = m.initData ? m.initData : null, e.decryptdata.pssh = s ? new Uint8Array(s) : null;
        }
        catch (m) {
            if (this.warn(m.message), this.hls && this.hls.config.debug)
                throw m;
        } if (s === null)
        return this.log(`Skipping key-session request for "${n}" (no initData)`), Promise.resolve(e); const o = Yr(e.decryptdata), l = e.decryptdata.uri; this.log(`Generating key-session request for "${n}" keyId: ${o} URI: ${l} (init data type: ${t} length: ${s.byteLength})`); const u = new ed, c = e._onmessage = m => { const p = e.mediaKeysSession; if (!p) {
        u.emit("error", new Error("invalid state"));
        return;
    } const { messageType: x, message: y } = m; this.log(`"${x}" message event for session "${p.sessionId}" message size: ${y.byteLength}`), x === "license-request" || x === "license-renewal" ? this.renewLicense(e, y).catch(v => { u.eventNames().length ? u.emit("error", v) : this.handleError(v); }) : x === "license-release" ? e.keySystem === Ee.FAIRPLAY && this.updateKeySession(e, ku("acknowledged")).then(() => this.removeSession(e)).catch(v => this.handleError(v)) : this.warn(`unhandled media key message type "${x}"`); }, d = (m, p) => { p.keyStatus = m; let x; m.startsWith("usable") ? u.emit("resolved") : m === "internal-error" || m === "output-restricted" || m === "output-downscaled" ? x = Of(m, p.decryptdata) : m === "expired" ? x = new Error(`key expired (keyId: ${o})`) : m === "released" ? x = new Error("key released") : m === "status-pending" || this.warn(`unhandled key status change "${m}" (keyId: ${o})`), x && (u.eventNames().length ? u.emit("error", x) : this.handleError(x)); }, h = e._onkeystatuseschange = m => { if (!e.mediaKeysSession) {
        u.emit("error", new Error("invalid state"));
        return;
    } const x = this.getKeyStatuses(e); if (!Object.keys(x).some(T => x[T] !== "status-pending"))
        return; if (x[o] === "expired") {
        this.log(`Expired key ${fe(x)} in key-session "${e.mediaKeysSession.sessionId}"`), this.renewKeySession(e);
        return;
    } let v = x[o]; if (v)
        d(v, e);
    else {
        var E;
        e.keyStatusTimeouts || (e.keyStatusTimeouts = {}), (E = e.keyStatusTimeouts)[o] || (E[o] = self.setTimeout(() => { if (!e.mediaKeysSession || !this.mediaKeys)
            return; const L = this.getKeyStatus(e.decryptdata); if (L && L !== "status-pending")
            return this.log(`No status for keyId ${o} in key-session "${e.mediaKeysSession.sessionId}". Using session key-status ${L} from other session.`), d(L, e); this.log(`key status for ${o} in key-session "${e.mediaKeysSession.sessionId}" timed out after 1000ms`), v = "internal-error", d(v, e); }, 1e3)), this.log(`No status for keyId ${o} (${fe(x)}).`);
    } }; Xe(e.mediaKeysSession, "message", c), Xe(e.mediaKeysSession, "keystatuseschange", h); const f = new Promise((m, p) => { u.on("error", p), u.on("resolved", m); }); return e.mediaKeysSession.generateRequest(t, s).then(() => { this.log(`Request generated for key-session "${e.mediaKeysSession.sessionId}" keyId: ${o} URI: ${l}`); }).catch(m => { throw new lt({ type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_NO_SESSION, error: m, decryptdata: e.decryptdata, fatal: !1 }, `Error generating key-session request: ${m}`); }).then(() => f).catch(m => (u.removeAllListeners(), this.removeSession(e).then(() => { throw m; }))).then(() => (u.removeAllListeners(), e)); }
    getKeyStatuses(e) { const t = {}; return e.mediaKeysSession.keyStatuses.forEach((s, n) => { if (typeof n == "string" && typeof s == "object") {
        const o = n;
        n = s, s = o;
    } const r = "buffer" in n ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n); if (e.keySystem === Ee.PLAYREADY && r.length === 16) {
        const o = je(r);
        t[o] = s, ep(r);
    } const a = je(r); s === "internal-error" && (this.bannedKeyIds[a] = s), this.log(`key status change "${s}" for keyStatuses keyId: ${a} key-session "${e.mediaKeysSession.sessionId}"`), t[a] = s; }), t; }
    fetchServerCertificate(e) { const t = this.config, s = t.loader, n = new s(t), r = this.getServerCertificateUrl(e); return r ? (this.log(`Fetching server certificate for "${e}"`), new Promise((a, o) => { const l = { responseType: "arraybuffer", url: r }, u = t.certLoadPolicy.default, c = { loadPolicy: u, timeout: u.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, d = { onSuccess: (h, f, m, p) => { a(h.data); }, onError: (h, f, m, p) => { o(new lt({ type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: !0, networkDetails: m, response: oe({ url: l.url, data: void 0 }, h) }, `"${e}" certificate request failed (${r}). Status: ${h.code} (${h.text})`)); }, onTimeout: (h, f, m) => { o(new lt({ type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: !0, networkDetails: m, response: { url: l.url, data: void 0 } }, `"${e}" certificate request timed out (${r})`)); }, onAbort: (h, f, m) => { o(new Error("aborted")); } }; n.load(l, c, d); })) : Promise.resolve(); }
    setMediaKeysServerCertificate(e, t, s) { return new Promise((n, r) => { e.setServerCertificate(s).then(a => { this.log(`setServerCertificate ${a ? "success" : "not supported by CDM"} (${s.byteLength}) on "${t}"`), n(e); }).catch(a => { r(new lt({ type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED, error: a, fatal: !0 }, a.message)); }); }); }
    renewLicense(e, t) { return this.requestLicense(e, new Uint8Array(t)).then(s => this.updateKeySession(e, new Uint8Array(s)).catch(n => { throw new lt({ type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_SESSION_UPDATE_FAILED, decryptdata: e.decryptdata, error: n, fatal: !1 }, n.message); })); }
    unpackPlayReadyKeyMessage(e, t) { const s = String.fromCharCode.apply(null, new Uint16Array(t.buffer)); if (!s.includes("PlayReadyKeyMessage"))
        return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t; const n = new DOMParser().parseFromString(s, "application/xml"), r = n.querySelectorAll("HttpHeader"); if (r.length > 0) {
        let c;
        for (let d = 0, h = r.length; d < h; d++) {
            var a, o;
            c = r[d];
            const f = (a = c.querySelector("name")) == null ? void 0 : a.textContent, m = (o = c.querySelector("value")) == null ? void 0 : o.textContent;
            f && m && e.setRequestHeader(f, m);
        }
    } const l = n.querySelector("Challenge"), u = l == null ? void 0 : l.textContent; if (!u)
        throw new Error("Cannot find <Challenge> in key message"); return ku(atob(u)); }
    setupLicenseXHR(e, t, s, n) { const r = this.config.licenseXhrSetup; return r ? Promise.resolve().then(() => { if (!s.decryptdata)
        throw new Error("Key removed"); return r.call(this.hls, e, t, s, n); }).catch(a => { if (!s.decryptdata)
        throw a; return e.open("POST", t, !0), r.call(this.hls, e, t, s, n); }).then(a => (e.readyState || e.open("POST", t, !0), { xhr: e, licenseChallenge: a || n })) : (e.open("POST", t, !0), Promise.resolve({ xhr: e, licenseChallenge: n })); }
    requestLicense(e, t) { const s = this.config.keyLoadPolicy.default; return new Promise((n, r) => { const a = this.getLicenseServerUrlOrThrow(e.keySystem); this.log(`Sending license request to URL: ${a}`); const o = new XMLHttpRequest; o.responseType = "arraybuffer", o.onreadystatechange = () => { if (!this.hls || !e.mediaKeysSession)
        return r(new Error("invalid state")); if (o.readyState === 4)
        if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let l = o.response;
            this.log(`License received ${l instanceof ArrayBuffer ? l.byteLength : l}`);
            const u = this.config.licenseResponseCallback;
            if (u)
                try {
                    l = u.call(this.hls, o, a, e);
                }
                catch (c) {
                    this.error(c);
                }
            n(l);
        }
        else {
            const l = s.errorRetry, u = l ? l.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > u || o.status >= 400 && o.status < 500)
                r(new lt({ type: q.KEY_SYSTEM_ERROR, details: k.KEY_SYSTEM_LICENSE_REQUEST_FAILED, decryptdata: e.decryptdata, fatal: !0, networkDetails: o, response: { url: a, data: void 0, code: o.status, text: o.statusText } }, `License Request XHR failed (${a}). Status: ${o.status} (${o.statusText})`));
            else {
                const c = u - this._requestLicenseFailureCount + 1;
                this.warn(`Retrying license request, ${c} attempts left`), this.requestLicense(e, t).then(n, r);
            }
        } }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, a, e, t).then(({ xhr: l, licenseChallenge: u }) => { e.keySystem == Ee.PLAYREADY && (u = this.unpackPlayReadyKeyMessage(l, u)), l.send(u); }).catch(r); }); }
    onDestroying() { this.unregisterListeners(), this._clear(); }
    onMediaAttached(e, t) { if (!this.config.emeEnabled)
        return; const s = t.media; this.media = s, Xe(s, "encrypted", this.onMediaEncrypted), Xe(s, "waitingforkey", this.onWaitingForKey); const n = this.mediaResolved; n ? n() : this.mediaKeys = s.mediaKeys; }
    onMediaDetached() { const e = this.media; e && (nt(e, "encrypted", this.onMediaEncrypted), nt(e, "waitingforkey", this.onWaitingForKey), this.media = null, this.mediaKeys = null); }
    _clear() { var e; this._requestLicenseFailureCount = 0, this.keyIdToKeySessionPromise = {}, this.bannedKeyIds = {}; const t = this.mediaResolved; if (t && t(), !this.mediaKeys && !this.mediaKeySessions.length)
        return; const s = this.media, n = this.mediaKeySessions.slice(); this.mediaKeySessions = [], this.mediaKeys = null, $i.clearKeyUriToKeyIdMap(); const r = n.length; Ws.CDMCleanupPromise = Promise.all(n.map(a => this.removeSession(a)).concat((s == null || (e = s.setMediaKeys(null)) == null ? void 0 : e.catch(a => { this.log(`Could not clear media keys: ${a}`), this.hls && this.hls.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR, fatal: !1, error: new Error(`Could not clear media keys: ${a}`) }); })) || Promise.resolve())).catch(a => { this.log(`Could not close sessions and clear media keys: ${a}`), this.hls && this.hls.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR, fatal: !1, error: new Error(`Could not close sessions and clear media keys: ${a}`) }); }).then(() => { r && this.log("finished closing key sessions and clearing media keys"); }); }
    onManifestLoading() { this._clear(); }
    onManifestLoaded(e, { sessionKeys: t }) { if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
        const s = t.reduce((n, r) => (n.indexOf(r.keyFormat) === -1 && n.push(r.keyFormat), n), []);
        this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s);
    } }
    removeSession(e) { const { mediaKeysSession: t, licenseXhr: s, decryptdata: n } = e; if (t) {
        this.log(`Remove licenses and keys and close session "${t.sessionId}" keyId: ${je((n == null ? void 0 : n.keyId) || [])}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = void 0), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
        const r = this.mediaKeySessions.indexOf(e);
        r > -1 && this.mediaKeySessions.splice(r, 1);
        const { keyStatusTimeouts: a } = e;
        a && Object.keys(a).forEach(u => self.clearTimeout(a[u]));
        const { drmSystemOptions: o } = this.config;
        return (YT(o) ? new Promise((u, c) => { self.setTimeout(() => c(new Error("MediaKeySession.remove() timeout")), 8e3), t.remove().then(u).catch(c); }) : Promise.resolve()).catch(u => { this.log(`Could not remove session: ${u}`), this.hls && this.hls.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR, fatal: !1, error: new Error(`Could not remove session: ${u}`) }); }).then(() => t.close()).catch(u => { this.log(`Could not close session: ${u}`), this.hls && this.hls.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR, fatal: !1, error: new Error(`Could not close session: ${u}`) }); });
    } return Promise.resolve(); }
}
Ws.CDMCleanupPromise = void 0;
function Yr(i) { if (!i)
    throw new Error("Could not read keyId of undefined decryptdata"); if (i.keyId === null)
    throw new Error("keyId is null"); return je(i.keyId); }
function fI(i, e) { if (i.keyId && e.mediaKeysSession.keyStatuses.has(i.keyId))
    return e.mediaKeysSession.keyStatuses.get(i.keyId); if (i.matches(e.decryptdata))
    return e.keyStatus; }
class lt extends Error {
    constructor(e, t) { super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error; }
}
function Of(i, e) { const t = i === "output-restricted", s = t ? k.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED : k.KEY_SYSTEM_STATUS_INTERNAL_ERROR; return new lt({ type: q.KEY_SYSTEM_ERROR, details: s, fatal: !1, decryptdata: e }, t ? "HDCP level output restricted" : `key status changed to "${i}"`); }
class mI {
    constructor(e) { this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners(); }
    setStreamController(e) { this.streamController = e; }
    registerListeners() { this.hls.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(S.MEDIA_DETACHING, this.onMediaDetaching, this); }
    unregisterListeners() { this.hls.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(S.MEDIA_DETACHING, this.onMediaDetaching, this); }
    destroy() { this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null; }
    onMediaAttaching(e, t) { const s = this.hls.config; if (s.capLevelOnFPSDrop) {
        const n = t.media instanceof self.HTMLVideoElement ? t.media : null;
        this.media = n, n && typeof n.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod);
    } }
    onMediaDetaching() { this.media = null; }
    checkFPS(e, t, s) { const n = performance.now(); if (t) {
        if (this.lastTime) {
            const r = n - this.lastTime, a = s - this.lastDroppedFrames, o = t - this.lastDecodedFrames, l = 1e3 * a / r, u = this.hls;
            if (u.trigger(S.FPS_DROP, { currentDropped: a, currentDecoded: o, totalDroppedFrames: s }), l > 0 && a > u.config.fpsDroppedMonitoringThreshold * o) {
                let c = u.currentLevel;
                u.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c), c > 0 && (u.autoLevelCapping === -1 || u.autoLevelCapping >= c) && (c = c - 1, u.trigger(S.FPS_DROP_LEVEL_CAPPING, { level: c, droppedLevel: u.currentLevel }), u.autoLevelCapping = c, this.streamController.nextLevelSwitch());
            }
        }
        this.lastTime = n, this.lastDroppedFrames = s, this.lastDecodedFrames = t;
    } }
    checkFPSInterval() { const e = this.media; if (e)
        if (this.isVideoPlaybackQualityAvailable) {
            const t = e.getVideoPlaybackQuality();
            this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
        }
        else
            this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount); }
}
function zp(i, e) { let t; try {
    t = new Event("addtrack");
}
catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
} t.track = i, e.dispatchEvent(t); }
function Wp(i, e) { const t = i.mode; if (t === "disabled" && (i.mode = "hidden"), i.cues && !i.cues.getCueById(e.id))
    try {
        if (i.addCue(e), !i.cues.getCueById(e.id))
            throw new Error(`addCue is failed for: ${e}`);
    }
    catch (s) {
        le.debug(`[texttrack-utils]: ${s}`);
        try {
            const n = new self.TextTrackCue(e.startTime, e.endTime, e.text);
            n.id = e.id, i.addCue(n);
        }
        catch (n) {
            le.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${n}`);
        }
    } t === "disabled" && (i.mode = t); }
function Us(i, e) { const t = i.mode; if (t === "disabled" && (i.mode = "hidden"), i.cues)
    for (let s = i.cues.length; s--;)
        e && i.cues[s].removeEventListener("enter", e), i.removeCue(i.cues[s]); t === "disabled" && (i.mode = t); }
function Bu(i, e, t, s) { const n = i.mode; if (n === "disabled" && (i.mode = "hidden"), i.cues && i.cues.length > 0) {
    const r = pI(i.cues, e, t);
    for (let a = 0; a < r.length; a++)
        (!s || s(r[a])) && i.removeCue(r[a]);
} n === "disabled" && (i.mode = n); }
function gI(i, e) { if (e <= i[0].startTime)
    return 0; const t = i.length - 1; if (e > i[t].endTime)
    return -1; let s = 0, n = t, r; for (; s <= n;)
    if (r = Math.floor((n + s) / 2), e < i[r].startTime)
        n = r - 1;
    else if (e > i[r].startTime && s < t)
        s = r + 1;
    else
        return r; return i[s].startTime - e < e - i[n].startTime ? s : n; }
function pI(i, e, t) { const s = [], n = gI(i, e); if (n > -1)
    for (let r = n, a = i.length; r < a; r++) {
        const o = i[r];
        if (o.startTime >= e && o.endTime <= t)
            s.push(o);
        else if (o.startTime > t)
            return s;
    } return s; }
function Sa(i) { const e = []; for (let t = 0; t < i.length; t++) {
    const s = i[t];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && e.push(i[t]);
} return e; }
class yI extends od {
    constructor(e) { super(e, "subtitle-track-controller"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.onTextTracksChanged = () => { if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return; let t = null; const s = Sa(this.media.textTracks); for (let r = 0; r < s.length; r++)
        if (s[r].mode === "hidden")
            t = s[r];
        else if (s[r].mode === "showing") {
            t = s[r];
            break;
        } const n = this.findTrackForTextTrack(t); this.subtitleTrack !== n && this.setSubtitleTrack(n); }, this.registerListeners(); }
    destroy() { this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy(); }
    get subtitleDisplay() { return this._subtitleDisplay; }
    set subtitleDisplay(e) { this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes(); }
    registerListeners() { const { hls: e } = this; e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.LEVEL_LOADING, this.onLevelLoading, this), e.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(S.ERROR, this.onError, this); }
    unregisterListeners() { const { hls: e } = this; e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.LEVEL_LOADING, this.onLevelLoading, this), e.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(S.ERROR, this.onError, this); }
    onMediaAttached(e, t) { this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange)); }
    pollTrackChange(e) { self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e); }
    onMediaDetaching(e, t) { const s = this.media; if (!s)
        return; const n = !!t.transferMedia; if (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || s.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), this.subtitleTrack = -1, this.media = null, n)
        return; Sa(s.textTracks).forEach(a => { Us(a); }); }
    onManifestLoading() { this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0; }
    onManifestParsed(e, t) { this.tracks = t.subtitleTracks; }
    onSubtitleTrackLoaded(e, t) { const { id: s, groupId: n, details: r } = t, a = this.tracksInGroup[s]; if (!a || a.groupId !== n) {
        this.warn(`Subtitle track with id:${s} and group:${n} not found in active group ${a == null ? void 0 : a.groupId}`);
        return;
    } const o = a.details; a.details = t.details, this.log(`Subtitle track ${s} "${a.name}" lang:${a.lang} group:${n} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o); }
    onLevelLoading(e, t) { this.switchLevel(t.level); }
    onLevelSwitching(e, t) { this.switchLevel(t.level); }
    switchLevel(e) { const t = this.hls.levels[e]; if (!t)
        return; const s = t.subtitleGroups || null, n = this.groupIds; let r = this.currentTrack; if (!s || (n == null ? void 0 : n.length) !== (s == null ? void 0 : s.length) || s != null && s.some(a => (n == null ? void 0 : n.indexOf(a)) === -1)) {
        this.groupIds = s, this.trackId = -1, this.currentTrack = null;
        const a = this.tracks.filter(c => !s || s.indexOf(c.groupId) !== -1);
        if (a.length)
            this.selectDefaultTrack && !a.some(c => c.default) && (this.selectDefaultTrack = !1), a.forEach((c, d) => { c.id = d; });
        else if (!r && !this.tracksInGroup.length)
            return;
        this.tracksInGroup = a;
        const o = this.hls.config.subtitlePreference;
        if (!r && o) {
            this.selectDefaultTrack = !1;
            const c = Xt(o, a);
            if (c > -1)
                r = a[c];
            else {
                const d = Xt(o, this.tracks);
                r = this.tracks[d];
            }
        }
        let l = this.findTrackId(r);
        l === -1 && r && (l = this.findTrackId(null));
        const u = { subtitleTracks: a };
        this.log(`Updating subtitle tracks, ${a.length} track(s) found in "${s == null ? void 0 : s.join(",")}" group-id`), this.hls.trigger(S.SUBTITLE_TRACKS_UPDATED, u), l !== -1 && this.trackId === -1 && this.setSubtitleTrack(l);
    } }
    findTrackId(e) { const t = this.tracksInGroup, s = this.selectDefaultTrack; for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (!(s && !r.default || !s && !e) && (!e || ls(r, e)))
            return n;
    } if (e) {
        for (let n = 0; n < t.length; n++) {
            const r = t[n];
            if (dr(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
                return n;
        }
        for (let n = 0; n < t.length; n++) {
            const r = t[n];
            if (dr(e.attrs, r.attrs, ["LANGUAGE"]))
                return n;
        }
    } return -1; }
    findTrackForTextTrack(e) { if (e) {
        const t = this.tracksInGroup;
        for (let s = 0; s < t.length; s++) {
            const n = t[s];
            if (Ou(n, e))
                return s;
        }
    } return -1; }
    onError(e, t) { t.fatal || !t.context || t.context.type === se.SUBTITLE_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t); }
    get allSubtitleTracks() { return this.tracks; }
    get subtitleTracks() { return this.tracksInGroup; }
    get subtitleTrack() { return this.trackId; }
    set subtitleTrack(e) { this.selectDefaultTrack = !1, this.setSubtitleTrack(e); }
    setSubtitleOption(e) { if (this.hls.config.subtitlePreference = e, e) {
        if (e.id === -1)
            return this.setSubtitleTrack(-1), null;
        const t = this.allSubtitleTracks;
        if (this.selectDefaultTrack = !1, t.length) {
            const s = this.currentTrack;
            if (s && ls(e, s))
                return s;
            const n = Xt(e, this.tracksInGroup);
            if (n > -1) {
                const r = this.tracksInGroup[n];
                return this.setSubtitleTrack(n), r;
            }
            else {
                if (s)
                    return null;
                {
                    const r = Xt(e, t);
                    if (r > -1)
                        return t[r];
                }
            }
        }
    } return null; }
    loadPlaylist(e) { super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e); }
    loadingPlaylist(e, t) { super.loadingPlaylist(e, t); const s = e.id, n = e.groupId, r = this.getUrlWithDirectives(e.url, t), a = e.details, o = a == null ? void 0 : a.age; this.log(`Loading subtitle ${s} "${e.name}" lang:${e.lang} group:${n}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${r}`), this.hls.trigger(S.SUBTITLE_TRACK_LOADING, { url: r, id: s, groupId: n, deliveryDirectives: t || null, track: e }); }
    toggleTrackModes() { const { media: e } = this; if (!e)
        return; const t = Sa(e.textTracks), s = this.currentTrack; let n; if (s && (n = t.filter(r => Ou(s, r))[0], n || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(t).forEach(r => { r.mode !== "disabled" && r !== n && (r.mode = "disabled"); }), n) {
        const r = this.subtitleDisplay ? "showing" : "hidden";
        n.mode !== r && (n.mode = r);
    } }
    setSubtitleTrack(e) { const t = this.tracksInGroup; if (!this.media) {
        this.queuedDefaultTrack = e;
        return;
    } if (e < -1 || e >= t.length || !G(e)) {
        this.warn(`Invalid subtitle track id: ${e}`);
        return;
    } this.selectDefaultTrack = !1; const s = this.currentTrack, n = t[e] || null; if (this.trackId = e, this.currentTrack = n, this.toggleTrackModes(), !n) {
        this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, { id: e });
        return;
    } const r = !!n.details && !n.details.live; if (e === this.trackId && n === s && r)
        return; this.log(`Switching to subtitle-track ${e}` + (n ? ` "${n.name}" lang:${n.lang} group:${n.groupId}` : "")); const { id: a, groupId: o = "", name: l, type: u, url: c } = n; this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, { id: a, groupId: o, name: l, type: u, url: c }); const d = this.switchParams(n.url, s == null ? void 0 : s.details, n.details); this.loadPlaylist(d); }
}
function vI() { try {
    return crypto.randomUUID();
}
catch {
    try {
        const e = URL.createObjectURL(new Blob), t = e.toString();
        return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
    }
    catch {
        let t = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, n => { const r = (t + Math.random() * 16) % 16 | 0; return t = Math.floor(t / 16), (n == "x" ? r : r & 3 | 8).toString(16); });
    }
} }
function Un(i) { let e = 5381, t = i.length; for (; t;)
    e = e * 33 ^ i.charCodeAt(--t); return (e >>> 0).toString(); }
const Ys = .025;
let ro = function (i) { return i[i.Point = 0] = "Point", i[i.Range = 1] = "Range", i; }({});
function xI(i, e, t) { return `${i.identifier}-${t + 1}-${Un(e)}`; }
class EI {
    constructor(e, t) { this.base = void 0, this._duration = null, this._timelineStart = null, this.appendInPlaceDisabled = void 0, this.appendInPlaceStarted = void 0, this.dateRange = void 0, this.hasPlayed = !1, this.cumulativeDuration = 0, this.resumeOffset = NaN, this.playoutLimit = NaN, this.restrictions = { skip: !1, jump: !1 }, this.snapOptions = { out: !1, in: !1 }, this.assetList = [], this.assetListLoader = void 0, this.assetListResponse = null, this.resumeAnchor = void 0, this.error = void 0, this.resetOnResume = void 0, this.base = t, this.dateRange = e, this.setDateRange(e); }
    setDateRange(e) { this.dateRange = e, this.resumeOffset = e.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset), this.playoutLimit = e.attr.optionalFloat("X-PLAYOUT-LIMIT", this.playoutLimit), this.restrictions = e.attr.enumeratedStringList("X-RESTRICT", this.restrictions), this.snapOptions = e.attr.enumeratedStringList("X-SNAP", this.snapOptions); }
    reset() { var e; this.appendInPlaceStarted = !1, (e = this.assetListLoader) == null || e.destroy(), this.assetListLoader = void 0, this.supplementsPrimary || (this.assetListResponse = null, this.assetList = [], this._duration = null); }
    isAssetPastPlayoutLimit(e) { var t; if (e > 0 && e >= this.assetList.length)
        return !0; const s = this.playoutLimit; return e <= 0 || isNaN(s) ? !1 : s === 0 ? !0 : (((t = this.assetList[e]) == null ? void 0 : t.startOffset) || 0) > s; }
    findAssetIndex(e) { return this.assetList.indexOf(e); }
    get identifier() { return this.dateRange.id; }
    get startDate() { return this.dateRange.startDate; }
    get startTime() { const e = this.dateRange.startTime; if (this.snapOptions.out) {
        const t = this.dateRange.tagAnchor;
        if (t)
            return vl(e, t);
    } return e; }
    get startOffset() { return this.cue.pre ? 0 : this.startTime; }
    get startIsAligned() { if (this.startTime === 0 || this.snapOptions.out)
        return !0; const e = this.dateRange.tagAnchor; if (e) {
        const t = this.dateRange.startTime, s = vl(t, e);
        return t - s < .1;
    } return !1; }
    get resumptionOffset() { const e = this.resumeOffset, t = G(e) ? e : this.duration; return this.cumulativeDuration + t; }
    get resumeTime() { const e = this.startOffset + this.resumptionOffset; if (this.snapOptions.in) {
        const t = this.resumeAnchor;
        if (t)
            return vl(e, t);
    } return e; }
    get appendInPlace() { return this.appendInPlaceStarted ? !0 : this.appendInPlaceDisabled ? !1 : !!(!this.cue.once && !this.cue.pre && this.startIsAligned && (isNaN(this.playoutLimit) && isNaN(this.resumeOffset) || this.resumeOffset && this.duration && Math.abs(this.resumeOffset - this.duration) < Ys)); }
    set appendInPlace(e) { if (this.appendInPlaceStarted) {
        this.resetOnResume = !e;
        return;
    } this.appendInPlaceDisabled = !e; }
    get timelineStart() { return this._timelineStart !== null ? this._timelineStart : this.startTime; }
    set timelineStart(e) { this._timelineStart = e; }
    get duration() { const e = this.playoutLimit; let t; return this._duration !== null ? t = this._duration : this.dateRange.duration ? t = this.dateRange.duration : t = this.dateRange.plannedDuration || 0, !isNaN(e) && e < t && (t = e), t; }
    set duration(e) { this._duration = e; }
    get cue() { return this.dateRange.cue; }
    get timelineOccupancy() { return this.dateRange.attr["X-TIMELINE-OCCUPIES"] === "RANGE" ? ro.Range : ro.Point; }
    get supplementsPrimary() { return this.dateRange.attr["X-TIMELINE-STYLE"] === "PRIMARY"; }
    get contentMayVary() { return this.dateRange.attr["X-CONTENT-MAY-VARY"] !== "NO"; }
    get assetUrl() { return this.dateRange.attr["X-ASSET-URI"]; }
    get assetListUrl() { return this.dateRange.attr["X-ASSET-LIST"]; }
    get baseUrl() { return this.base.url; }
    get assetListLoaded() { return this.assetList.length > 0 || this.assetListResponse !== null; }
    toString() { return SI(this); }
}
function vl(i, e) { return i - e.start < e.duration / 2 && !(Math.abs(i - (e.start + e.duration)) < Ys) ? e.start : e.start + e.duration; }
function Yp(i, e, t) { const s = new self.URL(i, t); return s.protocol !== "data:" && s.searchParams.set("_HLS_primary_id", e), s; }
function xl(i, e) { for (; (t = i.assetList[++e]) != null && t.error;)
    var t; return e; }
function SI(i) { return `["${i.identifier}" ${i.cue.pre ? "<pre>" : i.cue.post ? "<post>" : ""}${i.timelineStart.toFixed(2)}-${i.resumeTime.toFixed(2)}]`; }
function As(i) { const e = i.timelineStart, t = i.duration || 0; return `["${i.identifier}" ${e.toFixed(2)}-${(e + t).toFixed(2)}]`; }
class TI {
    constructor(e, t, s, n) { this.hls = void 0, this.interstitial = void 0, this.assetItem = void 0, this.tracks = null, this.hasDetails = !1, this.mediaAttached = null, this._currentTime = void 0, this._bufferedEosTime = void 0, this.checkPlayout = () => { this.reachedPlayout(this.currentTime) && this.hls && this.hls.trigger(S.PLAYOUT_LIMIT_REACHED, {}); }; const r = this.hls = new e(t); this.interstitial = s, this.assetItem = n; const a = () => { this.hasDetails = !0; }; r.once(S.LEVEL_LOADED, a), r.once(S.AUDIO_TRACK_LOADED, a), r.once(S.SUBTITLE_TRACK_LOADED, a), r.on(S.MEDIA_ATTACHING, (o, { media: l }) => { this.removeMediaListeners(), this.mediaAttached = l, this.interstitial.playoutLimit && (l.addEventListener("timeupdate", this.checkPlayout), this.appendInPlace && r.on(S.BUFFER_APPENDED, () => { const c = this.bufferedEnd; this.reachedPlayout(c) && (this._bufferedEosTime = c, r.trigger(S.BUFFERED_TO_END, void 0)); })); }); }
    get appendInPlace() { return this.interstitial.appendInPlace; }
    loadSource() { const e = this.hls; if (e)
        if (e.url)
            e.levels.length && !e.started && e.startLoad(-1, !0);
        else {
            let t = this.assetItem.uri;
            try {
                t = Yp(t, e.config.primarySessionId || "").href;
            }
            catch { }
            e.loadSource(t);
        } }
    bufferedInPlaceToEnd(e) { var t; if (!this.appendInPlace)
        return !1; if ((t = this.hls) != null && t.bufferedToEnd)
        return !0; if (!e)
        return !1; const s = Math.min(this._bufferedEosTime || 1 / 0, this.duration), n = this.timelineOffset, r = Z.bufferInfo(e, n, 0); return this.getAssetTime(r.end) >= s - .02; }
    reachedPlayout(e) { const s = this.interstitial.playoutLimit; return this.startOffset + e >= s; }
    get destroyed() { var e; return !((e = this.hls) != null && e.userConfig); }
    get assetId() { return this.assetItem.identifier; }
    get interstitialId() { return this.assetItem.parentIdentifier; }
    get media() { var e; return ((e = this.hls) == null ? void 0 : e.media) || null; }
    get bufferedEnd() { const e = this.media || this.mediaAttached; if (!e)
        return this._bufferedEosTime ? this._bufferedEosTime : this.currentTime; const t = Z.bufferInfo(e, e.currentTime, .001); return this.getAssetTime(t.end); }
    get currentTime() { const e = this.media || this.mediaAttached; return e ? this.getAssetTime(e.currentTime) : this._currentTime || 0; }
    get duration() { const e = this.assetItem.duration; if (!e)
        return 0; const t = this.interstitial.playoutLimit; if (t) {
        const s = t - this.startOffset;
        if (s > 0 && s < e)
            return s;
    } return e; }
    get remaining() { const e = this.duration; return e ? Math.max(0, e - this.currentTime) : 0; }
    get startOffset() { return this.assetItem.startOffset; }
    get timelineOffset() { var e; return ((e = this.hls) == null ? void 0 : e.config.timelineOffset) || 0; }
    set timelineOffset(e) { const t = this.timelineOffset; if (e !== t) {
        const s = e - t;
        if (Math.abs(s) > 1 / 9e4 && this.hls) {
            if (this.hasDetails)
                throw new Error("Cannot set timelineOffset after playlists are loaded");
            this.hls.config.timelineOffset = e;
        }
    } }
    getAssetTime(e) { const t = this.timelineOffset, s = this.duration; return Math.min(Math.max(0, e - t), s); }
    removeMediaListeners() { const e = this.mediaAttached; e && (this._currentTime = e.currentTime, this.bufferSnapShot(), e.removeEventListener("timeupdate", this.checkPlayout)); }
    bufferSnapShot() { if (this.mediaAttached) {
        var e;
        (e = this.hls) != null && e.bufferedToEnd && (this._bufferedEosTime = this.bufferedEnd);
    } }
    destroy() { this.removeMediaListeners(), this.hls && this.hls.destroy(), this.hls = null, this.tracks = this.mediaAttached = this.checkPlayout = null; }
    attachMedia(e) { var t; this.loadSource(), (t = this.hls) == null || t.attachMedia(e); }
    detachMedia() { var e; this.removeMediaListeners(), this.mediaAttached = null, (e = this.hls) == null || e.detachMedia(); }
    resumeBuffering() { var e; (e = this.hls) == null || e.resumeBuffering(); }
    pauseBuffering() { var e; (e = this.hls) == null || e.pauseBuffering(); }
    transferMedia() { var e; return this.bufferSnapShot(), ((e = this.hls) == null ? void 0 : e.transferMedia()) || null; }
    resetDetails() { const e = this.hls; if (e && this.hasDetails) {
        e.stopLoad();
        const t = s => delete s.details;
        e.levels.forEach(t), e.allAudioTracks.forEach(t), e.allSubtitleTracks.forEach(t), this.hasDetails = !1;
    } }
    on(e, t, s) { var n; (n = this.hls) == null || n.on(e, t); }
    once(e, t, s) { var n; (n = this.hls) == null || n.once(e, t); }
    off(e, t, s) { var n; (n = this.hls) == null || n.off(e, t); }
    toString() { var e; return `HlsAssetPlayer: ${As(this.assetItem)} ${(e = this.hls) == null ? void 0 : e.sessionId} ${this.appendInPlace ? "append-in-place" : ""}`; }
}
const Mf = .033;
class LI extends _t {
    constructor(e, t) { super("interstitials-sched", t), this.onScheduleUpdate = void 0, this.eventMap = {}, this.events = null, this.items = null, this.durations = { primary: 0, playout: 0, integrated: 0 }, this.onScheduleUpdate = e; }
    destroy() { this.reset(), this.onScheduleUpdate = null; }
    reset() { this.eventMap = {}, this.setDurations(0, 0, 0), this.events && this.events.forEach(e => e.reset()), this.events = this.items = null; }
    resetErrorsInRange(e, t) { return this.events ? this.events.reduce((s, n) => e <= n.startOffset && t > n.startOffset ? (delete n.error, s + 1) : s, 0) : 0; }
    get duration() { const e = this.items; return e ? e[e.length - 1].end : 0; }
    get length() { return this.items ? this.items.length : 0; }
    getEvent(e) { return e && this.eventMap[e] || null; }
    hasEvent(e) { return e in this.eventMap; }
    findItemIndex(e, t) { if (e.event)
        return this.findEventIndex(e.event.identifier); let s = -1; e.nextEvent ? s = this.findEventIndex(e.nextEvent.identifier) - 1 : e.previousEvent && (s = this.findEventIndex(e.previousEvent.identifier) + 1); const n = this.items; if (n)
        for (n[s] || (t === void 0 && (t = e.start), s = this.findItemIndexAtTime(t)); s >= 0 && (r = n[s]) != null && r.event;) {
            var r;
            s--;
        } return s; }
    findItemIndexAtTime(e, t) { const s = this.items; if (s)
        for (let n = 0; n < s.length; n++) {
            let r = s[n];
            if (t && t !== "primary" && (r = r[t]), e === r.start || e > r.start && e < r.end)
                return n;
        } return -1; }
    findJumpRestrictedIndex(e, t) { const s = this.items; if (s)
        for (let n = e; n <= t && s[n]; n++) {
            const r = s[n].event;
            if (r != null && r.restrictions.jump && !r.appendInPlace)
                return n;
        } return -1; }
    findEventIndex(e) { const t = this.items; if (t)
        for (let n = t.length; n--;) {
            var s;
            if (((s = t[n].event) == null ? void 0 : s.identifier) === e)
                return n;
        } return -1; }
    findAssetIndex(e, t) { const s = e.assetList, n = s.length; if (n > 1)
        for (let r = 0; r < n; r++) {
            const a = s[r];
            if (!a.error) {
                const o = a.timelineStart;
                if (t === o || t > o && (t < o + (a.duration || 0) || r === n - 1))
                    return r;
            }
        } return 0; }
    get assetIdAtEnd() { var e; const t = (e = this.items) == null || (e = e[this.length - 1]) == null ? void 0 : e.event; if (t) {
        const s = t.assetList, n = s[s.length - 1];
        if (n)
            return n.identifier;
    } return null; }
    parseInterstitialDateRanges(e, t) { const s = e.main.details, { dateRanges: n } = s, r = this.events, a = this.parseDateRanges(n, { url: s.url }, t), o = Object.keys(n), l = r ? r.filter(u => !o.includes(u.identifier)) : []; a.length && a.sort((u, c) => { const d = u.cue.pre, h = u.cue.post, f = c.cue.pre, m = c.cue.post; if (d && !f)
        return -1; if (f && !d || h && !m)
        return 1; if (m && !h)
        return -1; if (!d && !f && !h && !m) {
        const p = u.startTime, x = c.startTime;
        if (p !== x)
            return p - x;
    } return u.dateRange.tagOrder - c.dateRange.tagOrder; }), this.events = a, l.forEach(u => { this.removeEvent(u); }), this.updateSchedule(e, l); }
    updateSchedule(e, t = [], s = !1) { const n = this.events || []; if (n.length || t.length || this.length < 2) {
        const r = this.items, a = this.parseSchedule(n, e);
        (s || t.length || (r == null ? void 0 : r.length) !== a.length || a.some((l, u) => Math.abs(l.playout.start - r[u].playout.start) > .005 || Math.abs(l.playout.end - r[u].playout.end) > .005)) && (this.items = a, this.onScheduleUpdate(t, r));
    } }
    parseDateRanges(e, t, s) { const n = [], r = Object.keys(e); for (let a = 0; a < r.length; a++) {
        const o = r[a], l = e[o];
        if (l.isInterstitial) {
            let u = this.eventMap[o];
            u ? u.setDateRange(l) : (u = new EI(l, t), this.eventMap[o] = u, s === !1 && (u.appendInPlace = s)), n.push(u);
        }
    } return n; }
    parseSchedule(e, t) { const s = [], n = t.main.details, r = n.live ? 1 / 0 : n.edge; let a = 0; if (e = e.filter(l => !l.error && !(l.cue.once && l.hasPlayed)), e.length) {
        this.resolveOffsets(e, t);
        let l = 0, u = 0;
        if (e.forEach((c, d) => { const h = c.cue.pre, f = c.cue.post, m = e[d - 1] || null, p = c.appendInPlace, x = f ? r : c.startOffset, y = c.duration, v = c.timelineOccupancy === ro.Range ? y : 0, E = c.resumptionOffset, T = (m == null ? void 0 : m.startTime) === x, L = x + c.cumulativeDuration; let w = p ? L + y : x + E; if (h || !f && x <= 0) {
            const R = u;
            u += v, c.timelineStart = L;
            const _ = a;
            a += y, s.push({ event: c, start: L, end: w, playout: { start: _, end: a }, integrated: { start: R, end: u } });
        }
        else if (x <= r) {
            if (!T) {
                const A = x - l;
                if (A > Mf) {
                    const D = l, B = u;
                    u += A;
                    const V = a;
                    a += A;
                    const Y = { previousEvent: e[d - 1] || null, nextEvent: c, start: D, end: D + A, playout: { start: V, end: a }, integrated: { start: B, end: u } };
                    s.push(Y);
                }
                else
                    A > 0 && m && (m.cumulativeDuration += A, s[s.length - 1].end = x);
            }
            f && (w = L), c.timelineStart = L;
            const R = u;
            u += v;
            const _ = a;
            a += y, s.push({ event: c, start: L, end: w, playout: { start: _, end: a }, integrated: { start: R, end: u } });
        }
        else
            return; const I = c.resumeTime; f || I > r ? l = r : l = I; }), l < r) {
            var o;
            const c = l, d = u, h = r - l;
            u += h;
            const f = a;
            a += h, s.push({ previousEvent: ((o = s[s.length - 1]) == null ? void 0 : o.event) || null, nextEvent: null, start: l, end: c + h, playout: { start: f, end: a }, integrated: { start: d, end: u } });
        }
        this.setDurations(r, a, u);
    }
    else
        s.push({ previousEvent: null, nextEvent: null, start: 0, end: r, playout: { start: 0, end: r }, integrated: { start: 0, end: r } }), this.setDurations(r, r, r); return s; }
    setDurations(e, t, s) { this.durations = { primary: e, playout: t, integrated: s }; }
    resolveOffsets(e, t) { const s = t.main.details, n = s.live ? 1 / 0 : s.edge; let r = 0, a = -1; e.forEach((o, l) => { const u = o.cue.pre, c = o.cue.post, d = u ? 0 : c ? n : o.startTime; this.updateAssetDurations(o), a === d ? o.cumulativeDuration = r : (r = 0, a = d), !c && o.snapOptions.in && (o.resumeAnchor = ms(null, s.fragments, o.startOffset + o.resumptionOffset, 0, 0) || void 0), o.appendInPlace && !o.appendInPlaceStarted && (this.primaryCanResumeInPlaceAt(o, t) || (o.appendInPlace = !1)), !o.appendInPlace && l + 1 < e.length && e[l + 1].startTime - e[l].resumeTime < Mf && (e[l + 1].appendInPlace = !1, e[l + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${o}`)); const f = G(o.resumeOffset) ? o.resumeOffset : o.duration; r += f; }); }
    primaryCanResumeInPlaceAt(e, t) { const s = e.resumeTime, n = e.startTime + e.resumptionOffset; return Math.abs(s - n) > Ys ? (this.log(`"${e.identifier}" resumption ${s} not aligned with estimated timeline end ${n}`), !1) : !Object.keys(t).some(a => { const o = t[a].details, l = o.edge; if (s >= l)
        return this.log(`"${e.identifier}" resumption ${s} past ${a} playlist end ${l}`), !1; const u = ms(null, o.fragments, s); if (!u)
        return this.log(`"${e.identifier}" resumption ${s} does not align with any fragments in ${a} playlist (${o.fragStart}-${o.fragmentEnd})`), !0; const c = a === "audio" ? .175 : 0; return Math.abs(u.start - s) < Ys + c || Math.abs(u.end - s) < Ys + c ? !1 : (this.log(`"${e.identifier}" resumption ${s} not aligned with ${a} fragment bounds (${u.start}-${u.end} sn: ${u.sn} cc: ${u.cc})`), !0); }); }
    updateAssetDurations(e) { if (!e.assetListLoaded)
        return; const t = e.timelineStart; let s = 0, n = !1, r = !1; for (let a = 0; a < e.assetList.length; a++) {
        const o = e.assetList[a], l = t + s;
        o.startOffset = s, o.timelineStart = l, n || (n = o.duration === null), r || (r = !!o.error);
        const u = o.error ? 0 : o.duration || 0;
        s += u;
    } n && !r ? e.duration = Math.max(s, e.duration) : e.duration = s; }
    removeEvent(e) { e.reset(), delete this.eventMap[e.identifier]; }
}
function Ct(i) { return `[${i.event ? '"' + i.event.identifier + '"' : "primary"}: ${i.start.toFixed(2)}-${i.end.toFixed(2)}]`; }
class II {
    constructor(e) { this.hls = void 0, this.hls = e; }
    destroy() { this.hls = null; }
    loadAssetList(e, t) { const s = e.assetListUrl; let n; try {
        n = Yp(s, this.hls.sessionId, e.baseUrl);
    }
    catch (h) {
        const f = this.assignAssetListError(e, k.ASSET_LIST_LOAD_ERROR, h, s);
        this.hls.trigger(S.ERROR, f);
        return;
    } t && n.protocol !== "data:" && n.searchParams.set("_HLS_start_offset", "" + t); const r = this.hls.config, a = r.loader, o = new a(r), l = { responseType: "json", url: n.href }, u = r.interstitialAssetListLoadPolicy.default, c = { loadPolicy: u, timeout: u.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, d = { onSuccess: (h, f, m, p) => { const x = h.data, y = x == null ? void 0 : x.ASSETS; if (!Array.isArray(y)) {
            const v = this.assignAssetListError(e, k.ASSET_LIST_PARSING_ERROR, new Error("Invalid interstitial asset list"), m.url, f, p);
            this.hls.trigger(S.ERROR, v);
            return;
        } e.assetListResponse = x, this.hls.trigger(S.ASSET_LIST_LOADED, { event: e, assetListResponse: x, networkDetails: p }); }, onError: (h, f, m, p) => { const x = this.assignAssetListError(e, k.ASSET_LIST_LOAD_ERROR, new Error(`Error loading X-ASSET-LIST: HTTP status ${h.code} ${h.text} (${f.url})`), f.url, p, m); this.hls.trigger(S.ERROR, x); }, onTimeout: (h, f, m) => { const p = this.assignAssetListError(e, k.ASSET_LIST_LOAD_TIMEOUT, new Error(`Timeout loading X-ASSET-LIST (${f.url})`), f.url, h, m); this.hls.trigger(S.ERROR, p); } }; return o.load(l, c, d), this.hls.trigger(S.ASSET_LIST_LOADING, { event: e }), o; }
    assignAssetListError(e, t, s, n, r, a) { return e.error = s, { type: q.NETWORK_ERROR, details: t, fatal: !1, interstitial: e, url: n, error: s, networkDetails: a, stats: r }; }
}
function Ff(i) { var e; i == null || (e = i.play()) == null || e.catch(() => { }); }
function qr(i, e) { return `[${i}] Advancing timeline position to ${e}`; }
class AI extends _t {
    constructor(e, t) {
        super("interstitials", e.logger), this.HlsPlayerClass = void 0, this.hls = void 0, this.assetListLoader = void 0, this.mediaSelection = null, this.altSelection = null, this.media = null, this.detachedData = null, this.requiredTracks = null, this.manager = null, this.playerQueue = [], this.bufferedPos = -1, this.timelinePos = -1, this.schedule = void 0, this.playingItem = null, this.bufferingItem = null, this.waitingItem = null, this.endedItem = null, this.playingAsset = null, this.endedAsset = null, this.bufferingAsset = null, this.shouldPlay = !1, this.onPlay = () => { this.shouldPlay = !0; }, this.onPause = () => { this.shouldPlay = !1; }, this.onSeeking = () => { const s = this.currentTime; if (s === void 0 || this.playbackDisabled || !this.schedule)
            return; const n = s - this.timelinePos; if (Math.abs(n) < 1 / 7056e5)
            return; const a = n <= -.01; this.timelinePos = s, this.bufferedPos = s; const o = this.playingItem; if (!o) {
            this.checkBuffer();
            return;
        } if (a && this.schedule.resetErrorsInRange(s, s - n) && this.updateSchedule(!0), this.checkBuffer(), a && s < o.start || s >= o.end) {
            var l;
            const f = this.findItemIndex(o);
            let m = this.schedule.findItemIndexAtTime(s);
            if (m === -1 && (m = f + (a ? -1 : 1), this.log(`seeked ${a ? "back " : ""}to position not covered by schedule ${s} (resolving from ${f} to ${m})`)), !this.isInterstitial(o) && (l = this.media) != null && l.paused && (this.shouldPlay = !1), !a && m > f) {
                const p = this.schedule.findJumpRestrictedIndex(f + 1, m);
                if (p > f) {
                    this.setSchedulePosition(p);
                    return;
                }
            }
            this.setSchedulePosition(m);
            return;
        } const u = this.playingAsset; if (!u) {
            if (this.playingLastItem && this.isInterstitial(o)) {
                const f = o.event.assetList[0];
                f && (this.endedItem = this.playingItem, this.playingItem = null, this.setScheduleToAssetAtTime(s, f));
            }
            return;
        } const c = u.timelineStart, d = u.duration || 0; if (a && s < c || s >= c + d) {
            var h;
            (h = o.event) != null && h.appendInPlace && (this.clearAssetPlayers(o.event, o), this.flushFrontBuffer(s)), this.setScheduleToAssetAtTime(s, u);
        } }, this.onTimeupdate = () => { const s = this.currentTime; if (s === void 0 || this.playbackDisabled)
            return; if (s > this.timelinePos)
            this.timelinePos = s, s > this.bufferedPos && this.checkBuffer();
        else
            return; const n = this.playingItem; if (!n || this.playingLastItem)
            return; if (s >= n.end) {
            this.timelinePos = n.end;
            const o = this.findItemIndex(n);
            this.setSchedulePosition(o + 1);
        } const r = this.playingAsset; if (!r)
            return; const a = r.timelineStart + (r.duration || 0); s >= a && this.setScheduleToAssetAtTime(s, r); }, this.onScheduleUpdate = (s, n) => {
            const r = this.schedule;
            if (!r)
                return;
            const a = this.playingItem, o = r.events || [], l = r.items || [], u = r.durations, c = s.map(p => p.identifier), d = !!(o.length || c.length);
            (d || n) && this.log(`INTERSTITIALS_UPDATED (${o.length}): ${o}
Schedule: ${l.map(p => Ct(p))} pos: ${this.timelinePos}`), c.length && this.log(`Removed events ${c}`);
            let h = null, f = null;
            a && (h = this.updateItem(a, this.timelinePos), this.itemsMatch(a, h) ? this.playingItem = h : this.waitingItem = this.endedItem = null), this.waitingItem = this.updateItem(this.waitingItem), this.endedItem = this.updateItem(this.endedItem);
            const m = this.bufferingItem;
            if (m && (f = this.updateItem(m, this.bufferedPos), this.itemsMatch(m, f) ? this.bufferingItem = f : m.event && (this.bufferingItem = this.playingItem, this.clearInterstitial(m.event, null))), s.forEach(p => { p.assetList.forEach(x => { this.clearAssetPlayer(x.identifier, null); }); }), this.playerQueue.forEach(p => { if (p.interstitial.appendInPlace) {
                const x = p.assetItem.timelineStart, y = p.timelineOffset - x;
                if (y)
                    try {
                        p.timelineOffset = x;
                    }
                    catch (v) {
                        Math.abs(y) > Ys && this.warn(`${v} ("${p.assetId}" ${p.timelineOffset}->${x})`);
                    }
            } }), d || n) {
                if (this.hls.trigger(S.INTERSTITIALS_UPDATED, { events: o.slice(0), schedule: l.slice(0), durations: u, removedIds: c }), this.isInterstitial(a) && c.includes(a.event.identifier)) {
                    this.warn(`Interstitial "${a.event.identifier}" removed while playing`), this.primaryFallback(a.event);
                    return;
                }
                a && this.trimInPlace(h, a), m && f !== h && this.trimInPlace(f, m), this.checkBuffer();
            }
        }, this.hls = e, this.HlsPlayerClass = t, this.assetListLoader = new II(e), this.schedule = new LI(this.onScheduleUpdate, e.logger), this.registerListeners();
    }
    registerListeners() { const e = this.hls; e && (e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(S.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.on(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(S.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.on(S.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.on(S.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.on(S.BUFFER_APPENDED, this.onBufferAppended, this), e.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(S.BUFFERED_TO_END, this.onBufferedToEnd, this), e.on(S.MEDIA_ENDED, this.onMediaEnded, this), e.on(S.ERROR, this.onError, this), e.on(S.DESTROYING, this.onDestroying, this)); }
    unregisterListeners() { const e = this.hls; e && (e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(S.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(S.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.off(S.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.off(S.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.off(S.BUFFER_CODECS, this.onBufferCodecs, this), e.off(S.BUFFER_APPENDED, this.onBufferAppended, this), e.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(S.BUFFERED_TO_END, this.onBufferedToEnd, this), e.off(S.MEDIA_ENDED, this.onMediaEnded, this), e.off(S.ERROR, this.onError, this), e.off(S.DESTROYING, this.onDestroying, this)); }
    startLoad() { this.resumeBuffering(); }
    stopLoad() { this.pauseBuffering(); }
    resumeBuffering() { var e; (e = this.getBufferingPlayer()) == null || e.resumeBuffering(); }
    pauseBuffering() { var e; (e = this.getBufferingPlayer()) == null || e.pauseBuffering(); }
    destroy() { this.unregisterListeners(), this.stopLoad(), this.assetListLoader && this.assetListLoader.destroy(), this.emptyPlayerQueue(), this.clearScheduleState(), this.schedule && this.schedule.destroy(), this.media = this.detachedData = this.mediaSelection = this.requiredTracks = this.altSelection = this.schedule = this.manager = null, this.hls = this.HlsPlayerClass = this.log = null, this.assetListLoader = null, this.onPlay = this.onPause = this.onSeeking = this.onTimeupdate = null, this.onScheduleUpdate = null; }
    onDestroying() { const e = this.primaryMedia || this.media; e && this.removeMediaListeners(e); }
    removeMediaListeners(e) { nt(e, "play", this.onPlay), nt(e, "pause", this.onPause), nt(e, "seeking", this.onSeeking), nt(e, "timeupdate", this.onTimeupdate); }
    onMediaAttaching(e, t) { const s = this.media = t.media; Xe(s, "seeking", this.onSeeking), Xe(s, "timeupdate", this.onTimeupdate), Xe(s, "play", this.onPlay), Xe(s, "pause", this.onPause); }
    onMediaAttached(e, t) { const s = this.effectivePlayingItem, n = this.detachedData; if (this.detachedData = null, s === null)
        this.checkStart();
    else if (!n) {
        this.clearScheduleState();
        const r = this.findItemIndex(s);
        this.setSchedulePosition(r);
    } }
    clearScheduleState() { this.log("clear schedule state"), this.playingItem = this.bufferingItem = this.waitingItem = this.endedItem = this.playingAsset = this.endedAsset = this.bufferingAsset = null; }
    onMediaDetaching(e, t) { const s = !!t.transferMedia, n = this.media; if (this.media = null, !s && (n && this.removeMediaListeners(n), this.detachedData)) {
        const r = this.getBufferingPlayer();
        r && (this.log(`Removing schedule state for detachedData and ${r}`), this.playingAsset = this.endedAsset = this.bufferingAsset = this.bufferingItem = this.waitingItem = this.detachedData = null, r.detachMedia()), this.shouldPlay = !1;
    } }
    get interstitialsManager() { if (!this.hls)
        return null; if (this.manager)
        return this.manager; const e = this, t = () => e.bufferingItem || e.waitingItem, s = d => d && e.getAssetPlayer(d.identifier), n = (d, h, f, m, p) => { if (d) {
        let x = d[h].start;
        const y = d.event;
        if (y) {
            if (h === "playout" || y.timelineOccupancy !== ro.Point) {
                const v = s(f);
                (v == null ? void 0 : v.interstitial) === y && (x += v.assetItem.startOffset + v[p]);
            }
        }
        else {
            const v = m === "bufferedPos" ? a() : e[m];
            x += v - d.start;
        }
        return x;
    } return 0; }, r = (d, h) => { var f; if (d !== 0 && h !== "primary" && (f = e.schedule) != null && f.length) {
        var m;
        const p = e.schedule.findItemIndexAtTime(d), x = (m = e.schedule.items) == null ? void 0 : m[p];
        if (x) {
            const y = x[h].start - x.start;
            return d + y;
        }
    } return d; }, a = () => { const d = e.bufferedPos; return d === Number.MAX_VALUE ? o("primary") : Math.max(d, 0); }, o = d => { var h, f; return (h = e.primaryDetails) != null && h.live ? e.primaryDetails.edge : ((f = e.schedule) == null ? void 0 : f.durations[d]) || 0; }, l = (d, h) => { var f, m; const p = e.effectivePlayingItem; if (p != null && (f = p.event) != null && f.restrictions.skip || !e.schedule)
        return; e.log(`seek to ${d} "${h}"`); const x = e.effectivePlayingItem, y = e.schedule.findItemIndexAtTime(d, h), v = (m = e.schedule.items) == null ? void 0 : m[y], E = e.getBufferingPlayer(), T = E == null ? void 0 : E.interstitial, L = T == null ? void 0 : T.appendInPlace, w = x && e.itemsMatch(x, v); if (x && (L || w)) {
        const I = s(e.playingAsset), R = (I == null ? void 0 : I.media) || e.primaryMedia;
        if (R) {
            const _ = h === "primary" ? R.currentTime : n(x, h, e.playingAsset, "timelinePos", "currentTime"), A = d - _, D = (L ? _ : R.currentTime) + A;
            if (D >= 0 && (!I || L || D <= I.duration)) {
                R.currentTime = D;
                return;
            }
        }
    } if (v) {
        let I = d;
        if (h !== "primary") {
            const _ = v[h].start, A = d - _;
            I = v.start + A;
        }
        const R = !e.isInterstitial(v);
        if ((!e.isInterstitial(x) || x.event.appendInPlace) && (R || v.event.appendInPlace)) {
            const _ = e.media || (L ? E == null ? void 0 : E.media : null);
            _ && (_.currentTime = I);
        }
        else if (x) {
            const _ = e.findItemIndex(x);
            if (y > _) {
                const D = e.schedule.findJumpRestrictedIndex(_ + 1, y);
                if (D > _) {
                    e.setSchedulePosition(D);
                    return;
                }
            }
            let A = 0;
            if (R)
                e.timelinePos = I, e.checkBuffer();
            else {
                const D = v.event.assetList, B = d - (v[h] || v).start;
                for (let V = D.length; V--;) {
                    const Y = D[V];
                    if (Y.duration && B >= Y.startOffset && B < Y.startOffset + Y.duration) {
                        A = V;
                        break;
                    }
                }
            }
            e.setSchedulePosition(y, A);
        }
    } }, u = () => { const d = e.effectivePlayingItem; if (e.isInterstitial(d))
        return d; const h = t(); return e.isInterstitial(h) ? h : null; }, c = { get bufferedEnd() { const d = t(), h = e.bufferingItem; if (h && h === d) {
            var f;
            return n(h, "playout", e.bufferingAsset, "bufferedPos", "bufferedEnd") - h.playout.start || ((f = e.bufferingAsset) == null ? void 0 : f.startOffset) || 0;
        } return 0; }, get currentTime() { const d = u(), h = e.effectivePlayingItem; return h && h === d ? n(h, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime") - h.playout.start : 0; }, set currentTime(d) { const h = u(), f = e.effectivePlayingItem; f && f === h && l(d + f.playout.start, "playout"); }, get duration() { const d = u(); return d ? d.playout.end - d.playout.start : 0; }, get assetPlayers() { var d; const h = (d = u()) == null ? void 0 : d.event.assetList; return h ? h.map(f => e.getAssetPlayer(f.identifier)) : []; }, get playingIndex() { var d; const h = (d = u()) == null ? void 0 : d.event; return h && e.effectivePlayingAsset ? h.findAssetIndex(e.effectivePlayingAsset) : -1; }, get scheduleItem() { return u(); } }; return this.manager = { get events() { var d; return ((d = e.schedule) == null || (d = d.events) == null ? void 0 : d.slice(0)) || []; }, get schedule() { var d; return ((d = e.schedule) == null || (d = d.items) == null ? void 0 : d.slice(0)) || []; }, get interstitialPlayer() { return u() ? c : null; }, get playerQueue() { return e.playerQueue.slice(0); }, get bufferingAsset() { return e.bufferingAsset; }, get bufferingItem() { return t(); }, get bufferingIndex() { const d = t(); return e.findItemIndex(d); }, get playingAsset() { return e.effectivePlayingAsset; }, get playingItem() { return e.effectivePlayingItem; }, get playingIndex() { const d = e.effectivePlayingItem; return e.findItemIndex(d); }, primary: { get bufferedEnd() { return a(); }, get currentTime() { const d = e.timelinePos; return d > 0 ? d : 0; }, set currentTime(d) { l(d, "primary"); }, get duration() { return o("primary"); }, get seekableStart() { var d; return ((d = e.primaryDetails) == null ? void 0 : d.fragmentStart) || 0; } }, integrated: { get bufferedEnd() { return n(t(), "integrated", e.bufferingAsset, "bufferedPos", "bufferedEnd"); }, get currentTime() { return n(e.effectivePlayingItem, "integrated", e.effectivePlayingAsset, "timelinePos", "currentTime"); }, set currentTime(d) { l(d, "integrated"); }, get duration() { return o("integrated"); }, get seekableStart() { var d; return r(((d = e.primaryDetails) == null ? void 0 : d.fragmentStart) || 0, "integrated"); } }, skip: () => { const d = e.effectivePlayingItem, h = d == null ? void 0 : d.event; if (h && !h.restrictions.skip) {
            const f = e.findItemIndex(d);
            if (h.appendInPlace) {
                const m = d.playout.start + d.event.duration;
                l(m + .001, "playout");
            }
            else
                e.advanceAfterAssetEnded(h, f, 1 / 0);
        } } }; }
    get effectivePlayingItem() { return this.waitingItem || this.playingItem || this.endedItem; }
    get effectivePlayingAsset() { return this.playingAsset || this.endedAsset; }
    get playingLastItem() { var e; const t = this.playingItem, s = (e = this.schedule) == null ? void 0 : e.items; return !this.playbackStarted || !t || !s ? !1 : this.findItemIndex(t) === s.length - 1; }
    get playbackStarted() { return this.effectivePlayingItem !== null; }
    get currentTime() { var e, t; if (this.mediaSelection === null)
        return; const s = this.waitingItem || this.playingItem; if (this.isInterstitial(s) && !s.event.appendInPlace)
        return; let n = this.media; !n && (e = this.bufferingItem) != null && (e = e.event) != null && e.appendInPlace && (n = this.primaryMedia); const r = (t = n) == null ? void 0 : t.currentTime; if (!(r === void 0 || !G(r)))
        return r; }
    get primaryMedia() { var e; return this.media || ((e = this.detachedData) == null ? void 0 : e.media) || null; }
    isInterstitial(e) { return !!(e != null && e.event); }
    retreiveMediaSource(e, t) { const s = this.getAssetPlayer(e); s && this.transferMediaFromPlayer(s, t); }
    transferMediaFromPlayer(e, t) { const s = e.interstitial.appendInPlace, n = e.media; if (s && n === this.primaryMedia) {
        if (this.bufferingAsset = null, (!t || this.isInterstitial(t) && !t.event.appendInPlace) && t && n) {
            this.detachedData = { media: n };
            return;
        }
        const r = e.transferMedia();
        this.log(`transfer MediaSource from ${e} ${fe(r)}`), this.detachedData = r;
    }
    else
        t && n && (this.shouldPlay || (this.shouldPlay = !n.paused)); }
    transferMediaTo(e, t) { var s, n; if (e.media === t)
        return; let r = null; const a = this.hls, o = e !== a, l = o && e.interstitial.appendInPlace, u = (s = this.detachedData) == null ? void 0 : s.mediaSource; let c; if (a.media)
        l && (r = a.transferMedia(), this.detachedData = r), c = "Primary";
    else if (u) {
        const m = this.getBufferingPlayer();
        m ? (r = m.transferMedia(), c = `${m}`) : c = "detached MediaSource";
    }
    else
        c = "detached media"; if (!r) {
        if (u)
            r = this.detachedData, this.log(`using detachedData: MediaSource ${fe(r)}`);
        else if (!this.detachedData || a.media === t) {
            const m = this.playerQueue;
            m.length > 1 && m.forEach(p => { if (o && p.interstitial.appendInPlace !== l) {
                const x = p.interstitial;
                this.clearInterstitial(p.interstitial, null), x.appendInPlace = !1, x.appendInPlace && this.warn(`Could not change append strategy for queued assets ${x}`);
            } }), this.hls.detachMedia(), this.detachedData = { media: t };
        }
    } const d = r && "mediaSource" in r && ((n = r.mediaSource) == null ? void 0 : n.readyState) !== "closed", h = d && r ? r : t; this.log(`${d ? "transfering MediaSource" : "attaching media"} to ${o ? e : "Primary"} from ${c} (media.currentTime: ${t.currentTime})`); const f = this.schedule; if (h === r && f) {
        const m = o && e.assetId === f.assetIdAtEnd;
        h.overrides = { duration: f.duration, endOfStream: !o || m, cueRemoval: !o };
    } e.attachMedia(h); }
    onInterstitialCueEnter() { this.onTimeupdate(); }
    checkStart() { const e = this.schedule, t = e == null ? void 0 : e.events; if (!t || this.playbackDisabled || !this.media)
        return; this.bufferedPos === -1 && (this.bufferedPos = 0); const s = this.timelinePos, n = this.effectivePlayingItem; if (s === -1) {
        const r = this.hls.startPosition;
        if (this.log(qr("checkStart", r)), this.timelinePos = r, t.length && t[0].cue.pre) {
            const a = e.findEventIndex(t[0].identifier);
            this.setSchedulePosition(a);
        }
        else if (r >= 0 || !this.primaryLive) {
            const a = this.timelinePos = r > 0 ? r : 0, o = e.findItemIndexAtTime(a);
            this.setSchedulePosition(o);
        }
    }
    else if (n && !this.playingItem) {
        const r = e.findItemIndex(n);
        this.setSchedulePosition(r);
    } }
    advanceAssetBuffering(e, t) { const s = e.event, n = s.findAssetIndex(t), r = xl(s, n); if (!s.isAssetPastPlayoutLimit(r))
        this.bufferedToEvent(e, r);
    else if (this.schedule) {
        var a;
        const o = (a = this.schedule.items) == null ? void 0 : a[this.findItemIndex(e) + 1];
        o && this.bufferedToItem(o);
    } }
    advanceAfterAssetEnded(e, t, s) { const n = xl(e, s); if (e.isAssetPastPlayoutLimit(n)) {
        if (this.schedule) {
            const r = this.schedule.items;
            if (r) {
                const a = t + 1, o = r.length;
                if (a >= o) {
                    this.setSchedulePosition(-1);
                    return;
                }
                const l = e.resumeTime;
                this.timelinePos < l && (this.log(qr("advanceAfterAssetEnded", l)), this.timelinePos = l, e.appendInPlace && this.advanceInPlace(l), this.checkBuffer(this.bufferedPos < l)), this.setSchedulePosition(a);
            }
        }
    }
    else {
        if (e.appendInPlace) {
            const r = e.assetList[n];
            r && this.advanceInPlace(r.timelineStart);
        }
        this.setSchedulePosition(t, n);
    } }
    setScheduleToAssetAtTime(e, t) { const s = this.schedule; if (!s)
        return; const n = t.parentIdentifier, r = s.getEvent(n); if (r) {
        const a = s.findEventIndex(n), o = s.findAssetIndex(r, e);
        this.advanceAfterAssetEnded(r, a, o - 1);
    } }
    setSchedulePosition(e, t) { var s; const n = (s = this.schedule) == null ? void 0 : s.items; if (!n || this.playbackDisabled)
        return; const r = e >= 0 ? n[e] : null; this.log(`setSchedulePosition ${e}, ${t} (${r && Ct(r)}) pos: ${this.timelinePos}`); const a = this.waitingItem || this.playingItem, o = this.playingLastItem; if (this.isInterstitial(a)) {
        const c = a.event, d = this.playingAsset, h = d == null ? void 0 : d.identifier, f = h ? this.getAssetPlayer(h) : null;
        if (f && h && (!this.eventItemsMatch(a, r) || t !== void 0 && h !== c.assetList[t].identifier)) {
            var l;
            const m = c.findAssetIndex(d);
            if (this.log(`INTERSTITIAL_ASSET_ENDED ${m + 1}/${c.assetList.length} ${As(d)}`), this.endedAsset = d, this.playingAsset = null, this.hls.trigger(S.INTERSTITIAL_ASSET_ENDED, { asset: d, assetListIndex: m, event: c, schedule: n.slice(0), scheduleIndex: e, player: f }), a !== this.playingItem) {
                this.itemsMatch(a, this.playingItem) && !this.playingAsset && this.advanceAfterAssetEnded(c, this.findItemIndex(this.playingItem), m);
                return;
            }
            this.retreiveMediaSource(h, r), f.media && !((l = this.detachedData) != null && l.mediaSource) && f.detachMedia();
        }
        if (!this.eventItemsMatch(a, r) && (this.endedItem = a, this.playingItem = null, this.log(`INTERSTITIAL_ENDED ${c} ${Ct(a)}`), c.hasPlayed = !0, this.hls.trigger(S.INTERSTITIAL_ENDED, { event: c, schedule: n.slice(0), scheduleIndex: e }), c.cue.once)) {
            var u;
            this.updateSchedule();
            const m = (u = this.schedule) == null ? void 0 : u.items;
            if (r && m) {
                const p = this.findItemIndex(r);
                this.advanceSchedule(p, m, t, a, o);
            }
            return;
        }
    } this.advanceSchedule(e, n, t, a, o); }
    advanceSchedule(e, t, s, n, r) { const a = this.schedule; if (!a)
        return; const o = t[e] || null, l = this.primaryMedia, u = this.playerQueue; if (u.length && u.forEach(c => { const d = c.interstitial, h = a.findEventIndex(d.identifier); (h < e || h > e + 1) && this.clearInterstitial(d, o); }), this.isInterstitial(o)) {
        this.timelinePos = Math.min(Math.max(this.timelinePos, o.start), o.end);
        const c = o.event;
        if (s === void 0) {
            s = a.findAssetIndex(c, this.timelinePos);
            const m = xl(c, s - 1);
            if (c.isAssetPastPlayoutLimit(m) || c.appendInPlace && this.timelinePos === o.end) {
                this.advanceAfterAssetEnded(c, e, s);
                return;
            }
            s = m;
        }
        const d = this.waitingItem;
        this.assetsBuffered(o, l) || this.setBufferingItem(o);
        let h = this.preloadAssets(c, s);
        if (this.eventItemsMatch(o, d || n) || (this.waitingItem = o, this.log(`INTERSTITIAL_STARTED ${Ct(o)} ${c.appendInPlace ? "append in place" : ""}`), this.hls.trigger(S.INTERSTITIAL_STARTED, { event: c, schedule: t.slice(0), scheduleIndex: e })), !c.assetListLoaded) {
            this.log(`Waiting for ASSET-LIST to complete loading ${c}`);
            return;
        }
        if (c.assetListLoader && (c.assetListLoader.destroy(), c.assetListLoader = void 0), !l) {
            this.log(`Waiting for attachMedia to start Interstitial ${c}`);
            return;
        }
        this.waitingItem = this.endedItem = null, this.playingItem = o;
        const f = c.assetList[s];
        if (!f) {
            this.advanceAfterAssetEnded(c, e, s || 0);
            return;
        }
        if (h || (h = this.getAssetPlayer(f.identifier)), h === null || h.destroyed) {
            const m = c.assetList.length;
            this.warn(`asset ${s + 1}/${m} player destroyed ${c}`), h = this.createAssetPlayer(c, f, s), h.loadSource();
        }
        if (!this.eventItemsMatch(o, this.bufferingItem) && c.appendInPlace && this.isAssetBuffered(f))
            return;
        this.startAssetPlayer(h, s, t, e, l), this.shouldPlay && Ff(h.media);
    }
    else
        o ? (this.resumePrimary(o, e, n), this.shouldPlay && Ff(this.hls.media)) : r && this.isInterstitial(n) && (this.endedItem = null, this.playingItem = n, n.event.appendInPlace || this.attachPrimary(a.durations.primary, null)); }
    get playbackDisabled() { return this.hls.config.enableInterstitialPlayback === !1; }
    get primaryDetails() { var e; return (e = this.mediaSelection) == null ? void 0 : e.main.details; }
    get primaryLive() { var e; return !!((e = this.primaryDetails) != null && e.live); }
    resumePrimary(e, t, s) { var n, r; if (this.playingItem = e, this.playingAsset = this.endedAsset = null, this.waitingItem = this.endedItem = null, this.bufferedToItem(e), this.log(`resuming ${Ct(e)}`), !((n = this.detachedData) != null && n.mediaSource)) {
        let o = this.timelinePos;
        (o < e.start || o >= e.end) && (o = this.getPrimaryResumption(e, t), this.log(qr("resumePrimary", o)), this.timelinePos = o), this.attachPrimary(o, e);
    } if (!s)
        return; const a = (r = this.schedule) == null ? void 0 : r.items; a && (this.log(`INTERSTITIALS_PRIMARY_RESUMED ${Ct(e)}`), this.hls.trigger(S.INTERSTITIALS_PRIMARY_RESUMED, { schedule: a.slice(0), scheduleIndex: t }), this.checkBuffer()); }
    getPrimaryResumption(e, t) { const s = e.start; if (this.primaryLive) {
        const n = this.primaryDetails;
        if (t === 0)
            return this.hls.startPosition;
        if (n && (s < n.fragmentStart || s > n.edge))
            return this.hls.liveSyncPosition || -1;
    } return s; }
    isAssetBuffered(e) { const t = this.getAssetPlayer(e.identifier); return t != null && t.hls ? t.hls.bufferedToEnd : Z.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >= e.timelineStart + (e.duration || 0); }
    attachPrimary(e, t, s) { t ? this.setBufferingItem(t) : this.bufferingItem = this.playingItem, this.bufferingAsset = null; const n = this.primaryMedia; if (!n)
        return; const r = this.hls; r.media ? this.checkBuffer() : (this.transferMediaTo(r, n), s && this.startLoadingPrimaryAt(e, s)), s || (this.log(qr("attachPrimary", e)), this.timelinePos = e, this.startLoadingPrimaryAt(e, s)); }
    startLoadingPrimaryAt(e, t) { var s; const n = this.hls; !n.loadingEnabled || !n.media || Math.abs((((s = n.mainForwardBufferInfo) == null ? void 0 : s.start) || n.media.currentTime) - e) > .5 ? n.startLoad(e, t) : n.bufferingEnabled || n.resumeBuffering(); }
    onManifestLoading() { var e; this.stopLoad(), (e = this.schedule) == null || e.reset(), this.emptyPlayerQueue(), this.clearScheduleState(), this.shouldPlay = !1, this.bufferedPos = this.timelinePos = -1, this.mediaSelection = this.altSelection = this.manager = this.requiredTracks = null, this.hls.off(S.BUFFER_CODECS, this.onBufferCodecs, this), this.hls.on(S.BUFFER_CODECS, this.onBufferCodecs, this); }
    onLevelUpdated(e, t) { if (t.level === -1 || !this.schedule)
        return; const s = this.hls.levels[t.level]; if (!s.details)
        return; const n = oe(oe({}, this.mediaSelection || this.altSelection), {}, { main: s }); this.mediaSelection = n, this.schedule.parseInterstitialDateRanges(n, this.hls.config.interstitialAppendInPlace), !this.effectivePlayingItem && this.schedule.items && this.checkStart(); }
    onAudioTrackUpdated(e, t) { const s = this.hls.audioTracks[t.id], n = this.mediaSelection; if (!n) {
        this.altSelection = oe(oe({}, this.altSelection), {}, { audio: s });
        return;
    } const r = oe(oe({}, n), {}, { audio: s }); this.mediaSelection = r; }
    onSubtitleTrackUpdated(e, t) { const s = this.hls.subtitleTracks[t.id], n = this.mediaSelection; if (!n) {
        this.altSelection = oe(oe({}, this.altSelection), {}, { subtitles: s });
        return;
    } const r = oe(oe({}, n), {}, { subtitles: s }); this.mediaSelection = r; }
    onAudioTrackSwitching(e, t) { const s = Hh(t); this.playerQueue.forEach(({ hls: n }) => n && (n.setAudioOption(t) || n.setAudioOption(s))); }
    onSubtitleTrackSwitch(e, t) { const s = Hh(t); this.playerQueue.forEach(({ hls: n }) => n && (n.setSubtitleOption(t) || t.id !== -1 && n.setSubtitleOption(s))); }
    onBufferCodecs(e, t) { const s = t.tracks; s && (this.requiredTracks = s); }
    onBufferAppended(e, t) { this.checkBuffer(); }
    onBufferFlushed(e, t) { const s = this.playingItem; if (s && !this.itemsMatch(s, this.bufferingItem) && !this.isInterstitial(s)) {
        const n = this.timelinePos;
        this.bufferedPos = n, this.checkBuffer();
    } }
    onBufferedToEnd(e) { if (!this.schedule)
        return; const t = this.schedule.events; if (this.bufferedPos < Number.MAX_VALUE && t) {
        for (let n = 0; n < t.length; n++) {
            const r = t[n];
            if (r.cue.post) {
                var s;
                const a = this.schedule.findEventIndex(r.identifier), o = (s = this.schedule.items) == null ? void 0 : s[a];
                this.isInterstitial(o) && this.eventItemsMatch(o, this.bufferingItem) && this.bufferedToItem(o, 0);
                break;
            }
        }
        this.bufferedPos = Number.MAX_VALUE;
    } }
    onMediaEnded(e) { const t = this.playingItem; if (!this.playingLastItem && t) {
        const s = this.findItemIndex(t);
        this.setSchedulePosition(s + 1);
    }
    else
        this.shouldPlay = !1; }
    updateItem(e, t) { var s; const n = (s = this.schedule) == null ? void 0 : s.items; if (e && n) {
        const r = this.findItemIndex(e, t);
        return n[r] || null;
    } return null; }
    trimInPlace(e, t) { if (this.isInterstitial(e) && e.event.appendInPlace && t.end - e.end > .25) {
        e.event.assetList.forEach((r, a) => { e.event.isAssetPastPlayoutLimit(a) && this.clearAssetPlayer(r.identifier, null); });
        const s = e.end + .25, n = Z.bufferInfo(this.primaryMedia, s, 0);
        (n.end > s || (n.nextStart || 0) > s) && (this.log(`trim buffered interstitial ${Ct(e)} (was ${Ct(t)})`), this.attachPrimary(s, null, !0), this.flushFrontBuffer(s));
    } }
    itemsMatch(e, t) { return !!t && (e === t || e.event && t.event && this.eventItemsMatch(e, t) || !e.event && !t.event && this.findItemIndex(e) === this.findItemIndex(t)); }
    eventItemsMatch(e, t) { var s; return !!t && (e === t || e.event.identifier === ((s = t.event) == null ? void 0 : s.identifier)); }
    findItemIndex(e, t) { return e && this.schedule ? this.schedule.findItemIndex(e, t) : -1; }
    updateSchedule(e = !1) { var t; const s = this.mediaSelection; s && ((t = this.schedule) == null || t.updateSchedule(s, [], e)); }
    checkBuffer(e) { var t; const s = (t = this.schedule) == null ? void 0 : t.items; if (!s)
        return; const n = Z.bufferInfo(this.primaryMedia, this.timelinePos, 0); e && (this.bufferedPos = this.timelinePos), e || (e = n.len < 1), this.updateBufferedPos(n.end, s, e); }
    updateBufferedPos(e, t, s) { const n = this.schedule, r = this.bufferingItem; if (this.bufferedPos > e || !n)
        return; if (t.length === 1 && this.itemsMatch(t[0], r)) {
        this.bufferedPos = e;
        return;
    } const a = this.playingItem, o = this.findItemIndex(a); let l = n.findItemIndexAtTime(e); if (this.bufferedPos < e) {
        var u;
        const c = this.findItemIndex(r), d = Math.min(c + 1, t.length - 1), h = t[d];
        if ((l === -1 && r && e >= r.end || (u = h.event) != null && u.appendInPlace && e + .01 >= h.start) && (l = d), this.isInterstitial(r)) {
            const f = r.event;
            if (d - o > 1 && f.appendInPlace === !1 || f.assetList.length === 0 && f.assetListLoader)
                return;
        }
        if (this.bufferedPos = e, l > c && l > o)
            this.bufferedToItem(h);
        else {
            const f = this.primaryDetails;
            this.primaryLive && f && e > f.edge - f.targetduration && h.start < f.edge + this.hls.config.interstitialLiveLookAhead && this.isInterstitial(h) && this.preloadAssets(h.event, 0);
        }
    }
    else
        s && a && !this.itemsMatch(a, r) && (l === o ? this.bufferedToItem(a) : l === o + 1 && this.bufferedToItem(t[l])); }
    assetsBuffered(e, t) { return e.event.assetList.length === 0 ? !1 : !e.event.assetList.some(n => { const r = this.getAssetPlayer(n.identifier); return !(r != null && r.bufferedInPlaceToEnd(t)); }); }
    setBufferingItem(e) { const t = this.bufferingItem, s = this.schedule; if (!this.itemsMatch(e, t) && s) {
        const { items: n, events: r } = s;
        if (!n || !r)
            return t;
        const a = this.isInterstitial(e), o = this.getBufferingPlayer();
        this.bufferingItem = e, this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos));
        const l = o ? o.remaining : t ? t.end - this.timelinePos : 0;
        if (this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${Ct(e)}` + (t ? ` (${l.toFixed(2)} remaining)` : "")), !this.playbackDisabled)
            if (a) {
                const u = s.findAssetIndex(e.event, this.bufferedPos);
                e.event.assetList.forEach((c, d) => { const h = this.getAssetPlayer(c.identifier); h && (d === u && h.loadSource(), h.resumeBuffering()); });
            }
            else
                this.hls.resumeBuffering(), this.playerQueue.forEach(u => u.pauseBuffering());
        this.hls.trigger(S.INTERSTITIALS_BUFFERED_TO_BOUNDARY, { events: r.slice(0), schedule: n.slice(0), bufferingIndex: this.findItemIndex(e), playingIndex: this.findItemIndex(this.playingItem) });
    }
    else
        this.bufferingItem !== e && (this.bufferingItem = e); return t; }
    bufferedToItem(e, t = 0) { const s = this.setBufferingItem(e); if (!this.playbackDisabled) {
        if (this.isInterstitial(e))
            this.bufferedToEvent(e, t);
        else if (s !== null) {
            this.bufferingAsset = null;
            const n = this.detachedData;
            n ? n.mediaSource ? this.attachPrimary(e.start, e, !0) : this.preloadPrimary(e) : this.preloadPrimary(e);
        }
    } }
    preloadPrimary(e) { const t = this.findItemIndex(e), s = this.getPrimaryResumption(e, t); this.startLoadingPrimaryAt(s); }
    bufferedToEvent(e, t) { const s = e.event, n = s.assetList.length === 0 && !s.assetListLoader, r = s.cue.once; if (n || !r) {
        const a = this.preloadAssets(s, t);
        if (a != null && a.interstitial.appendInPlace) {
            const o = this.primaryMedia;
            o && this.bufferAssetPlayer(a, o);
        }
    } }
    preloadAssets(e, t) { const s = e.assetUrl, n = e.assetList.length, r = n === 0 && !e.assetListLoader, a = e.cue.once; if (r) {
        const l = e.timelineStart;
        if (e.appendInPlace) {
            var o;
            const h = this.playingItem;
            !this.isInterstitial(h) && (h == null || (o = h.nextEvent) == null ? void 0 : o.identifier) === e.identifier && this.flushFrontBuffer(l + .25);
        }
        let u, c = 0;
        if (!this.playingItem && this.primaryLive && (c = this.hls.startPosition, c === -1 && (c = this.hls.liveSyncPosition || 0)), c && !(e.cue.pre || e.cue.post)) {
            const h = c - l;
            h > 0 && (u = Math.round(h * 1e3) / 1e3);
        }
        if (this.log(`Load interstitial asset ${t + 1}/${s ? 1 : n} ${e}${u ? ` live-start: ${c} start-offset: ${u}` : ""}`), s)
            return this.createAsset(e, 0, 0, l, e.duration, s);
        const d = this.assetListLoader.loadAssetList(e, u);
        d && (e.assetListLoader = d);
    }
    else if (!a && n) {
        for (let u = t; u < n; u++) {
            const c = e.assetList[u], d = this.getAssetPlayerQueueIndex(c.identifier);
            (d === -1 || this.playerQueue[d].destroyed) && !c.error && this.createAssetPlayer(e, c, u);
        }
        const l = e.assetList[t];
        if (l) {
            const u = this.getAssetPlayer(l.identifier);
            return u && u.loadSource(), u;
        }
    } return null; }
    flushFrontBuffer(e) { const t = this.requiredTracks; if (!t)
        return; this.log(`Removing front buffer starting at ${e}`), Object.keys(t).forEach(n => { this.hls.trigger(S.BUFFER_FLUSHING, { startOffset: e, endOffset: 1 / 0, type: n }); }); }
    getAssetPlayerQueueIndex(e) { const t = this.playerQueue; for (let s = 0; s < t.length; s++)
        if (e === t[s].assetId)
            return s; return -1; }
    getAssetPlayer(e) { const t = this.getAssetPlayerQueueIndex(e); return this.playerQueue[t] || null; }
    getBufferingPlayer() { const { playerQueue: e, primaryMedia: t } = this; if (t) {
        for (let s = 0; s < e.length; s++)
            if (e[s].media === t)
                return e[s];
    } return null; }
    createAsset(e, t, s, n, r, a) { const o = { parentIdentifier: e.identifier, identifier: xI(e, a, t), duration: r, startOffset: s, timelineStart: n, uri: a }; return this.createAssetPlayer(e, o, t); }
    createAssetPlayer(e, t, s) { const n = this.hls, r = n.userConfig; let a = r.videoPreference; const o = n.loadLevelObj || n.levels[n.currentLevel]; (a || o) && (a = ce({}, a), o.videoCodec && (a.videoCodec = o.videoCodec), o.videoRange && (a.allowedVideoRanges = [o.videoRange])); const l = n.audioTracks[n.audioTrack], u = n.subtitleTracks[n.subtitleTrack]; let c = 0; if (this.primaryLive || e.appendInPlace) {
        const T = this.timelinePos - t.timelineStart;
        if (T > 1) {
            const L = t.duration;
            L && T < L && (c = T);
        }
    } const d = t.identifier, h = oe(oe({}, r), {}, { maxMaxBufferLength: Math.min(180, n.config.maxMaxBufferLength), autoStartLoad: !0, startFragPrefetch: !0, primarySessionId: n.sessionId, assetPlayerId: d, abrEwmaDefaultEstimate: n.bandwidthEstimate, interstitialsController: void 0, startPosition: c, liveDurationInfinity: !1, testBandwidth: !1, videoPreference: a, audioPreference: l || r.audioPreference, subtitlePreference: u || r.subtitlePreference }); e.appendInPlace && (e.appendInPlaceStarted = !0, t.timelineStart && (h.timelineOffset = t.timelineStart)); const f = h.cmcd; f != null && f.sessionId && f.contentId && (h.cmcd = ce({}, f, { contentId: Un(t.uri) })), this.getAssetPlayer(d) && this.warn(`Duplicate date range identifier ${e} and asset ${d}`); const m = new TI(this.HlsPlayerClass, h, e, t); this.playerQueue.push(m), e.assetList[s] = t; let p = !0; const x = T => { if (T.live) {
        var L;
        const R = new Error(`Interstitials MUST be VOD assets ${e}`), _ = { fatal: !0, type: q.OTHER_ERROR, details: k.INTERSTITIAL_ASSET_ITEM_ERROR, error: R }, A = ((L = this.schedule) == null ? void 0 : L.findEventIndex(e.identifier)) || -1;
        this.handleAssetItemError(_, e, A, s, R.message);
        return;
    } const w = T.edge - T.fragmentStart, I = t.duration; (p || I === null || w > I) && (p = !1, this.log(`Interstitial asset "${d}" duration change ${I} > ${w}`), t.duration = w, this.updateSchedule()); }; m.on(S.LEVEL_UPDATED, (T, { details: L }) => x(L)), m.on(S.LEVEL_PTS_UPDATED, (T, { details: L }) => x(L)), m.on(S.EVENT_CUE_ENTER, () => this.onInterstitialCueEnter()); const y = (T, L) => { const w = this.getAssetPlayer(d); if (w && L.tracks) {
        w.off(S.BUFFER_CODECS, y), w.tracks = L.tracks;
        const I = this.primaryMedia;
        this.bufferingAsset === w.assetItem && I && !w.media && this.bufferAssetPlayer(w, I);
    } }; m.on(S.BUFFER_CODECS, y); const v = () => { var T; const L = this.getAssetPlayer(d); if (this.log(`buffered to end of asset ${L}`), !L || !this.schedule)
        return; const w = this.schedule.findEventIndex(e.identifier), I = (T = this.schedule.items) == null ? void 0 : T[w]; this.isInterstitial(I) && this.advanceAssetBuffering(I, t); }; m.on(S.BUFFERED_TO_END, v); const E = T => () => { if (!this.getAssetPlayer(d) || !this.schedule)
        return; this.shouldPlay = !0; const w = this.schedule.findEventIndex(e.identifier); this.advanceAfterAssetEnded(e, w, T); }; return m.once(S.MEDIA_ENDED, E(s)), m.once(S.PLAYOUT_LIMIT_REACHED, E(1 / 0)), m.on(S.ERROR, (T, L) => { if (!this.schedule)
        return; const w = this.getAssetPlayer(d); if (L.details === k.BUFFER_STALLED_ERROR) {
        if (w != null && w.appendInPlace) {
            this.handleInPlaceStall(e);
            return;
        }
        this.onTimeupdate(), this.checkBuffer(!0);
        return;
    } this.handleAssetItemError(L, e, this.schedule.findEventIndex(e.identifier), s, `Asset player error ${L.error} ${e}`); }), m.on(S.DESTROYING, () => { if (!this.getAssetPlayer(d) || !this.schedule)
        return; const L = new Error(`Asset player destroyed unexpectedly ${d}`), w = { fatal: !0, type: q.OTHER_ERROR, details: k.INTERSTITIAL_ASSET_ITEM_ERROR, error: L }; this.handleAssetItemError(w, e, this.schedule.findEventIndex(e.identifier), s, L.message); }), this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${As(t)}`), this.hls.trigger(S.INTERSTITIAL_ASSET_PLAYER_CREATED, { asset: t, assetListIndex: s, event: e, player: m }), m; }
    clearInterstitial(e, t) { this.clearAssetPlayers(e, t), e.reset(); }
    clearAssetPlayers(e, t) { e.assetList.forEach(s => { this.clearAssetPlayer(s.identifier, t); }); }
    resetAssetPlayer(e) { const t = this.getAssetPlayerQueueIndex(e); if (t !== -1) {
        this.log(`reset asset player "${e}" after error`);
        const s = this.playerQueue[t];
        this.transferMediaFromPlayer(s, null), s.resetDetails();
    } }
    clearAssetPlayer(e, t) { const s = this.getAssetPlayerQueueIndex(e); if (s !== -1) {
        const n = this.playerQueue[s];
        this.log(`clear ${n} toSegment: ${t && Ct(t)}`), this.transferMediaFromPlayer(n, t), this.playerQueue.splice(s, 1), n.destroy();
    } }
    emptyPlayerQueue() { let e; for (; e = this.playerQueue.pop();)
        e.destroy(); this.playerQueue = []; }
    startAssetPlayer(e, t, s, n, r) { const { interstitial: a, assetItem: o, assetId: l } = e, u = a.assetList.length, c = this.playingAsset; this.endedAsset = null, this.playingAsset = o, (!c || c.identifier !== l) && (c && (this.clearAssetPlayer(c.identifier, s[n]), delete c.error), this.log(`INTERSTITIAL_ASSET_STARTED ${t + 1}/${u} ${As(o)}`), this.hls.trigger(S.INTERSTITIAL_ASSET_STARTED, { asset: o, assetListIndex: t, event: a, schedule: s.slice(0), scheduleIndex: n, player: e })), this.bufferAssetPlayer(e, r); }
    bufferAssetPlayer(e, t) { var s, n; if (!this.schedule)
        return; const { interstitial: r, assetItem: a } = e, o = this.schedule.findEventIndex(r.identifier), l = (s = this.schedule.items) == null ? void 0 : s[o]; if (!l)
        return; e.loadSource(), this.setBufferingItem(l), this.bufferingAsset = a; const u = this.getBufferingPlayer(); if (u === e)
        return; const c = r.appendInPlace; if (c && (u == null ? void 0 : u.interstitial.appendInPlace) === !1)
        return; const d = (u == null ? void 0 : u.tracks) || ((n = this.detachedData) == null ? void 0 : n.tracks) || this.requiredTracks; if (c && a !== this.playingAsset) {
        if (!e.tracks) {
            this.log(`Waiting for track info before buffering ${e}`);
            return;
        }
        if (d && !kg(d, e.tracks)) {
            const h = new Error(`Asset ${As(a)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(d)}')`), f = { fatal: !0, type: q.OTHER_ERROR, details: k.INTERSTITIAL_ASSET_ITEM_ERROR, error: h }, m = r.findAssetIndex(a);
            this.handleAssetItemError(f, r, o, m, h.message);
            return;
        }
    } this.transferMediaTo(e, t); }
    handleInPlaceStall(e) { const t = this.schedule, s = this.primaryMedia; if (!t || !s)
        return; const n = s.currentTime, r = t.findAssetIndex(e, n), a = e.assetList[r]; if (a) {
        const o = this.getAssetPlayer(a.identifier);
        if (o) {
            const l = o.currentTime || n - a.timelineStart, u = o.duration - l;
            if (this.warn(`Stalled at ${l} of ${l + u} in ${o} ${e} (media.currentTime: ${n})`), l && (u / s.playbackRate < .5 || o.bufferedInPlaceToEnd(s)) && o.hls) {
                const c = t.findEventIndex(e.identifier);
                this.advanceAfterAssetEnded(e, c, r);
            }
        }
    } }
    advanceInPlace(e) { const t = this.primaryMedia; t && t.currentTime < e && (t.currentTime = e); }
    handleAssetItemError(e, t, s, n, r) { if (e.details === k.BUFFER_STALLED_ERROR)
        return; const a = t.assetList[n] || null; if (this.warn(`INTERSTITIAL_ASSET_ERROR ${a && As(a)} ${e.error}`), !this.schedule)
        return; const o = (a == null ? void 0 : a.identifier) || "", l = this.getAssetPlayerQueueIndex(o), u = this.playerQueue[l] || null, c = this.schedule.items, d = ce({}, e, { fatal: !1, errorAction: Hs(!0), asset: a, assetListIndex: n, event: t, schedule: c, scheduleIndex: s, player: u }); if (this.hls.trigger(S.INTERSTITIAL_ASSET_ERROR, d), !e.fatal)
        return; const h = this.playingAsset, f = this.bufferingAsset, m = new Error(r); if (a && (this.clearAssetPlayer(o, null), a.error = m), !t.assetList.some(p => !p.error))
        t.error = m;
    else
        for (let p = n; p < t.assetList.length; p++)
            this.resetAssetPlayer(t.assetList[p].identifier); this.updateSchedule(!0), t.error ? this.primaryFallback(t) : h && h.identifier === o ? this.advanceAfterAssetEnded(t, s, n) : f && f.identifier === o && this.isInterstitial(this.bufferingItem) && this.advanceAssetBuffering(this.bufferingItem, f); }
    primaryFallback(e) { const t = e.timelineStart, s = this.effectivePlayingItem; let n = this.timelinePos; if (s) {
        this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${n} playing: ${Ct(s)} error: ${e.error}`), n === -1 && (n = this.hls.startPosition);
        const a = this.updateItem(s, n);
        this.itemsMatch(s, a) && this.clearInterstitial(e, null), e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t));
    }
    else if (n === -1) {
        this.checkStart();
        return;
    } if (!this.schedule)
        return; const r = this.schedule.findItemIndexAtTime(n); this.setSchedulePosition(r); }
    onAssetListLoaded(e, t) { var s, n; const r = t.event, a = r.identifier, o = t.assetListResponse.ASSETS; if (!((s = this.schedule) != null && s.hasEvent(a)))
        return; const l = r.timelineStart, u = r.duration; let c = 0; o.forEach((p, x) => { const y = parseFloat(p.DURATION); this.createAsset(r, x, c, l + c, y, p.URI), c += y; }), r.duration = c, this.log(`Loaded asset-list with duration: ${c} (was: ${u}) ${r}`); const d = this.waitingItem, h = (d == null ? void 0 : d.event.identifier) === a; this.updateSchedule(); const f = (n = this.bufferingItem) == null ? void 0 : n.event; if (h) {
        var m;
        const p = this.schedule.findEventIndex(a), x = (m = this.schedule.items) == null ? void 0 : m[p];
        if (x) {
            if (!this.playingItem && this.timelinePos > x.end && this.schedule.findItemIndexAtTime(this.timelinePos) !== p) {
                r.error = new Error(`Interstitial ${o.length ? "no longer within playback range" : "asset-list is empty"} ${this.timelinePos} ${r}`), this.log(r.error.message), this.updateSchedule(!0), this.primaryFallback(r);
                return;
            }
            this.setBufferingItem(x);
        }
        this.setSchedulePosition(p);
    }
    else if ((f == null ? void 0 : f.identifier) === a) {
        const p = r.assetList[0];
        if (p) {
            const x = this.getAssetPlayer(p.identifier);
            if (f.appendInPlace) {
                const y = this.primaryMedia;
                x && y && this.bufferAssetPlayer(x, y);
            }
            else
                x && x.loadSource();
        }
    } }
    onError(e, t) { if (this.schedule)
        switch (t.details) {
            case k.ASSET_LIST_PARSING_ERROR:
            case k.ASSET_LIST_LOAD_ERROR:
            case k.ASSET_LIST_LOAD_TIMEOUT: {
                const s = t.interstitial;
                s && (this.updateSchedule(!0), this.primaryFallback(s));
                break;
            }
            case k.BUFFER_STALLED_ERROR: {
                const s = this.endedItem || this.waitingItem || this.playingItem;
                if (this.isInterstitial(s) && s.event.appendInPlace) {
                    this.handleInPlaceStall(s.event);
                    return;
                }
                this.log(`Primary player stall @${this.timelinePos} bufferedPos: ${this.bufferedPos}`), this.onTimeupdate(), this.checkBuffer(!0);
                break;
            }
        } }
}
const Uf = 500;
class RI extends Jc {
    constructor(e, t, s) { super(e, t, s, "subtitle-stream-controller", z.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this.registerListeners(); }
    onHandlerDestroying() { this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null; }
    registerListeners() { super.registerListeners(); const { hls: e } = this; e.on(S.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this); }
    unregisterListeners() { super.unregisterListeners(); const { hls: e } = this; e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this); }
    startLoad(e, t) { this.stopLoad(), this.state = N.IDLE, this.setInterval(Uf), this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick(); }
    onManifestLoading() { super.onManifestLoading(), this.mainDetails = null; }
    onMediaDetaching(e, t) { this.tracksBuffered = [], super.onMediaDetaching(e, t); }
    onLevelLoaded(e, t) { this.mainDetails = t.details; }
    onSubtitleFragProcessed(e, t) { const { frag: s, success: n } = t; if (this.fragContextChanged(s) || (be(s) && (this.fragPrevious = s), this.state = N.IDLE), !n)
        return; const r = this.tracksBuffered[this.currentTrackId]; if (!r)
        return; let a; const o = s.start; for (let u = 0; u < r.length; u++)
        if (o >= r[u].start && o <= r[u].end) {
            a = r[u];
            break;
        } const l = s.start + s.duration; a ? a.end = l : (a = { start: o, end: l }, r.push(a)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null), this.media && this.tick(); }
    onBufferFlushing(e, t) { const { startOffset: s, endOffset: n } = t; if (s === 0 && n !== Number.POSITIVE_INFINITY) {
        const r = n - 1;
        if (r <= 0)
            return;
        t.endOffsetSubtitles = Math.max(0, r), this.tracksBuffered.forEach(a => { for (let o = 0; o < a.length;) {
            if (a[o].end <= r) {
                a.shift();
                continue;
            }
            else if (a[o].start < r)
                a[o].start = r;
            else
                break;
            o++;
        } }), this.fragmentTracker.removeFragmentsInRange(s, r, z.SUBTITLE);
    } }
    onError(e, t) { const s = t.frag; (s == null ? void 0 : s.type) === z.SUBTITLE && (t.details === k.FRAG_GAP && this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== N.STOPPED && (this.state = N.IDLE)); }
    onSubtitleTracksUpdated(e, { subtitleTracks: t }) { if (this.levels && Pp(this.levels, t)) {
        this.levels = t.map(s => new or(s));
        return;
    } this.tracksBuffered = [], this.levels = t.map(s => { const n = new or(s); return this.tracksBuffered[n.id] = [], n; }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, z.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null; }
    onSubtitleTrackSwitch(e, t) { var s; if (this.currentTrackId = t.id, !((s = this.levels) != null && s.length) || this.currentTrackId === -1) {
        this.clearInterval();
        return;
    } const n = this.levels[this.currentTrackId]; n != null && n.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, n && this.state !== N.STOPPED && this.setInterval(Uf); }
    onSubtitleTrackLoaded(e, t) { var s; const { currentTrackId: n, levels: r } = this, { details: a, id: o } = t; if (!r) {
        this.warn(`Subtitle tracks were reset while loading level ${o}`);
        return;
    } const l = r[o]; if (o >= r.length || !l)
        return; this.log(`Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges; let u = 0; if (a.live || (s = l.details) != null && s.live) {
        if (a.deltaUpdateFailed)
            return;
        const d = this.mainDetails;
        if (!d) {
            this.startFragRequested = !1;
            return;
        }
        const h = d.fragments[0];
        if (!l.details)
            a.hasProgramDateTime && d.hasProgramDateTime ? (so(a, d), u = a.fragmentStart) : h && (u = h.start, Du(a, u));
        else {
            var c;
            u = this.alignPlaylists(a, l.details, (c = this.levelLastLoaded) == null ? void 0 : c.details), u === 0 && h && (u = h.start, Du(a, u));
        }
        d && !this.startFragRequested && this.setStartPosition(d, u);
    } l.details = a, this.levelLastLoaded = l, o === n && (this.hls.trigger(S.SUBTITLE_TRACK_UPDATED, { details: a, id: o, groupId: t.groupId }), this.tick(), a.live && !this.fragCurrent && this.media && this.state === N.IDLE && (ms(null, a.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0))); }
    _handleFragmentLoadComplete(e) { const { frag: t, payload: s } = e, n = t.decryptdata, r = this.hls; if (!this.fragContextChanged(t) && s && s.byteLength > 0 && n != null && n.key && n.iv && zs(n.method)) {
        const a = performance.now();
        this.decrypter.decrypt(new Uint8Array(s), n.key.buffer, n.iv.buffer, Xc(n.method)).catch(o => { throw r.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.FRAG_DECRYPT_ERROR, fatal: !1, error: o, reason: o.message, frag: t }), o; }).then(o => { const l = performance.now(); r.trigger(S.FRAG_DECRYPTED, { frag: t, payload: o, stats: { tstart: a, tdecrypt: l } }); }).catch(o => { this.warn(`${o.name}: ${o.message}`), this.state = N.IDLE; });
    } }
    doTick() { if (!this.media) {
        this.state = N.IDLE;
        return;
    } if (this.state === N.IDLE) {
        const { currentTrackId: e, levels: t } = this, s = t == null ? void 0 : t[e];
        if (!s || !t.length || !s.details || this.waitForLive(s))
            return;
        const { config: n } = this, r = this.getLoadPosition(), a = Z.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, n.maxBufferHole), { end: o, len: l } = a, u = s.details, c = this.hls.maxBufferLength + u.levelTargetDuration;
        if (l > c)
            return;
        const d = u.fragments, h = d.length, f = u.edge;
        let m = null;
        const p = this.fragPrevious;
        if (o < f) {
            const v = n.maxFragLookUpTolerance, E = o > f - v ? 0 : v;
            m = ms(p, d, Math.max(d[0].start, o), E), !m && p && p.start < d[0].start && (m = d[0]);
        }
        else
            m = d[h - 1];
        if (m = this.filterReplacedPrimary(m, s.details), !m)
            return;
        const x = m.sn - u.startSN, y = d[x - 1];
        if (y && y.cc === m.cc && this.fragmentTracker.getState(y) === Pe.NOT_LOADED && (m = y), this.fragmentTracker.getState(m) === Pe.NOT_LOADED) {
            const v = this.mapToInitFragWhenRequired(m);
            v && this.loadFragment(v, s, o);
        }
    } }
    loadFragment(e, t, s) { be(e) ? super.loadFragment(e, t, s) : this._loadInitSegment(e, t); }
    get mediaBufferTimeRanges() { return new wI(this.tracksBuffered[this.currentTrackId] || []); }
}
class wI {
    constructor(e) { this.buffered = void 0; const t = (s, n, r) => { if (n = n >>> 0, n > r - 1)
        throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${n}) is greater than the maximum bound (${r})`); return e[n][s]; }; this.buffered = { get length() { return e.length; }, end(s) { return t("end", s, e.length); }, start(s) { return t("start", s, e.length); } }; }
}
const _I = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, qp = i => String.fromCharCode(_I[i] || i), Dt = 15, ri = 100, bI = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, kI = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, CI = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, DI = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, PI = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class NI {
    constructor() { this.time = null, this.verboseLevel = 0; }
    log(e, t) { if (this.verboseLevel >= e) {
        const s = typeof t == "function" ? t() : t;
        le.log(`${this.time} [${e}] ${s}`);
    } }
}
const Zi = function (e) { const t = []; for (let s = 0; s < e.length; s++)
    t.push(e[s].toString(16)); return t; };
class Qp {
    constructor() { this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1; }
    reset() { this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1; }
    setStyles(e) { const t = ["foreground", "underline", "italics", "background", "flash"]; for (let s = 0; s < t.length; s++) {
        const n = t[s];
        e.hasOwnProperty(n) && (this[n] = e[n]);
    } }
    isDefault() { return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash; }
    equals(e) { return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash; }
    copy(e) { this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash; }
    toString() { return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash; }
}
class OI {
    constructor() { this.uchar = " ", this.penState = new Qp; }
    reset() { this.uchar = " ", this.penState.reset(); }
    setChar(e, t) { this.uchar = e, this.penState.copy(t); }
    setPenState(e) { this.penState.copy(e); }
    equals(e) { return this.uchar === e.uchar && this.penState.equals(e.penState); }
    copy(e) { this.uchar = e.uchar, this.penState.copy(e.penState); }
    isEmpty() { return this.uchar === " " && this.penState.isDefault(); }
}
class MI {
    constructor(e) { this.chars = [], this.pos = 0, this.currPenState = new Qp, this.cueStartTime = null, this.logger = void 0; for (let t = 0; t < ri; t++)
        this.chars.push(new OI); this.logger = e; }
    equals(e) { for (let t = 0; t < ri; t++)
        if (!this.chars[t].equals(e.chars[t]))
            return !1; return !0; }
    copy(e) { for (let t = 0; t < ri; t++)
        this.chars[t].copy(e.chars[t]); }
    isEmpty() { let e = !0; for (let t = 0; t < ri; t++)
        if (!this.chars[t].isEmpty()) {
            e = !1;
            break;
        } return e; }
    setCursor(e) { this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > ri && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = ri); }
    moveCursor(e) { const t = this.pos + e; if (e > 1)
        for (let s = this.pos + 1; s < t + 1; s++)
            this.chars[s].setPenState(this.currPenState); this.setCursor(t); }
    backSpace() { this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState); }
    insertChar(e) { e >= 144 && this.backSpace(); const t = qp(e); if (this.pos >= ri) {
        this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
        return;
    } this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1); }
    clearFromPos(e) { let t; for (t = e; t < ri; t++)
        this.chars[t].reset(); }
    clear() { this.clearFromPos(0), this.pos = 0, this.currPenState.reset(); }
    clearToEndOfRow() { this.clearFromPos(this.pos); }
    getTextString() { const e = []; let t = !0; for (let s = 0; s < ri; s++) {
        const n = this.chars[s].uchar;
        n !== " " && (t = !1), e.push(n);
    } return t ? "" : e.join(""); }
    setPenStyles(e) { this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState); }
}
class El {
    constructor(e) { this.rows = [], this.currRow = Dt - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0; for (let t = 0; t < Dt; t++)
        this.rows.push(new MI(e)); this.logger = e; }
    reset() { for (let e = 0; e < Dt; e++)
        this.rows[e].clear(); this.currRow = Dt - 1; }
    equals(e) { let t = !0; for (let s = 0; s < Dt; s++)
        if (!this.rows[s].equals(e.rows[s])) {
            t = !1;
            break;
        } return t; }
    copy(e) { for (let t = 0; t < Dt; t++)
        this.rows[t].copy(e.rows[t]); }
    isEmpty() { let e = !0; for (let t = 0; t < Dt; t++)
        if (!this.rows[t].isEmpty()) {
            e = !1;
            break;
        } return e; }
    backSpace() { this.rows[this.currRow].backSpace(); }
    clearToEndOfRow() { this.rows[this.currRow].clearToEndOfRow(); }
    insertChar(e) { this.rows[this.currRow].insertChar(e); }
    setPen(e) { this.rows[this.currRow].setPenStyles(e); }
    moveCursor(e) { this.rows[this.currRow].moveCursor(e); }
    setCursor(e) { this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e); }
    setPAC(e) { this.logger.log(2, () => "pacData = " + fe(e)); let t = e.row - 1; if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
        for (let o = 0; o < Dt; o++)
            this.rows[o].clear();
        const r = this.currRow + 1 - this.nrRollUpRows, a = this.lastOutputScreen;
        if (a) {
            const o = a.rows[r].cueStartTime, l = this.logger.time;
            if (o !== null && l !== null && o < l)
                for (let u = 0; u < this.nrRollUpRows; u++)
                    this.rows[t - this.nrRollUpRows + u + 1].copy(a.rows[r + u]);
        }
    } this.currRow = t; const s = this.rows[this.currRow]; if (e.indent !== null) {
        const r = e.indent, a = Math.max(r - 1, 0);
        s.setCursor(e.indent), e.color = s.chars[a].penState.foreground;
    } const n = { foreground: e.color, underline: e.underline, italics: e.italics, background: "black", flash: !1 }; this.setPen(n); }
    setBkgData(e) { this.logger.log(2, () => "bkgData = " + fe(e)), this.backSpace(), this.setPen(e), this.insertChar(32); }
    setRollUpRows(e) { this.nrRollUpRows = e; }
    rollUp() { if (this.nrRollUpRows === null) {
        this.logger.log(3, "roll_up but nrRollUpRows not set yet");
        return;
    } this.logger.log(1, () => this.getDisplayText()); const e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0]; t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up"); }
    getDisplayText(e) {
        e = e || !1;
        const t = [];
        let s = "", n = -1;
        for (let r = 0; r < Dt; r++) {
            const a = this.rows[r].getTextString();
            a && (n = r + 1, e ? t.push("Row " + n + ": '" + a + "'") : t.push(a.trim()));
        }
        return t.length > 0 && (e ? s = "[" + t.join(" | ") + "]" : s = t.join(`
`)), s;
    }
    getTextAndFormat() { return this.rows; }
}
class Bf {
    constructor(e, t, s) { this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new El(s), this.nonDisplayedMemory = new El(s), this.lastOutputScreen = new El(s), this.currRollUpRow = this.displayedMemory.rows[Dt - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s; }
    reset() { this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[Dt - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null; }
    getHandler() { return this.outputFilter; }
    setHandler(e) { this.outputFilter = e; }
    setPAC(e) { this.writeScreen.setPAC(e); }
    setBkgData(e) { this.writeScreen.setBkgData(e); }
    setMode(e) { e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e); }
    insertChars(e) { for (let s = 0; s < e.length; s++)
        this.writeScreen.insertChar(e[s]); const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP"; this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate()); }
    ccRCL() { this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON"); }
    ccBS() { this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate()); }
    ccAOF() { }
    ccAON() { }
    ccDER() { this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate(); }
    ccRU(e) { this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e); }
    ccFON() { this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({ flash: !0 }); }
    ccRDC() { this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON"); }
    ccTR() { this.logger.log(2, "TR"), this.setMode("MODE_TEXT"); }
    ccRTD() { this.logger.log(2, "RTD"), this.setMode("MODE_TEXT"); }
    ccEDM() { this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0); }
    ccCR() { this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0); }
    ccENM() { this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset(); }
    ccEOC() { if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
        const e = this.displayedMemory;
        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    } this.outputDataUpdate(!0); }
    ccTO(e) { this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e); }
    ccMIDROW(e) { const t = { flash: !1 }; if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)
        t.foreground = "white";
    else {
        const s = Math.floor(e / 2) - 16, n = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
        t.foreground = n[s];
    } this.logger.log(2, "MIDROW: " + fe(t)), this.writeScreen.setPen(t); }
    outputDataUpdate(e = !1) { const t = this.logger.time; t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory)); }
    cueSplitAtTime(e) { this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e)); }
}
class $f {
    constructor(e, t, s) { this.channels = void 0, this.currentChannel = 0, this.cmdHistory = UI(), this.logger = void 0; const n = this.logger = new NI; this.channels = [null, new Bf(e, t, n), new Bf(e + 1, s, n)]; }
    getHandler(e) { return this.channels[e].getHandler(); }
    setHandler(e, t) { this.channels[e].setHandler(t); }
    addData(e, t) { this.logger.time = e; for (let s = 0; s < t.length; s += 2) {
        const n = t[s] & 127, r = t[s + 1] & 127;
        let a = !1, o = null;
        if (n === 0 && r === 0)
            continue;
        this.logger.log(3, () => "[" + Zi([t[s], t[s + 1]]) + "] -> (" + Zi([n, r]) + ")");
        const l = this.cmdHistory;
        if (n >= 16 && n <= 31) {
            if (FI(n, r, l)) {
                Qr(null, null, l), this.logger.log(3, () => "Repeated command (" + Zi([n, r]) + ") is dropped");
                continue;
            }
            Qr(n, r, this.cmdHistory), a = this.parseCmd(n, r), a || (a = this.parseMidrow(n, r)), a || (a = this.parsePAC(n, r)), a || (a = this.parseBackgroundAttributes(n, r));
        }
        else
            Qr(null, null, l);
        if (!a && (o = this.parseChars(n, r), o)) {
            const c = this.currentChannel;
            c && c > 0 ? this.channels[c].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
        }
        !a && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + Zi([n, r]) + " orig: " + Zi([t[s], t[s + 1]]));
    } }
    parseCmd(e, t) { const s = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, n = (e === 23 || e === 31) && t >= 33 && t <= 35; if (!(s || n))
        return !1; const r = e === 20 || e === 21 || e === 23 ? 1 : 2, a = this.channels[r]; return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? a.ccRCL() : t === 33 ? a.ccBS() : t === 34 ? a.ccAOF() : t === 35 ? a.ccAON() : t === 36 ? a.ccDER() : t === 37 ? a.ccRU(2) : t === 38 ? a.ccRU(3) : t === 39 ? a.ccRU(4) : t === 40 ? a.ccFON() : t === 41 ? a.ccRDC() : t === 42 ? a.ccTR() : t === 43 ? a.ccRTD() : t === 44 ? a.ccEDM() : t === 45 ? a.ccCR() : t === 46 ? a.ccENM() : t === 47 && a.ccEOC() : a.ccTO(t - 32), this.currentChannel = r, !0; }
    parseMidrow(e, t) { let s = 0; if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
        if (e === 17 ? s = 1 : s = 2, s !== this.currentChannel)
            return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
        const n = this.channels[s];
        return n ? (n.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + Zi([e, t]) + ")"), !0) : !1;
    } return !1; }
    parsePAC(e, t) { let s; const n = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, r = (e === 16 || e === 24) && t >= 64 && t <= 95; if (!(n || r))
        return !1; const a = e <= 23 ? 1 : 2; t >= 64 && t <= 95 ? s = a === 1 ? bI[e] : CI[e] : s = a === 1 ? kI[e] : DI[e]; const o = this.channels[a]; return o ? (o.setPAC(this.interpretPAC(s, t)), this.currentChannel = a, !0) : !1; }
    interpretPAC(e, t) { let s; const n = { color: null, italics: !1, indent: null, underline: !1, row: e }; return t > 95 ? s = t - 96 : s = t - 64, n.underline = (s & 1) === 1, s <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (n.italics = !0, n.color = "white") : n.indent = Math.floor((s - 16) / 2) * 4, n; }
    parseChars(e, t) { let s, n = null, r = null; if (e >= 25 ? (s = 2, r = e - 8) : (s = 1, r = e), r >= 17 && r <= 19) {
        let a;
        r === 17 ? a = t + 80 : r === 18 ? a = t + 112 : a = t + 144, this.logger.log(2, () => "Special char '" + qp(a) + "' in channel " + s), n = [a];
    }
    else
        e >= 32 && e <= 127 && (n = t === 0 ? [e] : [e, t]); return n && this.logger.log(3, () => "Char codes =  " + Zi(n).join(",")), n; }
    parseBackgroundAttributes(e, t) { const s = (e === 16 || e === 24) && t >= 32 && t <= 47, n = (e === 23 || e === 31) && t >= 45 && t <= 47; if (!(s || n))
        return !1; let r; const a = {}; e === 16 || e === 24 ? (r = Math.floor((t - 32) / 2), a.background = PI[r], t % 2 === 1 && (a.background = a.background + "_semi")) : t === 45 ? a.background = "transparent" : (a.foreground = "black", t === 47 && (a.underline = !0)); const o = e <= 23 ? 1 : 2; return this.channels[o].setBkgData(a), !0; }
    reset() { for (let e = 0; e < Object.keys(this.channels).length; e++) {
        const t = this.channels[e];
        t && t.reset();
    } Qr(null, null, this.cmdHistory); }
    cueSplitAtTime(e) { for (let t = 0; t < this.channels.length; t++) {
        const s = this.channels[t];
        s && s.cueSplitAtTime(e);
    } }
}
function Qr(i, e, t) { t.a = i, t.b = e; }
function FI(i, e, t) { return t.a === i && t.b === e; }
function UI() { return { a: null, b: null }; }
var dd = function () { if (io != null && io.VTTCue)
    return self.VTTCue; const i = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"]; function t(o, l) { if (typeof l != "string" || !Array.isArray(o))
    return !1; const u = l.toLowerCase(); return ~o.indexOf(u) ? u : !1; } function s(o) { return t(i, o); } function n(o) { return t(e, o); } function r(o, ...l) { let u = 1; for (; u < arguments.length; u++) {
    const c = arguments[u];
    for (const d in c)
        o[d] = c[d];
} return o; } function a(o, l, u) { const c = this, d = { enumerable: !0 }; c.hasBeenReset = !1; let h = "", f = !1, m = o, p = l, x = u, y = null, v = "", E = !0, T = "auto", L = "start", w = 50, I = "middle", R = 50, _ = "middle"; Object.defineProperty(c, "id", r({}, d, { get: function () { return h; }, set: function (A) { h = "" + A; } })), Object.defineProperty(c, "pauseOnExit", r({}, d, { get: function () { return f; }, set: function (A) { f = !!A; } })), Object.defineProperty(c, "startTime", r({}, d, { get: function () { return m; }, set: function (A) { if (typeof A != "number")
        throw new TypeError("Start time must be set to a number."); m = A, this.hasBeenReset = !0; } })), Object.defineProperty(c, "endTime", r({}, d, { get: function () { return p; }, set: function (A) { if (typeof A != "number")
        throw new TypeError("End time must be set to a number."); p = A, this.hasBeenReset = !0; } })), Object.defineProperty(c, "text", r({}, d, { get: function () { return x; }, set: function (A) { x = "" + A, this.hasBeenReset = !0; } })), Object.defineProperty(c, "region", r({}, d, { get: function () { return y; }, set: function (A) { y = A, this.hasBeenReset = !0; } })), Object.defineProperty(c, "vertical", r({}, d, { get: function () { return v; }, set: function (A) { const D = s(A); if (D === !1)
        throw new SyntaxError("An invalid or illegal string was specified."); v = D, this.hasBeenReset = !0; } })), Object.defineProperty(c, "snapToLines", r({}, d, { get: function () { return E; }, set: function (A) { E = !!A, this.hasBeenReset = !0; } })), Object.defineProperty(c, "line", r({}, d, { get: function () { return T; }, set: function (A) { if (typeof A != "number" && A !== "auto")
        throw new SyntaxError("An invalid number or illegal string was specified."); T = A, this.hasBeenReset = !0; } })), Object.defineProperty(c, "lineAlign", r({}, d, { get: function () { return L; }, set: function (A) { const D = n(A); if (!D)
        throw new SyntaxError("An invalid or illegal string was specified."); L = D, this.hasBeenReset = !0; } })), Object.defineProperty(c, "position", r({}, d, { get: function () { return w; }, set: function (A) { if (A < 0 || A > 100)
        throw new Error("Position must be between 0 and 100."); w = A, this.hasBeenReset = !0; } })), Object.defineProperty(c, "positionAlign", r({}, d, { get: function () { return I; }, set: function (A) { const D = n(A); if (!D)
        throw new SyntaxError("An invalid or illegal string was specified."); I = D, this.hasBeenReset = !0; } })), Object.defineProperty(c, "size", r({}, d, { get: function () { return R; }, set: function (A) { if (A < 0 || A > 100)
        throw new Error("Size must be between 0 and 100."); R = A, this.hasBeenReset = !0; } })), Object.defineProperty(c, "align", r({}, d, { get: function () { return _; }, set: function (A) { const D = n(A); if (!D)
        throw new SyntaxError("An invalid or illegal string was specified."); _ = D, this.hasBeenReset = !0; } })), c.displayState = void 0; } return a.prototype.getCueAsHTML = function () { return self.WebVTT.convertCueToDOMTree(self, this.text); }, a; }();
class BI {
    decode(e, t) { if (!e)
        return ""; if (typeof e != "string")
        throw new Error("Error - expected string data."); return decodeURIComponent(encodeURIComponent(e)); }
}
function Xp(i) { function e(s, n, r, a) { return (s | 0) * 3600 + (n | 0) * 60 + (r | 0) + parseFloat(a || 0); } const t = i.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/); return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null; }
class $I {
    constructor() { this.values = Object.create(null); }
    set(e, t) { !this.get(e) && t !== "" && (this.values[e] = t); }
    get(e, t, s) { return s ? this.has(e) ? this.values[e] : t[s] : this.has(e) ? this.values[e] : t; }
    has(e) { return e in this.values; }
    alt(e, t, s) { for (let n = 0; n < s.length; ++n)
        if (t === s[n]) {
            this.set(e, t);
            break;
        } }
    integer(e, t) { /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10)); }
    percent(e, t) { if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
        const s = parseFloat(t);
        if (s >= 0 && s <= 100)
            return this.set(e, s), !0;
    } return !1; }
}
function Zp(i, e, t, s) { const n = s ? i.split(s) : [i]; for (const r in n) {
    if (typeof n[r] != "string")
        continue;
    const a = n[r].split(t);
    if (a.length !== 2)
        continue;
    const o = a[0], l = a[1];
    e(o, l);
} }
const $u = new dd(0, 0, ""), Xr = $u.align === "middle" ? "middle" : "center";
function jI(i, e, t) { const s = i; function n() { const o = Xp(i); if (o === null)
    throw new Error("Malformed timestamp: " + s); return i = i.replace(/^[^\sa-zA-Z-]+/, ""), o; } function r(o, l) { const u = new $I; Zp(o, function (h, f) { let m; switch (h) {
    case "region":
        for (let p = t.length - 1; p >= 0; p--)
            if (t[p].id === f) {
                u.set(h, t[p].region);
                break;
            }
        break;
    case "vertical":
        u.alt(h, f, ["rl", "lr"]);
        break;
    case "line":
        m = f.split(","), u.integer(h, m[0]), u.percent(h, m[0]) && u.set("snapToLines", !1), u.alt(h, m[0], ["auto"]), m.length === 2 && u.alt("lineAlign", m[1], ["start", Xr, "end"]);
        break;
    case "position":
        m = f.split(","), u.percent(h, m[0]), m.length === 2 && u.alt("positionAlign", m[1], ["start", Xr, "end", "line-left", "line-right", "auto"]);
        break;
    case "size":
        u.percent(h, f);
        break;
    case "align":
        u.alt(h, f, ["start", Xr, "end", "left", "right"]);
        break;
} }, /:/, /\s/), l.region = u.get("region", null), l.vertical = u.get("vertical", ""); let c = u.get("line", "auto"); c === "auto" && $u.line === -1 && (c = -1), l.line = c, l.lineAlign = u.get("lineAlign", "start"), l.snapToLines = u.get("snapToLines", !0), l.size = u.get("size", 100), l.align = u.get("align", Xr); let d = u.get("position", "auto"); d === "auto" && $u.position === 50 && (d = l.align === "start" || l.align === "left" ? 0 : l.align === "end" || l.align === "right" ? 100 : 50), l.position = d; } function a() { i = i.replace(/^\s+/, ""); } if (a(), e.startTime = n(), a(), i.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s); i = i.slice(3), a(), e.endTime = n(), a(), r(i, e); }
function Jp(i) {
    return i.replace(/<br(?: \/)?>/gi, `
`);
}
class GI {
    constructor() { this.state = "INITIAL", this.buffer = "", this.decoder = new BI, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0; }
    parse(e) {
        const t = this;
        e && (t.buffer += t.decoder.decode(e, { stream: !0 }));
        function s() {
            let r = t.buffer, a = 0;
            for (r = Jp(r); a < r.length && r[a] !== "\r" && r[a] !== `
`;)
                ++a;
            const o = r.slice(0, a);
            return r[a] === "\r" && ++a, r[a] === `
` && ++a, t.buffer = r.slice(a), o;
        }
        function n(r) { Zp(r, function (a, o) { }, /:/); }
        try {
            let r = "";
            if (t.state === "INITIAL") {
                if (!/\r\n|\n/.test(t.buffer))
                    return this;
                r = s();
                const o = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                if (!(o != null && o[0]))
                    throw new Error("Malformed WebVTT signature.");
                t.state = "HEADER";
            }
            let a = !1;
            for (; t.buffer;) {
                if (!/\r\n|\n/.test(t.buffer))
                    return this;
                switch (a ? a = !1 : r = s(), t.state) {
                    case "HEADER":
                        /:/.test(r) ? n(r) : r || (t.state = "ID");
                        continue;
                    case "NOTE":
                        r || (t.state = "ID");
                        continue;
                    case "ID":
                        if (/^NOTE($|[ \t])/.test(r)) {
                            t.state = "NOTE";
                            break;
                        }
                        if (!r)
                            continue;
                        if (t.cue = new dd(0, 0, ""), t.state = "CUE", r.indexOf("-->") === -1) {
                            t.cue.id = r;
                            continue;
                        }
                    case "CUE":
                        if (!t.cue) {
                            t.state = "BADCUE";
                            continue;
                        }
                        try {
                            jI(r, t.cue, t.regionList);
                        }
                        catch {
                            t.cue = null, t.state = "BADCUE";
                            continue;
                        }
                        t.state = "CUETEXT";
                        continue;
                    case "CUETEXT":
                        {
                            const o = r.indexOf("-->") !== -1;
                            if (!r || o && (a = !0)) {
                                t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                                continue;
                            }
                            if (t.cue === null)
                                continue;
                            t.cue.text && (t.cue.text += `
`), t.cue.text += r;
                        }
                        continue;
                    case "BADCUE": r || (t.state = "ID");
                }
            }
        }
        catch {
            t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
        }
        return this;
    }
    flush() {
        const e = this;
        try {
            if ((e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL" || e.state === "BADWEBVTT")
                throw new Error("Malformed WebVTT signature.");
        }
        catch (t) {
            e.onparsingerror && e.onparsingerror(t);
        }
        return e.onflush && e.onflush(), this;
    }
}
const VI = /\r\n|\n\r|\n|\r/g, Sl = function (e, t, s = 0) { return e.slice(s, s + t.length) === t; }, KI = function (e) { let t = parseInt(e.slice(-3)); const s = parseInt(e.slice(-6, -4)), n = parseInt(e.slice(-9, -7)), r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0; if (!G(t) || !G(s) || !G(n) || !G(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`); return t += 1e3 * s, t += 60 * 1e3 * n, t += 60 * 60 * 1e3 * r, t; };
function hd(i, e, t) { return Un(i.toString()) + Un(e.toString()) + Un(t); }
const HI = function (e, t, s) { let n = e[t], r = e[n.prevCC]; if (!r || !r.new && n.new) {
    e.ccOffset = e.presentationOffset = n.start, n.new = !1;
    return;
} for (; (a = r) != null && a.new;) {
    var a;
    e.ccOffset += n.start - r.start, n.new = !1, n = r, r = e[n.prevCC];
} e.presentationOffset = s; };
function zI(i, e, t, s, n, r, a) {
    const o = new GI, l = gt(new Uint8Array(i)).trim().replace(VI, `
`).split(`
`), u = [], c = e ? Z1(e.baseTime, e.timescale) : 0;
    let d = "00:00.000", h = 0, f = 0, m, p = !0;
    o.oncue = function (x) { const y = t[s]; let v = t.ccOffset; const E = (h - c) / 9e4; if (y != null && y.new && (f !== void 0 ? v = t.ccOffset = y.start : HI(t, s, E)), E) {
        if (!e) {
            m = new Error("Missing initPTS for VTT MPEGTS");
            return;
        }
        v = E - t.presentationOffset;
    } const T = x.endTime - x.startTime, L = ct((x.startTime + v - f) * 9e4, n * 9e4) / 9e4; x.startTime = Math.max(L, 0), x.endTime = Math.max(L + T, 0); const w = x.text.trim(); x.text = decodeURIComponent(encodeURIComponent(w)), x.id || (x.id = hd(x.startTime, x.endTime, w)), x.endTime > 0 && u.push(x); }, o.onparsingerror = function (x) { m = x; }, o.onflush = function () { if (m) {
        a(m);
        return;
    } r(u); }, l.forEach(x => {
        if (p)
            if (Sl(x, "X-TIMESTAMP-MAP=")) {
                p = !1, x.slice(16).split(",").forEach(y => { Sl(y, "LOCAL:") ? d = y.slice(6) : Sl(y, "MPEGTS:") && (h = parseInt(y.slice(7))); });
                try {
                    f = KI(d) / 1e3;
                }
                catch (y) {
                    m = y;
                }
                return;
            }
            else
                x === "" && (p = !1);
        o.parse(x + `
`);
    }), o.flush();
}
const Tl = "stpp.ttml.im1t", ey = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, ty = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, WI = { left: "start", center: "center", right: "end", start: "start", end: "end" };
function jf(i, e, t, s) { const n = te(new Uint8Array(i), ["mdat"]); if (n.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
} const r = n.map(o => gt(o)), a = X1(e.baseTime, 1, e.timescale); try {
    r.forEach(o => t(YI(o, a)));
}
catch (o) {
    s(o);
} }
function YI(i, e) { const n = new DOMParser().parseFromString(i, "text/xml").getElementsByTagName("tt")[0]; if (!n)
    throw new Error("Invalid ttml"); const r = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, a = Object.keys(r).reduce((d, h) => (d[h] = n.getAttribute(`ttp:${h}`) || r[h], d), {}), o = n.getAttribute("xml:space") !== "preserve", l = Gf(Ll(n, "styling", "style")), u = Gf(Ll(n, "layout", "region")), c = Ll(n, "body", "[begin]"); return [].map.call(c, d => { const h = iy(d, o); if (!h || !d.hasAttribute("begin"))
    return null; const f = Al(d.getAttribute("begin"), a), m = Al(d.getAttribute("dur"), a); let p = Al(d.getAttribute("end"), a); if (f === null)
    throw Vf(d); if (p === null) {
    if (m === null)
        throw Vf(d);
    p = f + m;
} const x = new dd(f - e, p - e, h); x.id = hd(x.startTime, x.endTime, x.text); const y = u[d.getAttribute("region")], v = l[d.getAttribute("style")], E = qI(y, v, l), { textAlign: T } = E; if (T) {
    const L = WI[T];
    L && (x.lineAlign = L), x.align = T;
} return ce(x, E), x; }).filter(d => d !== null); }
function Ll(i, e, t) { const s = i.getElementsByTagName(e)[0]; return s ? [].slice.call(s.querySelectorAll(t)) : []; }
function Gf(i) { return i.reduce((e, t) => { const s = t.getAttribute("xml:id"); return s && (e[s] = t), e; }, {}); }
function iy(i, e) {
    return [].slice.call(i.childNodes).reduce((t, s, n) => {
        var r;
        return s.nodeName === "br" && n ? t + `
` : (r = s.childNodes) != null && r.length ? iy(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent;
    }, "");
}
function qI(i, e, t) { const s = "http://www.w3.org/ns/ttml#styling"; let n = null; const r = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"], a = i != null && i.hasAttribute("style") ? i.getAttribute("style") : null; return a && t.hasOwnProperty(a) && (n = t[a]), r.reduce((o, l) => { const u = Il(e, s, l) || Il(i, s, l) || Il(n, s, l); return u && (o[l] = u), o; }, {}); }
function Il(i, e, t) { return i && i.hasAttributeNS(e, t) ? i.getAttributeNS(e, t) : null; }
function Vf(i) { return new Error(`Could not parse ttml timestamp ${i}`); }
function Al(i, e) { if (!i)
    return null; let t = Xp(i); return t === null && (ey.test(i) ? t = QI(i, e) : ty.test(i) && (t = XI(i, e))), t; }
function QI(i, e) { const t = ey.exec(i), s = (t[4] | 0) + (t[5] | 0) / e.subFrameRate; return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + s / e.frameRate; }
function XI(i, e) { const t = ty.exec(i), s = Number(t[1]); switch (t[2]) {
    case "h": return s * 3600;
    case "m": return s * 60;
    case "ms": return s * 1e3;
    case "f": return s / e.frameRate;
    case "t": return s / e.tickRate;
} return s; }
class Zr {
    constructor(e, t) { this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t; }
    dispatchCue() { this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null); }
    newCue(e, t, s) { (this.startTime === null || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName); }
    reset() { this.cueRanges = [], this.startTime = null; }
}
class ZI {
    constructor(e) { this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Hf(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(S.FRAG_LOADING, this.onFragLoading, this), e.on(S.FRAG_LOADED, this.onFragLoaded, this), e.on(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(S.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this); }
    destroy() { const { hls: e } = this; e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(S.FRAG_LOADING, this.onFragLoading, this), e.off(S.FRAG_LOADED, this.onFragLoaded, this), e.off(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(S.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.media = null, this.cea608Parser1 = this.cea608Parser2 = void 0; }
    initCea608Parsers() { const e = new Zr(this, "textTrack1"), t = new Zr(this, "textTrack2"), s = new Zr(this, "textTrack3"), n = new Zr(this, "textTrack4"); this.cea608Parser1 = new $f(1, e, t), this.cea608Parser2 = new $f(3, s, n); }
    addCues(e, t, s, n, r) { let a = !1; for (let o = r.length; o--;) {
        const l = r[o], u = JI(l[0], l[1], t, s);
        if (u >= 0 && (l[0] = Math.min(l[0], t), l[1] = Math.max(l[1], s), a = !0, u / (s - t) > .5))
            return;
    } if (a || r.push([t, s]), this.config.renderTextTracksNatively) {
        const o = this.captionsTracks[e];
        this.Cues.newCue(o, t, s, n);
    }
    else {
        const o = this.Cues.newCue(null, t, s, n);
        this.hls.trigger(S.CUES_PARSED, { type: "captions", cues: o, track: e });
    } }
    onInitPtsFound(e, { frag: t, id: s, initPTS: n, timescale: r, trackId: a }) { const { unparsedVttFrags: o } = this; s === z.MAIN && (this.initPTS[t.cc] = { baseTime: n, timescale: r, trackId: a }), o.length && (this.unparsedVttFrags = [], o.forEach(l => { this.initPTS[l.frag.cc] ? this.onFragLoaded(S.FRAG_LOADED, l) : this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: l.frag, error: new Error("Subtitle discontinuity domain does not match main") }); })); }
    getExistingTrack(e, t) { const { media: s } = this; if (s)
        for (let n = 0; n < s.textTracks.length; n++) {
            const r = s.textTracks[n];
            if (Kf(r, { name: e, lang: t, characteristics: "transcribes-spoken-dialog,describes-music-and-sound" }))
                return r;
        } return null; }
    createCaptionsTrack(e) { this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e); }
    createNativeTrack(e) { if (this.captionsTracks[e])
        return; const { captionsProperties: t, captionsTracks: s, media: n } = this, { label: r, languageCode: a } = t[e], o = this.getExistingTrack(r, a); if (o)
        s[e] = o, Us(s[e]), zp(s[e], n);
    else {
        const l = this.createTextTrack("captions", r, a);
        l && (l[e] = !0, s[e] = l);
    } }
    createNonNativeTrack(e) { if (this.nonNativeCaptionsTracks[e])
        return; const t = this.captionsProperties[e]; if (!t)
        return; const s = t.label, n = { _id: e, label: s, kind: "captions", default: t.media ? !!t.media.default : !1, closedCaptions: t.media }; this.nonNativeCaptionsTracks[e] = n, this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [n] }); }
    createTextTrack(e, t, s) { const n = this.media; if (n)
        return n.addTextTrack(e, t, s); }
    onMediaAttaching(e, t) { this.media = t.media, t.mediaSource || this._cleanTracks(); }
    onMediaDetaching(e, t) { const s = !!t.transferMedia; if (this.media = null, s)
        return; const { captionsTracks: n } = this; Object.keys(n).forEach(r => { Us(n[r]), delete n[r]; }), this.nonNativeCaptionsTracks = {}; }
    onManifestLoading() { this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Hf(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset()); }
    _cleanTracks() { const { media: e } = this; if (!e)
        return; const t = e.textTracks; if (t)
        for (let s = 0; s < t.length; s++)
            Us(t[s]); }
    onSubtitleTracksUpdated(e, t) { const s = t.subtitleTracks || [], n = s.some(r => r.textCodec === Tl); if (this.config.enableWebVTT || n && this.config.enableIMSC1) {
        if (Pp(this.tracks, s)) {
            this.tracks = s;
            return;
        }
        if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
            const a = this.media, o = a ? Sa(a.textTracks) : null;
            if (this.tracks.forEach((l, u) => { let c; if (o) {
                let d = null;
                for (let h = 0; h < o.length; h++)
                    if (o[h] && Kf(o[h], l)) {
                        d = o[h], o[h] = null;
                        break;
                    }
                d && (c = d);
            } if (c)
                Us(c);
            else {
                const d = sy(l);
                c = this.createTextTrack(d, l.name, l.lang), c && (c.mode = "disabled");
            } c && this.textTracks.push(c); }), o != null && o.length) {
                const l = o.filter(u => u !== null).map(u => u.label);
                l.length && this.hls.logger.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
            }
        }
        else if (this.tracks.length) {
            const a = this.tracks.map(o => ({ label: o.name, kind: o.type.toLowerCase(), default: o.default, subtitleTrack: o }));
            this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: a });
        }
    } }
    onManifestLoaded(e, t) { this.config.enableCEA708Captions && t.captions && t.captions.forEach(s => { const n = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId); if (!n)
        return; const r = `textTrack${n[1]}`, a = this.captionsProperties[r]; a && (a.label = s.name, s.lang && (a.languageCode = s.lang), a.media = s); }); }
    closedCaptionsForLevel(e) { const t = this.hls.levels[e.level]; return t == null ? void 0 : t.attrs["CLOSED-CAPTIONS"]; }
    onFragLoading(e, t) { if (this.enabled && t.frag.type === z.MAIN) {
        var s, n;
        const { cea608Parser1: r, cea608Parser2: a, lastSn: o } = this, { cc: l, sn: u } = t.frag, c = (s = (n = t.part) == null ? void 0 : n.index) != null ? s : -1;
        r && a && (u !== o + 1 || u === o && c !== this.lastPartIndex + 1 || l !== this.lastCc) && (r.reset(), a.reset()), this.lastCc = l, this.lastSn = u, this.lastPartIndex = c;
    } }
    onFragLoaded(e, t) { const { frag: s, payload: n } = t; if (s.type === z.SUBTITLE)
        if (n.byteLength) {
            const r = s.decryptdata, a = "stats" in t;
            if (r == null || !r.encrypted || a) {
                const o = this.tracks[s.level], l = this.vttCCs;
                l[s.cc] || (l[s.cc] = { start: s.start, prevCC: this.prevCC, new: !0 }, this.prevCC = s.cc), o && o.textCodec === Tl ? this._parseIMSC1(s, n) : this._parseVTTs(t);
            }
        }
        else
            this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: s, error: new Error("Empty subtitle payload") }); }
    _parseIMSC1(e, t) { const s = this.hls; jf(t, this.initPTS[e.cc], n => { this._appendCues(n, e.level), s.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e }); }, n => { s.logger.log(`Failed to parse IMSC1: ${n}`), s.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e, error: n }); }); }
    _parseVTTs(e) { var t; const { frag: s, payload: n } = e, { initPTS: r, unparsedVttFrags: a } = this, o = r.length - 1; if (!r[s.cc] && o === -1) {
        a.push(e);
        return;
    } const l = this.hls, u = (t = s.initSegment) != null && t.data ? wt(s.initSegment.data, new Uint8Array(n)).buffer : n; zI(u, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, c => { this._appendCues(c, s.level), l.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: s }); }, c => { const d = c.message === "Missing initPTS for VTT MPEGTS"; d ? a.push(e) : this._fallbackToIMSC1(s, n), l.logger.log(`Failed to parse VTT cue: ${c}`), !(d && o > s.cc) && l.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: s, error: c }); }); }
    _fallbackToIMSC1(e, t) { const s = this.tracks[e.level]; s.textCodec || jf(t, this.initPTS[e.cc], () => { s.textCodec = Tl, this._parseIMSC1(e, t); }, () => { s.textCodec = "wvtt"; }); }
    _appendCues(e, t) { const s = this.hls; if (this.config.renderTextTracksNatively) {
        const n = this.textTracks[t];
        if (!n || n.mode === "disabled")
            return;
        e.forEach(r => Wp(n, r));
    }
    else {
        const n = this.tracks[t];
        if (!n)
            return;
        const r = n.default ? "default" : "subtitles" + t;
        s.trigger(S.CUES_PARSED, { type: "subtitles", cues: e, track: r });
    } }
    onFragDecrypted(e, t) { const { frag: s } = t; s.type === z.SUBTITLE && this.onFragLoaded(S.FRAG_LOADED, t); }
    onSubtitleTracksCleared() { this.tracks = [], this.captionsTracks = {}; }
    onFragParsingUserdata(e, t) { if (!this.enabled || !this.config.enableCEA708Captions)
        return; const { frag: s, samples: n } = t; if (!(s.type === z.MAIN && this.closedCaptionsForLevel(s) === "NONE"))
        for (let r = 0; r < n.length; r++) {
            const a = n[r].bytes;
            if (a) {
                this.cea608Parser1 || this.initCea608Parsers();
                const o = this.extractCea608Data(a);
                this.cea608Parser1.addData(n[r].pts, o[0]), this.cea608Parser2.addData(n[r].pts, o[1]);
            }
        } }
    onBufferFlushing(e, { startOffset: t, endOffset: s, endOffsetSubtitles: n, type: r }) { const { media: a } = this; if (!(!a || a.currentTime < s)) {
        if (!r || r === "video") {
            const { captionsTracks: o } = this;
            Object.keys(o).forEach(l => Bu(o[l], t, s));
        }
        if (this.config.renderTextTracksNatively && t === 0 && n !== void 0) {
            const { textTracks: o } = this;
            Object.keys(o).forEach(l => Bu(o[l], t, n));
        }
    } }
    extractCea608Data(e) { const t = [[], []], s = e[0] & 31; let n = 2; for (let r = 0; r < s; r++) {
        const a = e[n++], o = 127 & e[n++], l = 127 & e[n++];
        if (o === 0 && l === 0)
            continue;
        if ((4 & a) !== 0) {
            const c = 3 & a;
            (c === 0 || c === 1) && (t[c].push(o), t[c].push(l));
        }
    } return t; }
}
function sy(i) { return i.characteristics && /transcribes-spoken-dialog/gi.test(i.characteristics) && /describes-music-and-sound/gi.test(i.characteristics) ? "captions" : "subtitles"; }
function Kf(i, e) { return !!i && i.kind === sy(e) && Ou(e, i); }
function JI(i, e, t, s) { return Math.min(e, s) - Math.max(i, t); }
function Hf() { return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !0 } }; }
const eA = /\s/, tA = { newCue(i, e, t, s) { const n = []; let r, a, o, l, u; const c = self.VTTCue || self.TextTrackCue; for (let h = 0; h < s.rows.length; h++)
        if (r = s.rows[h], o = !0, l = 0, u = "", !r.isEmpty()) {
            var d;
            for (let p = 0; p < r.chars.length; p++)
                eA.test(r.chars[p].uchar) && o ? l++ : (u += r.chars[p].uchar, o = !1);
            r.cueStartTime = e, e === t && (t += 1e-4), l >= 16 ? l-- : l++;
            const f = Jp(u.trim()), m = hd(e, t, f);
            i != null && (d = i.cues) != null && d.getCueById(m) || (a = new c(e, t, f), a.id = m, a.line = h + 1, a.align = "left", a.position = 10 + Math.min(80, Math.floor(l * 8 / 32) * 10), n.push(a));
        } return i && n.length && (n.sort((h, f) => h.line === "auto" || f.line === "auto" ? 0 : h.line > 8 && f.line > 8 ? f.line - h.line : h.line - f.line), n.forEach(h => Wp(i, h))), n; } };
function iA() { if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
    try {
        return new self.ReadableStream({}), !0;
    }
    catch { } return !1; }
const sA = /(\d+)-(\d+)\/(\d+)/;
class zf {
    constructor(e) { this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || oA, this.controller = new self.AbortController, this.stats = new Kc; }
    destroy() { this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null; }
    abortInternal() { this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort()); }
    abort() { var e; this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response); }
    load(e, t, s) { const n = this.stats; if (n.loading.start)
        throw new Error("Loader can only be used once."); n.loading.start = self.performance.now(); const r = nA(e, this.controller.signal), a = e.responseType === "arraybuffer", o = a ? "byteLength" : "length", { maxTimeToFirstByteMs: l, maxLoadTimeMs: u } = t.loadPolicy; this.context = e, this.config = t, this.callbacks = s, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = l && G(l) ? l : u, this.requestTimeout = self.setTimeout(() => { this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(n, e, this.response)); }, t.timeout), (cr(this.request) ? this.request.then(self.fetch) : self.fetch(this.request)).then(d => { var h; this.response = this.loader = d; const f = Math.max(self.performance.now(), n.loading.start); if (self.clearTimeout(this.requestTimeout), t.timeout = u, this.requestTimeout = self.setTimeout(() => { this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(n, e, this.response)); }, u - (f - n.loading.start)), !d.ok) {
        const { status: p, statusText: x } = d;
        throw new lA(x || "fetch, bad network response", p, d);
    } n.loading.first = f, n.total = aA(d.headers) || n.total; const m = (h = this.callbacks) == null ? void 0 : h.onProgress; return m && G(t.highWaterMark) ? this.loadProgressively(d, n, e, t.highWaterMark, m) : a ? d.arrayBuffer() : e.responseType === "json" ? d.json() : d.text(); }).then(d => { var h, f; const m = this.response; if (!m)
        throw new Error("loader destroyed"); self.clearTimeout(this.requestTimeout), n.loading.end = Math.max(self.performance.now(), n.loading.first); const p = d[o]; p && (n.loaded = n.total = p); const x = { url: m.url, data: d, code: m.status }, y = (h = this.callbacks) == null ? void 0 : h.onProgress; y && !G(t.highWaterMark) && y(n, e, d, m), (f = this.callbacks) == null || f.onSuccess(x, n, e, m); }).catch(d => { var h; if (self.clearTimeout(this.requestTimeout), n.aborted)
        return; const f = d && d.code || 0, m = d ? d.message : null; (h = this.callbacks) == null || h.onError({ code: f, text: m }, e, d ? d.details : null, n); }); }
    getCacheAge() { let e = null; if (this.response) {
        const t = this.response.headers.get("age");
        e = t ? parseFloat(t) : null;
    } return e; }
    getResponseHeader(e) { return this.response ? this.response.headers.get(e) : null; }
    loadProgressively(e, t, s, n = 0, r) { const a = new fp, o = e.body.getReader(), l = () => o.read().then(u => { if (u.done)
        return a.dataLength && r(t, s, a.flush().buffer, e), Promise.resolve(new ArrayBuffer(0)); const c = u.value, d = c.length; return t.loaded += d, d < n || a.dataLength ? (a.push(c), a.dataLength >= n && r(t, s, a.flush().buffer, e)) : r(t, s, c.buffer, e), l(); }).catch(() => Promise.reject()); return l(); }
}
function nA(i, e) { const t = { method: "GET", mode: "cors", credentials: "same-origin", signal: e, headers: new self.Headers(ce({}, i.headers)) }; return i.rangeEnd && t.headers.set("Range", "bytes=" + i.rangeStart + "-" + String(i.rangeEnd - 1)), t; }
function rA(i) { const e = sA.exec(i); if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1; }
function aA(i) { const e = i.get("Content-Range"); if (e) {
    const s = rA(e);
    if (G(s))
        return s;
} const t = i.get("Content-Length"); if (t)
    return parseInt(t); }
function oA(i, e) { return new self.Request(i.url, e); }
class lA extends Error {
    constructor(e, t, s) { super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = s; }
}
const uA = /^age:\s*[\d.]+\s*$/im;
class ny {
    constructor(e) { this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new Kc, this.retryDelay = 0; }
    destroy() { this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null; }
    abortInternal() { const e = this.loader; self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = !0, e.abort())); }
    abort() { var e; this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader); }
    load(e, t, s) { if (this.stats.loading.start)
        throw new Error("Loader can only be used once."); this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = s, this.loadInternal(); }
    loadInternal() { const { config: e, context: t } = this; if (!e || !t)
        return; const s = this.loader = new self.XMLHttpRequest, n = this.stats; n.loading.first = 0, n.loaded = 0, n.aborted = !1; const r = this.xhrSetup; r ? Promise.resolve().then(() => { if (!(this.loader !== s || this.stats.aborted))
        return r(s, t.url); }).catch(a => { if (!(this.loader !== s || this.stats.aborted))
        return s.open("GET", t.url, !0), r(s, t.url); }).then(() => { this.loader !== s || this.stats.aborted || this.openAndSendXhr(s, t, e); }).catch(a => { var o; (o = this.callbacks) == null || o.onError({ code: s.status, text: a.message }, t, s, n); }) : this.openAndSendXhr(s, t, e); }
    openAndSendXhr(e, t, s) { e.readyState || e.open("GET", t.url, !0); const n = t.headers, { maxTimeToFirstByteMs: r, maxLoadTimeMs: a } = s.loadPolicy; if (n)
        for (const o in n)
            e.setRequestHeader(o, n[o]); t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && G(r) ? r : a, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send(); }
    readystatechange() { const { context: e, loader: t, stats: s } = this; if (!e || !t)
        return; const n = t.readyState, r = this.config; if (!s.aborted && n >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), n === 4)) {
        self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
        const u = t.status, c = t.responseType === "text" ? t.responseText : null;
        if (u >= 200 && u < 300) {
            const m = c ?? t.response;
            if (m != null) {
                var a, o;
                s.loading.end = Math.max(self.performance.now(), s.loading.first);
                const p = t.responseType === "arraybuffer" ? m.byteLength : m.length;
                s.loaded = s.total = p, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first);
                const x = (a = this.callbacks) == null ? void 0 : a.onProgress;
                x && x(s, e, m, t);
                const y = { url: t.responseURL, data: m, code: u };
                (o = this.callbacks) == null || o.onSuccess(y, s, e, t);
                return;
            }
        }
        const d = r.loadPolicy.errorRetry, h = s.retry, f = { url: e.url, data: void 0, code: u };
        if (eo(d, h, !1, f))
            this.retry(d);
        else {
            var l;
            le.error(`${u} while loading ${e.url}`), (l = this.callbacks) == null || l.onError({ code: u, text: t.statusText }, e, t, s);
        }
    } }
    loadtimeout() { if (!this.config)
        return; const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry; if (eo(e, t, !0))
        this.retry(e);
    else {
        var s;
        le.warn(`timeout while loading ${(s = this.context) == null ? void 0 : s.url}`);
        const n = this.callbacks;
        n && (this.abortInternal(), n.onTimeout(this.stats, this.context, this.loader));
    } }
    retry(e) { const { context: t, stats: s } = this; this.retryDelay = Yc(e, s.retry), s.retry++, le.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t == null ? void 0 : t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay); }
    loadprogress(e) { const t = this.stats; t.loaded = e.loaded, e.lengthComputable && (t.total = e.total); }
    getCacheAge() { let e = null; if (this.loader && uA.test(this.loader.getAllResponseHeaders())) {
        const t = this.loader.getResponseHeader("age");
        e = t ? parseFloat(t) : null;
    } return e; }
    getResponseHeader(e) { return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null; }
}
const cA = { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: null, errorRetry: null }, dA = oe(oe({ autoStartLoad: !0, startPosition: -1, defaultAudioCodec: void 0, debug: !1, capLevelOnFPSDrop: !1, capLevelToPlayerSize: !1, ignoreDevicePixelRatio: !1, maxDevicePixelRatio: Number.POSITIVE_INFINITY, preferManagedMediaSource: !0, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, frontBufferFlushThreshold: 1 / 0, startOnSegmentBoundary: !1, maxBufferSize: 60 * 1e3 * 1e3, maxFragLookUpTolerance: .25, maxBufferHole: .1, detectStallWithCurrentTimeMs: 1250, highBufferWatchdogPeriod: 2, nudgeOffset: .1, nudgeMaxRetry: 3, nudgeOnVideoHole: !0, liveSyncMode: "edge", liveSyncDurationCount: 3, liveSyncOnStallIncrease: 1, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: !1, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: !0, workerPath: null, enableSoftwareAES: !0, startLevel: void 0, startFragPrefetch: !1, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: .2, appendErrorMaxRetry: 3, ignorePlaylistParsingErrors: !1, loader: ny, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: LT, bufferController: fL, capLevelController: ld, errorController: _T, fpsController: mI, stretchShortVideoTrack: !1, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: !0, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrEwmaDefaultEstimateMax: 5e6, abrBandWidthFactor: .95, abrBandWidthUpFactor: .7, abrMaxWithRealBitrate: !1, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: !1, widevineLicenseUrl: void 0, drmSystems: {}, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: ip, requireKeySystemAccessOnStart: !1, testBandwidth: !0, progressive: !1, lowLatencyMode: !0, cmcd: void 0, enableDateRangeMetadataCues: !0, enableEmsgMetadataCues: !0, enableEmsgKLVMetadata: !1, enableID3MetadataCues: !0, enableInterstitialPlayback: !0, interstitialAppendInPlace: !0, interstitialLiveLookAhead: 10, useMediaCapabilities: !0, preserveManualLevelOnError: !1, certLoadPolicy: { default: cA }, keyLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" }, errorRetry: { maxNumRetry: 8, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" } } }, manifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1 / 0, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, playlistLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 2, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, fragLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 12e4, timeoutRetry: { maxNumRetry: 4, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 6, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, steeringManifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, interstitialAssetListLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 3e4, timeoutRetry: { maxNumRetry: 0, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 0, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3 }, hA()), {}, { subtitleStreamController: RI, subtitleTrackController: yI, timelineController: ZI, audioStreamController: uL, audioTrackController: cL, emeController: Ws, cmcdController: cI, contentSteeringController: hI, interstitialsController: AI });
function hA() { return { cueHandler: tA, enableWebVTT: !0, enableIMSC1: !0, enableCEA708Captions: !0, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: !0 }; }
function fA(i, e, t) { if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration"); if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"'); if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"'); const s = ju(i), n = ["manifest", "level", "frag"], r = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"]; return n.forEach(a => { const o = `${a === "level" ? "playlist" : a}LoadPolicy`, l = e[o] === void 0, u = []; r.forEach(c => { const d = `${a}Loading${c}`, h = e[d]; if (h !== void 0 && l) {
    u.push(d);
    const f = s[o].default;
    switch (e[o] = { default: f }, c) {
        case "TimeOut":
            f.maxLoadTimeMs = h, f.maxTimeToFirstByteMs = h;
            break;
        case "MaxRetry":
            f.errorRetry.maxNumRetry = h, f.timeoutRetry.maxNumRetry = h;
            break;
        case "RetryDelay":
            f.errorRetry.retryDelayMs = h, f.timeoutRetry.retryDelayMs = h;
            break;
        case "MaxRetryTimeout":
            f.errorRetry.maxRetryDelayMs = h, f.timeoutRetry.maxRetryDelayMs = h;
            break;
    }
} }), u.length && t.warn(`hls.js config: "${u.join('", "')}" setting(s) are deprecated, use "${o}": ${fe(e[o])}`); }), oe(oe({}, s), e); }
function ju(i) { return i && typeof i == "object" ? Array.isArray(i) ? i.map(ju) : Object.keys(i).reduce((e, t) => (e[t] = ju(i[t]), e), {}) : i; }
function mA(i, e) { const t = i.loader; t !== zf && t !== ny ? (e.log("[config]: Custom loader detected, cannot enable progressive streaming"), i.progressive = !1) : iA() && (i.loader = zf, i.progressive = !0, i.enableSoftwareAES = !0, e.log("[config]: Progressive streaming enabled, using FetchLoader")); }
const Ta = 2, gA = .1, pA = .05, yA = 100;
class vA extends Xg {
    constructor(e, t) { super("gap-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.media = null, this.mediaSource = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.buffered = {}, this.lastCurrentTime = 0, this.ended = 0, this.waiting = 0, this.onMediaPlaying = () => { this.ended = 0, this.waiting = 0; }, this.onMediaWaiting = () => { var s; (s = this.media) != null && s.seeking || (this.waiting = self.performance.now(), this.tick()); }, this.onMediaEnded = () => { if (this.hls) {
        var s;
        this.ended = ((s = this.media) == null ? void 0 : s.currentTime) || 1, this.hls.trigger(S.MEDIA_ENDED, { stalled: !1 });
    } }, this.hls = e, this.fragmentTracker = t, this.registerListeners(); }
    registerListeners() { const { hls: e } = this; e && (e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.BUFFER_APPENDED, this.onBufferAppended, this)); }
    unregisterListeners() { const { hls: e } = this; e && (e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.BUFFER_APPENDED, this.onBufferAppended, this)); }
    destroy() { super.destroy(), this.unregisterListeners(), this.media = this.hls = this.fragmentTracker = null, this.mediaSource = void 0; }
    onMediaAttached(e, t) { this.setInterval(yA), this.mediaSource = t.mediaSource; const s = this.media = t.media; Xe(s, "playing", this.onMediaPlaying), Xe(s, "waiting", this.onMediaWaiting), Xe(s, "ended", this.onMediaEnded); }
    onMediaDetaching(e, t) { this.clearInterval(); const { media: s } = this; s && (nt(s, "playing", this.onMediaPlaying), nt(s, "waiting", this.onMediaWaiting), nt(s, "ended", this.onMediaEnded), this.media = null), this.mediaSource = void 0; }
    onBufferAppended(e, t) { this.buffered = t.timeRanges; }
    get hasBuffered() { return Object.keys(this.buffered).length > 0; }
    tick() { var e; if (!((e = this.media) != null && e.readyState) || !this.hasBuffered)
        return; const t = this.media.currentTime; this.poll(t, this.lastCurrentTime), this.lastCurrentTime = t; }
    poll(e, t) { var s, n; const r = (s = this.hls) == null ? void 0 : s.config; if (!r)
        return; const a = this.media; if (!a)
        return; const { seeking: o } = a, l = this.seeking && !o, u = !this.seeking && o, c = a.paused && !o || a.ended || a.playbackRate === 0; if (this.seeking = o, e !== t) {
        t && (this.ended = 0), this.moved = !0, o || (this.nudgeRetry = 0, r.nudgeOnVideoHole && !c && e > t && this.nudgeOnVideoHole(e, t)), this.waiting === 0 && this.stallResolved(e);
        return;
    } if (u || l) {
        l && this.stallResolved(e);
        return;
    } if (c) {
        this.nudgeRetry = 0, this.stallResolved(e), !this.ended && a.ended && this.hls && (this.ended = e || 1, this.hls.trigger(S.MEDIA_ENDED, { stalled: !1 }));
        return;
    } if (!Z.getBuffered(a).length) {
        this.nudgeRetry = 0;
        return;
    } const d = Z.bufferInfo(a, e, 0), h = d.nextStart || 0, f = this.fragmentTracker; if (o && f && this.hls) {
        const w = Wf(this.hls.inFlightFragments, e), I = d.len > Ta, R = !h || w || h - e > Ta && !f.getPartialFragment(e);
        if (I || R)
            return;
        this.moved = !1;
    } const m = (n = this.hls) == null ? void 0 : n.latestLevelDetails; if (!this.moved && this.stalled !== null && f) {
        if (!(d.len > 0) && !h)
            return;
        const I = Math.max(h, d.start || 0) - e, _ = !!(m != null && m.live) ? m.targetduration * 2 : Ta, A = Jr(e, f);
        if (I > 0 && (I <= _ || A)) {
            a.paused || this._trySkipBufferHole(A);
            return;
        }
    } const p = r.detectStallWithCurrentTimeMs, x = self.performance.now(), y = this.waiting; let v = this.stalled; if (v === null)
        if (y > 0 && x - y < p)
            v = this.stalled = y;
        else {
            this.stalled = x;
            return;
        } const E = x - v; if (!o && (E >= p || y) && this.hls) {
        var T;
        if (((T = this.mediaSource) == null ? void 0 : T.readyState) === "ended" && !(m != null && m.live) && Math.abs(e - ((m == null ? void 0 : m.edge) || 0)) < 1) {
            if (this.ended)
                return;
            this.ended = e || 1, this.hls.trigger(S.MEDIA_ENDED, { stalled: !0 });
            return;
        }
        if (this._reportStall(d), !this.media || !this.hls)
            return;
    } const L = Z.bufferInfo(a, e, r.maxBufferHole); this._tryFixBufferStall(L, E, e); }
    stallResolved(e) { const t = this.stalled; if (t && this.hls && (this.stalled = null, this.stallReported)) {
        const s = self.performance.now() - t;
        this.log(`playback not stuck anymore @${e}, after ${Math.round(s)}ms`), this.stallReported = !1, this.waiting = 0, this.hls.trigger(S.STALL_RESOLVED, {});
    } }
    nudgeOnVideoHole(e, t) { var s; const n = this.buffered.video; if (this.hls && this.media && this.fragmentTracker && (s = this.buffered.audio) != null && s.length && n && n.length > 1 && e > n.end(0)) {
        const r = Z.bufferedInfo(Z.timeRangesToArray(this.buffered.audio), e, 0);
        if (r.len > 1 && t >= r.start) {
            const a = Z.timeRangesToArray(n), o = Z.bufferedInfo(a, t, 0).bufferedIndex;
            if (o > -1 && o < a.length - 1) {
                const l = Z.bufferedInfo(a, e, 0).bufferedIndex, u = a[o].end, c = a[o + 1].start;
                if ((l === -1 || l > o) && c - u < 1 && e - u < 2) {
                    const d = new Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${u} -> ${c} buffered index: ${l}`);
                    this.warn(d.message), this.media.currentTime += 1e-6;
                    let h = Jr(e, this.fragmentTracker);
                    h && "fragment" in h ? h = h.fragment : h || (h = void 0);
                    const f = Z.bufferInfo(this.media, e, 0);
                    this.hls.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.BUFFER_SEEK_OVER_HOLE, fatal: !1, error: d, reason: d.message, frag: h, buffer: f.len, bufferInfo: f });
                }
            }
        }
    } }
    _tryFixBufferStall(e, t, s) { var n, r; const { fragmentTracker: a, media: o } = this, l = (n = this.hls) == null ? void 0 : n.config; if (!o || !a || !l)
        return; const u = (r = this.hls) == null ? void 0 : r.latestLevelDetails, c = Jr(s, a); if ((c || u != null && u.live && s < u.fragmentStart) && (this._trySkipBufferHole(c) || !this.media))
        return; const d = e.buffered, h = this.adjacentTraversal(e, s); (d && d.length > 1 && e.len > l.maxBufferHole || e.nextStart && (e.nextStart - s < l.maxBufferHole || h)) && (t > l.highBufferWatchdogPeriod * 1e3 || this.waiting) && (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e)); }
    adjacentTraversal(e, t) { const s = this.fragmentTracker, n = e.nextStart; if (s && n) {
        const r = s.getFragAtPos(t, z.MAIN), a = s.getFragAtPos(n, z.MAIN);
        if (r && a)
            return a.sn - r.sn < 2;
    } return !1; }
    _reportStall(e) { const { hls: t, media: s, stallReported: n, stalled: r } = this; if (!n && r !== null && s && t) {
        this.stallReported = !0;
        const a = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${fe(e)})`);
        this.warn(a.message), t.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.BUFFER_STALLED_ERROR, fatal: !1, error: a, buffer: e.len, bufferInfo: e, stalled: { start: r } });
    } }
    _trySkipBufferHole(e) { var t; const { fragmentTracker: s, media: n } = this, r = (t = this.hls) == null ? void 0 : t.config; if (!n || !s || !r)
        return 0; const a = n.currentTime, o = Z.bufferInfo(n, a, 0), l = a < o.start ? o.start : o.nextStart; if (l && this.hls) {
        const c = o.len <= r.maxBufferHole, d = o.len > 0 && o.len < 1 && n.readyState < 3, h = l - a;
        if (h > 0 && (c || d)) {
            if (h > r.maxBufferHole) {
                let m = !1;
                if (a === 0) {
                    const p = s.getAppendedFrag(0, z.MAIN);
                    p && l < p.end && (m = !0);
                }
                if (!m && e) {
                    var u;
                    if (!((u = this.hls.loadLevelObj) != null && u.details) || Wf(this.hls.inFlightFragments, l))
                        return 0;
                    let x = !1, y = e.end;
                    for (; y < l;) {
                        const v = Jr(y, s);
                        if (v)
                            y += v.duration;
                        else {
                            x = !0;
                            break;
                        }
                    }
                    if (x)
                        return 0;
                }
            }
            const f = Math.max(l + pA, a + gA);
            if (this.warn(`skipping hole, adjusting currentTime from ${a} to ${f}`), this.moved = !0, n.currentTime = f, !(e != null && e.gap)) {
                const m = new Error(`fragment loaded with buffer holes, seeking from ${a} to ${f}`), p = { type: q.MEDIA_ERROR, details: k.BUFFER_SEEK_OVER_HOLE, fatal: !1, error: m, reason: m.message, buffer: o.len, bufferInfo: o };
                e && ("fragment" in e ? p.part = e : p.frag = e), this.hls.trigger(S.ERROR, p);
            }
            return f;
        }
    } return 0; }
    _tryNudgeBuffer(e) { const { hls: t, media: s, nudgeRetry: n } = this, r = t == null ? void 0 : t.config; if (!s || !r)
        return 0; const a = s.currentTime; if (this.nudgeRetry++, n < r.nudgeMaxRetry) {
        const o = a + (n + 1) * r.nudgeOffset, l = new Error(`Nudging 'currentTime' from ${a} to ${o}`);
        this.warn(l.message), s.currentTime = o, t.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.BUFFER_NUDGE_ON_STALL, error: l, fatal: !1, buffer: e.len, bufferInfo: e });
    }
    else {
        const o = new Error(`Playhead still not moving while enough data buffered @${a} after ${r.nudgeMaxRetry} nudges`);
        this.error(o.message), t.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.BUFFER_STALLED_ERROR, error: o, fatal: !0, buffer: e.len, bufferInfo: e });
    } }
}
function Wf(i, e) { const t = Yf(i.main); if (t && t.start <= e)
    return t; const s = Yf(i.audio); return s && s.start <= e ? s : null; }
function Yf(i) { if (!i)
    return null; switch (i.state) {
    case N.IDLE:
    case N.STOPPED:
    case N.ENDED:
    case N.ERROR: return null;
} return i.frag; }
function Jr(i, e) { return e.getAppendedFrag(i, z.MAIN) || e.getPartialFragment(i); }
const xA = .25;
function Gu() { if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue; }
function Rl(i, e, t, s, n) { let r = new i(e, t, ""); try {
    r.value = s, n && (r.type = n);
}
catch {
    r = new i(e, t, fe(n ? oe({ type: n }, s) : s));
} return r; }
const ea = (() => { const i = Gu(); try {
    i && new i(0, Number.POSITIVE_INFINITY, "");
}
catch {
    return Number.MAX_VALUE;
} return Number.POSITIVE_INFINITY; })();
class EA {
    constructor(e) { this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.removeCues = !0, this.assetCue = void 0, this.onEventCueEnter = () => { this.hls && this.hls.trigger(S.EVENT_CUE_ENTER, {}); }, this.hls = e, this._registerListeners(); }
    destroy() { this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = this.onEventCueEnter = null; }
    _registerListeners() { const { hls: e } = this; e && (e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(S.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this)); }
    _unregisterListeners() { const { hls: e } = this; e && (e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(S.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this)); }
    onMediaAttaching(e, t) { var s; this.media = t.media, ((s = t.overrides) == null ? void 0 : s.cueRemoval) === !1 && (this.removeCues = !1); }
    onMediaAttached() { var e; const t = (e = this.hls) == null ? void 0 : e.latestLevelDetails; t && this.updateDateRangeCues(t); }
    onMediaDetaching(e, t) { this.media = null, !t.transferMedia && (this.id3Track && (this.removeCues && Us(this.id3Track, this.onEventCueEnter), this.id3Track = null), this.dateRangeCuesAppended = {}); }
    onManifestLoading() { this.dateRangeCuesAppended = {}; }
    createTrack(e) { const t = this.getID3Track(e.textTracks); return t.mode = "hidden", t; }
    getID3Track(e) { if (this.media) {
        for (let t = 0; t < e.length; t++) {
            const s = e[t];
            if (s.kind === "metadata" && s.label === "id3")
                return zp(s, this.media), s;
        }
        return this.media.addTextTrack("metadata", "id3");
    } }
    onFragParsingMetadata(e, t) { if (!this.media || !this.hls)
        return; const { enableEmsgMetadataCues: s, enableID3MetadataCues: n } = this.hls.config; if (!s && !n)
        return; const { samples: r } = t; this.id3Track || (this.id3Track = this.createTrack(this.media)); const a = Gu(); if (a)
        for (let o = 0; o < r.length; o++) {
            const l = r[o].type;
            if (l === ht.emsg && !s || !n)
                continue;
            const u = Ep(r[o].data), c = r[o].pts;
            let d = c + r[o].duration;
            d > ea && (d = ea), d - c <= 0 && (d = c + xA);
            for (let f = 0; f < u.length; f++) {
                const m = u[f];
                if (!Sp(m)) {
                    this.updateId3CueEnds(c, l);
                    const p = Rl(a, c, d, m, l);
                    p && this.id3Track.addCue(p);
                }
            }
        } }
    updateId3CueEnds(e, t) { var s; const n = (s = this.id3Track) == null ? void 0 : s.cues; if (n)
        for (let r = n.length; r--;) {
            const a = n[r];
            a.type === t && a.startTime < e && a.endTime === ea && (a.endTime = e);
        } }
    onBufferFlushing(e, { startOffset: t, endOffset: s, type: n }) { const { id3Track: r, hls: a } = this; if (!a)
        return; const { config: { enableEmsgMetadataCues: o, enableID3MetadataCues: l } } = a; if (r && (o || l)) {
        let u;
        n === "audio" ? u = c => c.type === ht.audioId3 && l : n === "video" ? u = c => c.type === ht.emsg && o : u = c => c.type === ht.audioId3 && l || c.type === ht.emsg && o, Bu(r, t, s, u);
    } }
    onLevelUpdated(e, { details: t }) { this.updateDateRangeCues(t, !0); }
    onLevelPtsUpdated(e, t) { Math.abs(t.drift) > .01 && this.updateDateRangeCues(t.details); }
    updateDateRangeCues(e, t) { if (!this.hls || !this.media)
        return; const { assetPlayerId: s, timelineOffset: n, enableDateRangeMetadataCues: r, interstitialsController: a } = this.hls.config; if (!r)
        return; const o = Gu(); if (s && n && !a) {
        const { fragmentStart: p, fragmentEnd: x } = e;
        let y = this.assetCue;
        y ? (y.startTime = p, y.endTime = x) : o && (y = this.assetCue = Rl(o, p, x, { assetPlayerId: this.hls.config.assetPlayerId }, "hlsjs.interstitial.asset"), y && (y.id = s, this.id3Track || (this.id3Track = this.createTrack(this.media)), this.id3Track.addCue(y), y.addEventListener("enter", this.onEventCueEnter)));
    } if (!e.hasProgramDateTime)
        return; const { id3Track: l } = this, { dateRanges: u } = e, c = Object.keys(u); let d = this.dateRangeCuesAppended; if (l && t) {
        var h;
        if ((h = l.cues) != null && h.length) {
            const p = Object.keys(d).filter(x => !c.includes(x));
            for (let x = p.length; x--;) {
                var f;
                const y = p[x], v = (f = d[y]) == null ? void 0 : f.cues;
                delete d[y], v && Object.keys(v).forEach(E => { const T = v[E]; if (T) {
                    T.removeEventListener("enter", this.onEventCueEnter);
                    try {
                        l.removeCue(T);
                    }
                    catch { }
                } });
            }
        }
        else
            d = this.dateRangeCuesAppended = {};
    } const m = e.fragments[e.fragments.length - 1]; if (!(c.length === 0 || !G(m == null ? void 0 : m.programDateTime))) {
        this.id3Track || (this.id3Track = this.createTrack(this.media));
        for (let p = 0; p < c.length; p++) {
            const x = c[p], y = u[x], v = y.startTime, E = d[x], T = (E == null ? void 0 : E.cues) || {};
            let L = (E == null ? void 0 : E.durationKnown) || !1, w = ea;
            const { duration: I, endDate: R } = y;
            if (R && I !== null)
                w = v + I, L = !0;
            else if (y.endOnNext && !L) {
                const A = c.reduce((D, B) => { if (B !== y.id) {
                    const V = u[B];
                    if (V.class === y.class && V.startDate > y.startDate && (!D || y.startDate < D.startDate))
                        return V;
                } return D; }, null);
                A && (w = A.startTime, L = !0);
            }
            const _ = Object.keys(y.attr);
            for (let A = 0; A < _.length; A++) {
                const D = _[A];
                if (!jT(D))
                    continue;
                const B = T[D];
                if (B)
                    L && !(E != null && E.durationKnown) ? B.endTime = w : Math.abs(B.startTime - v) > .01 && (B.startTime = v, B.endTime = w);
                else if (o) {
                    let V = y.attr[D];
                    GT(D) && (V = Cg(V));
                    const K = Rl(o, v, w, { key: D, data: V }, ht.dateRange);
                    K && (K.id = x, this.id3Track.addCue(K), T[D] = K, a && (D === "X-ASSET-LIST" || D === "X-ASSET-URL") && K.addEventListener("enter", this.onEventCueEnter));
                }
            }
            d[x] = { cues: T, dateRange: y, durationKnown: L };
        }
    } }
}
class SA {
    constructor(e) { this.hls = void 0, this.config = void 0, this.media = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this._targetLatencyUpdated = !1, this.onTimeupdate = () => { const { media: t } = this, s = this.levelDetails; if (!t || !s)
        return; this.currentTime = t.currentTime; const n = this.computeLatency(); if (n === null)
        return; this._latency = n; const { lowLatencyMode: r, maxLiveSyncPlaybackRate: a } = this.config; if (!r || a === 1 || !s.live)
        return; const o = this.targetLatency; if (o === null)
        return; const l = n - o, u = Math.min(this.maxLatency, o + s.targetduration); if (l < u && l > .05 && this.forwardBufferLength > 1) {
        const d = Math.min(2, Math.max(1, a)), h = Math.round(2 / (1 + Math.exp(-.75 * l - this.edgeStalled)) * 20) / 20, f = Math.min(d, Math.max(1, h));
        this.changeMediaPlaybackRate(t, f);
    }
    else
        t.playbackRate !== 1 && t.playbackRate !== 0 && this.changeMediaPlaybackRate(t, 1); }, this.hls = e, this.config = e.config, this.registerListeners(); }
    get levelDetails() { var e; return ((e = this.hls) == null ? void 0 : e.latestLevelDetails) || null; }
    get latency() { return this._latency || 0; }
    get maxLatency() { const { config: e } = this; if (e.liveMaxLatencyDuration !== void 0)
        return e.liveMaxLatencyDuration; const t = this.levelDetails; return t ? e.liveMaxLatencyDurationCount * t.targetduration : 0; }
    get targetLatency() { const e = this.levelDetails; if (e === null || this.hls === null)
        return null; const { holdBack: t, partHoldBack: s, targetduration: n } = e, { liveSyncDuration: r, liveSyncDurationCount: a, lowLatencyMode: o } = this.config, l = this.hls.userConfig; let u = o && s || t; (this._targetLatencyUpdated || l.liveSyncDuration || l.liveSyncDurationCount || u === 0) && (u = r !== void 0 ? r : a * n); const c = n; return u + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, c); }
    set targetLatency(e) { this.stallCount = 0, this.config.liveSyncDuration = e, this._targetLatencyUpdated = !0; }
    get liveSyncPosition() { const e = this.estimateLiveEdge(), t = this.targetLatency; if (e === null || t === null)
        return null; const s = this.levelDetails; if (s === null)
        return null; const n = s.edge, r = e - t - this.edgeStalled, a = n - s.totalduration, o = n - (this.config.lowLatencyMode && s.partTarget || s.targetduration); return Math.min(Math.max(a, r), o); }
    get drift() { const e = this.levelDetails; return e === null ? 1 : e.drift; }
    get edgeStalled() { const e = this.levelDetails; if (e === null)
        return 0; const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3; return Math.max(e.age - t, 0); }
    get forwardBufferLength() { const { media: e } = this, t = this.levelDetails; if (!e || !t)
        return 0; const s = e.buffered.length; return (s ? e.buffered.end(s - 1) : t.edge) - this.currentTime; }
    destroy() { this.unregisterListeners(), this.onMediaDetaching(), this.hls = null; }
    registerListeners() { const { hls: e } = this; e && (e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(S.ERROR, this.onError, this)); }
    unregisterListeners() { const { hls: e } = this; e && (e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(S.ERROR, this.onError, this)); }
    onMediaAttached(e, t) { this.media = t.media, this.media.addEventListener("timeupdate", this.onTimeupdate); }
    onMediaDetaching() { this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media = null); }
    onManifestLoading() { this._latency = null, this.stallCount = 0; }
    onLevelUpdated(e, { details: t }) { t.advanced && this.onTimeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate); }
    onError(e, t) { var s; t.details === k.BUFFER_STALLED_ERROR && (this.stallCount++, this.hls && (s = this.levelDetails) != null && s.live && this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency")); }
    changeMediaPlaybackRate(e, t) { var s, n; e.playbackRate !== t && ((s = this.hls) == null || s.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${(n = this.targetLatency) == null ? void 0 : n.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`), e.playbackRate = t); }
    estimateLiveEdge() { const e = this.levelDetails; return e === null ? null : e.edge + e.age; }
    computeLatency() { const e = this.estimateLiveEdge(); return e === null ? null : e - this.currentTime; }
}
class TA extends od {
    constructor(e, t) { super(e, "level-controller"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners(); }
    _registerListeners() { const { hls: e } = this; e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(S.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(S.FRAG_BUFFERED, this.onFragBuffered, this), e.on(S.ERROR, this.onError, this); }
    _unregisterListeners() { const { hls: e } = this; e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered, this), e.off(S.ERROR, this.onError, this); }
    destroy() { this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy(); }
    stopLoad() { this._levels.forEach(t => { t.loadError = 0, t.fragmentError = 0; }), super.stopLoad(); }
    resetLevels() { this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1; }
    onManifestLoading(e, t) { this.resetLevels(); }
    onManifestLoaded(e, t) { const s = this.hls.config.preferManagedMediaSource, n = [], r = {}, a = {}; let o = !1, l = !1, u = !1; t.levels.forEach(c => { const d = c.attrs; let { audioCodec: h, videoCodec: f } = c; h && (c.audioCodec = h = Qa(h, s) || void 0), f && (f = c.videoCodec = nT(f)); const { width: m, height: p, unknownCodecs: x } = c, y = (x == null ? void 0 : x.length) || 0; if (o || (o = !!(m && p)), l || (l = !!f), u || (u = !!h), y || h && !this.isAudioSupported(h) || f && !this.isVideoSupported(f)) {
        this.log(`Some or all CODECS not supported "${d.CODECS}"`);
        return;
    } const { CODECS: v, "FRAME-RATE": E, "HDCP-LEVEL": T, "PATHWAY-ID": L, RESOLUTION: w, "VIDEO-RANGE": I } = d, _ = `${`${L || "."}-`}${c.bitrate}-${w}-${E}-${v}-${I}-${T}`; if (r[_])
        if (r[_].uri !== c.url && !c.attrs["PATHWAY-ID"]) {
            const A = a[_] += 1;
            c.attrs["PATHWAY-ID"] = new Array(A + 1).join(".");
            const D = this.createLevel(c);
            r[_] = D, n.push(D);
        }
        else
            r[_].addGroupId("audio", d.AUDIO), r[_].addGroupId("text", d.SUBTITLES);
    else {
        const A = this.createLevel(c);
        r[_] = A, a[_] = 1, n.push(A);
    } }), this.filterAndSortMediaOptions(n, t, o, l, u); }
    createLevel(e) { const t = new or(e), s = e.supplemental; if (s != null && s.videoCodec && !this.isVideoSupported(s.videoCodec)) {
        const n = new Error(`SUPPLEMENTAL-CODECS not supported "${s.videoCodec}"`);
        this.log(n.message), t.supportedResult = Vg(n, []);
    } return t; }
    isAudioSupported(e) { return rr(e, "audio", this.hls.config.preferManagedMediaSource); }
    isVideoSupported(e) { return rr(e, "video", this.hls.config.preferManagedMediaSource); }
    filterAndSortMediaOptions(e, t, s, n, r) { var a; let o = [], l = [], u = e; const c = ((a = t.stats) == null ? void 0 : a.parsing) || {}; if ((s || n) && r && (u = u.filter(({ videoCodec: v, videoRange: E, width: T, height: L }) => (!!v || !!(T && L)) && mT(E))), u.length === 0) {
        Promise.resolve().then(() => { if (this.hls) {
            let v = "no level with compatible codecs found in manifest", E = v;
            t.levels.length && (E = `one or more CODECS in variant not supported: ${fe(t.levels.map(L => L.attrs.CODECS).filter((L, w, I) => I.indexOf(L) === w))}`, this.warn(E), v += ` (${E})`);
            const T = new Error(v);
            this.hls.trigger(S.ERROR, { type: q.MEDIA_ERROR, details: k.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: !0, url: t.url, error: T, reason: E });
        } }), c.end = performance.now();
        return;
    } t.audioTracks && (o = t.audioTracks.filter(v => !v.audioCodec || this.isAudioSupported(v.audioCodec)), qf(o)), t.subtitles && (l = t.subtitles, qf(l)); const d = u.slice(0); u.sort((v, E) => { if (v.attrs["HDCP-LEVEL"] !== E.attrs["HDCP-LEVEL"])
        return (v.attrs["HDCP-LEVEL"] || "") > (E.attrs["HDCP-LEVEL"] || "") ? 1 : -1; if (s && v.height !== E.height)
        return v.height - E.height; if (v.frameRate !== E.frameRate)
        return v.frameRate - E.frameRate; if (v.videoRange !== E.videoRange)
        return Xa.indexOf(v.videoRange) - Xa.indexOf(E.videoRange); if (v.videoCodec !== E.videoCodec) {
        const T = Bh(v.videoCodec), L = Bh(E.videoCodec);
        if (T !== L)
            return L - T;
    } if (v.uri === E.uri && v.codecSet !== E.codecSet) {
        const T = qa(v.codecSet), L = qa(E.codecSet);
        if (T !== L)
            return L - T;
    } return v.averageBitrate !== E.averageBitrate ? v.averageBitrate - E.averageBitrate : 0; }); let h = d[0]; if (this.steering && (u = this.steering.filterParsedLevels(u), u.length !== d.length)) {
        for (let v = 0; v < d.length; v++)
            if (d[v].pathwayId === u[0].pathwayId) {
                h = d[v];
                break;
            }
    } this._levels = u; for (let v = 0; v < u.length; v++)
        if (u[v] === h) {
            var f;
            this._firstLevel = v;
            const E = h.bitrate, T = this.hls.bandwidthEstimate;
            if (this.log(`manifest loaded, ${u.length} level(s) found, first bitrate: ${E}`), ((f = this.hls.userConfig) == null ? void 0 : f.abrEwmaDefaultEstimate) === void 0) {
                const L = Math.min(E, this.hls.config.abrEwmaDefaultEstimateMax);
                L > T && T === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = L);
            }
            break;
        } const m = r && !n, p = this.hls.config, x = !!(p.audioStreamController && p.audioTrackController), y = { levels: u, audioTracks: o, subtitleTracks: l, sessionData: t.sessionData, sessionKeys: t.sessionKeys, firstLevel: this._firstLevel, stats: t.stats, audio: r, video: n, altAudio: x && !m && o.some(v => !!v.url) }; c.end = performance.now(), this.hls.trigger(S.MANIFEST_PARSED, y); }
    get levels() { return this._levels.length === 0 ? null : this._levels; }
    get loadLevelObj() { return this.currentLevel; }
    get level() { return this.currentLevelIndex; }
    set level(e) { const t = this._levels; if (t.length === 0)
        return; if (e < 0 || e >= t.length) {
        const c = new Error("invalid level idx"), d = e < 0;
        if (this.hls.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.LEVEL_SWITCH_ERROR, level: e, fatal: d, error: c, reason: c.message }), d)
            return;
        e = Math.min(e, t.length - 1);
    } const s = this.currentLevelIndex, n = this.currentLevel, r = n ? n.attrs["PATHWAY-ID"] : void 0, a = t[e], o = a.attrs["PATHWAY-ID"]; if (this.currentLevelIndex = e, this.currentLevel = a, s === e && n && r === o)
        return; this.log(`Switching to level ${e} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${o ? " with Pathway " + o : ""} from level ${s}${r ? " with Pathway " + r : ""}`); const l = { level: e, attrs: a.attrs, details: a.details, bitrate: a.bitrate, averageBitrate: a.averageBitrate, maxBitrate: a.maxBitrate, realBitrate: a.realBitrate, width: a.width, height: a.height, codecSet: a.codecSet, audioCodec: a.audioCodec, videoCodec: a.videoCodec, audioGroups: a.audioGroups, subtitleGroups: a.subtitleGroups, loaded: a.loaded, loadError: a.loadError, fragmentError: a.fragmentError, name: a.name, id: a.id, uri: a.uri, url: a.url, urlId: 0, audioGroupIds: a.audioGroupIds, textGroupIds: a.textGroupIds }; this.hls.trigger(S.LEVEL_SWITCHING, l); const u = a.details; if (!u || u.live) {
        const c = this.switchParams(a.uri, n == null ? void 0 : n.details, u);
        this.loadPlaylist(c);
    } }
    get manualLevel() { return this.manualLevelIndex; }
    set manualLevel(e) { this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e); }
    get firstLevel() { return this._firstLevel; }
    set firstLevel(e) { this._firstLevel = e; }
    get startLevel() { if (this._startLevel === void 0) {
        const e = this.hls.config.startLevel;
        return e !== void 0 ? e : this.hls.firstAutoLevel;
    } return this._startLevel; }
    set startLevel(e) { this._startLevel = e; }
    get pathways() { return this.steering ? this.steering.pathways() : []; }
    get pathwayPriority() { return this.steering ? this.steering.pathwayPriority : null; }
    set pathwayPriority(e) { if (this.steering) {
        const t = this.steering.pathways(), s = e.filter(n => t.indexOf(n) !== -1);
        if (e.length < 1) {
            this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
            return;
        }
        this.steering.pathwayPriority = s;
    } }
    onError(e, t) { t.fatal || !t.context || t.context.type === se.LEVEL && t.context.level === this.level && this.checkRetry(t); }
    onFragBuffered(e, { frag: t }) { if (t !== void 0 && t.type === z.MAIN) {
        const s = t.elementaryStreams;
        if (!Object.keys(s).some(r => !!s[r]))
            return;
        const n = this._levels[t.level];
        n != null && n.loadError && (this.log(`Resetting level error count of ${n.loadError} on frag buffered`), n.loadError = 0);
    } }
    onLevelLoaded(e, t) { var s; const { level: n, details: r } = t, a = t.levelInfo; if (!a) {
        var o;
        this.warn(`Invalid level index ${n}`), (o = t.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
        return;
    } if (a === this.currentLevel || t.withoutMultiVariant) {
        a.fragmentError === 0 && (a.loadError = 0);
        let l = a.details;
        l === t.details && l.advanced && (l = void 0), this.playlistLoaded(n, t, l);
    }
    else
        (s = t.deliveryDirectives) != null && s.skip && (r.deltaUpdateFailed = !0); }
    loadPlaylist(e) { super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e); }
    loadingPlaylist(e, t) { super.loadingPlaylist(e, t); const s = this.getUrlWithDirectives(e.uri, t), n = this.currentLevelIndex, r = e.attrs["PATHWAY-ID"], a = e.details, o = a == null ? void 0 : a.age; this.log(`Loading level index ${n}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${r ? " Pathway " + r : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${s}`), this.hls.trigger(S.LEVEL_LOADING, { url: s, level: n, levelInfo: e, pathwayId: e.attrs["PATHWAY-ID"], id: 0, deliveryDirectives: t || null }); }
    get nextLoadLevel() { return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel; }
    set nextLoadLevel(e) { this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e); }
    removeLevel(e) { var t; if (this._levels.length === 1)
        return; const s = this._levels.filter((r, a) => a !== e ? !0 : (this.steering && this.steering.removeLevel(r), r === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, r.details && r.details.fragments.forEach(o => o.level = -1)), !1)); cp(s), this._levels = s, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex); const n = s.length - 1; this._firstLevel = Math.min(this._firstLevel, n), this._startLevel && (this._startLevel = Math.min(this._startLevel, n)), this.hls.trigger(S.LEVELS_UPDATED, { levels: s }); }
    onLevelsUpdated(e, { levels: t }) { this._levels = t; }
    checkMaxAutoUpdated() { const { autoLevelCapping: e, maxAutoLevel: t, maxHdcpLevel: s } = this.hls; this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(S.MAX_AUTO_LEVEL_UPDATED, { autoLevelCapping: e, levels: this.levels, maxAutoLevel: t, minAutoLevel: this.hls.minAutoLevel, maxHdcpLevel: s })); }
}
function qf(i) { const e = {}; i.forEach(t => { const s = t.groupId || ""; t.id = e[s] = e[s] || 0, e[s]++; }); }
function ry() { return self.SourceBuffer || self.WebKitSourceBuffer; }
function ay() { if (!Vi())
    return !1; const e = ry(); return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function"; }
function LA() { if (!ay())
    return !1; const i = Vi(); return typeof (i == null ? void 0 : i.isTypeSupported) == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some(e => i.isTypeSupported(ar(e, "video"))) || ["mp4a.40.2", "fLaC"].some(e => i.isTypeSupported(ar(e, "audio")))); }
function IA() { var i; const e = ry(); return typeof (e == null || (i = e.prototype) == null ? void 0 : i.changeType) == "function"; }
const AA = 100;
class RA extends Jc {
    constructor(e, t, s) { super(e, t, s, "stream-controller", z.MAIN), this.audioCodecSwap = !1, this.level = -1, this._forceStartLoad = !1, this._hasEnoughToStart = !1, this.altAudio = 0, this.audioOnly = !1, this.fragPlaying = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this.onMediaPlaying = () => { this.tick(); }, this.onMediaSeeked = () => { const n = this.media, r = n ? n.currentTime : null; if (r === null || !G(r) || (this.log(`Media seeked to ${r.toFixed(3)}`), !this.getBufferedFrag(r)))
        return; const a = this.getFwdBufferInfoAtPos(n, r, z.MAIN, 0); if (a === null || a.len === 0) {
        this.warn(`Main forward buffer length at ${r} on "seeked" event ${a ? a.len : "empty"})`);
        return;
    } this.tick(); }, this.registerListeners(); }
    registerListeners() { super.registerListeners(); const { hls: e } = this; e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.LEVEL_LOADING, this.onLevelLoading, this), e.on(S.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(S.BUFFER_CREATED, this.onBufferCreated, this), e.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(S.FRAG_BUFFERED, this.onFragBuffered, this); }
    unregisterListeners() { super.unregisterListeners(); const { hls: e } = this; e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(S.BUFFER_CREATED, this.onBufferCreated, this), e.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered, this); }
    onHandlerDestroying() { this.onMediaPlaying = this.onMediaSeeked = null, this.unregisterListeners(), super.onHandlerDestroying(); }
    startLoad(e, t) { if (this.levels) {
        const { lastCurrentTime: s, hls: n } = this;
        if (this.stopLoad(), this.setInterval(AA), this.level = -1, !this.startFragRequested) {
            let r = n.startLevel;
            r === -1 && (n.config.testBandwidth && this.levels.length > 1 ? (r = 0, this.bitrateTest = !0) : r = n.firstAutoLevel), n.nextLoadLevel = r, this.level = n.loadLevel, this._hasEnoughToStart = !!t;
        }
        s > 0 && e === -1 && !t && (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s), this.state = N.IDLE, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
    }
    else
        this._forceStartLoad = !0, this.state = N.STOPPED; }
    stopLoad() { this._forceStartLoad = !1, super.stopLoad(); }
    doTick() { switch (this.state) {
        case N.WAITING_LEVEL: {
            const { levels: e, level: t } = this, s = e == null ? void 0 : e[t], n = s == null ? void 0 : s.details;
            if (n && (!n.live || this.levelLastLoaded === s && !this.waitForLive(s))) {
                if (this.waitForCdnTuneIn(n))
                    break;
                this.state = N.IDLE;
                break;
            }
            else if (this.hls.nextLoadLevel !== this.level) {
                this.state = N.IDLE;
                break;
            }
            break;
        }
        case N.FRAG_LOADING_WAITING_RETRY:
            this.checkRetryDate();
            break;
    } this.state === N.IDLE && this.doTickIdle(), this.onTickEnd(); }
    onTickEnd() { var e; super.onTickEnd(), (e = this.media) != null && e.readyState && this.media.seeking === !1 && (this.lastCurrentTime = this.media.currentTime), this.checkFragmentChanged(); }
    doTickIdle() { const { hls: e, levelLastLoaded: t, levels: s, media: n } = this; if (t === null || !n && !this.primaryPrefetch && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
        return; const r = this.buffering ? e.nextLoadLevel : e.loadLevel; if (!(s != null && s[r]))
        return; const a = s[r], o = this.getMainFwdBufferInfo(); if (o === null)
        return; const l = this.getLevelDetails(); if (l && this._streamEnded(o, l)) {
        const p = {};
        this.altAudio === 2 && (p.type = "video"), this.hls.trigger(S.BUFFER_EOS, p), this.state = N.ENDED;
        return;
    } if (!this.buffering)
        return; e.loadLevel !== r && e.manualLevel === -1 && this.log(`Adapting to level ${r} from level ${this.level}`), this.level = e.nextLoadLevel = r; const u = a.details; if (!u || this.state === N.WAITING_LEVEL || this.waitForLive(a)) {
        this.level = r, this.state = N.WAITING_LEVEL, this.startFragRequested = !1;
        return;
    } const c = o.len, d = this.getMaxBufferLength(a.maxBitrate); if (c >= d)
        return; this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null); const h = this.backtrackFragment ? this.backtrackFragment.start : o.end; let f = this.getNextFragment(h, u); if (this.couldBacktrack && !this.fragPrevious && f && be(f) && this.fragmentTracker.getState(f) !== Pe.OK) {
        var m;
        const x = ((m = this.backtrackFragment) != null ? m : f).sn - u.startSN, y = u.fragments[x - 1];
        y && f.cc === y.cc && (f = y, this.fragmentTracker.removeFragment(y));
    }
    else
        this.backtrackFragment && o.len && (this.backtrackFragment = null); if (f && this.isLoopLoading(f, h)) {
        if (!f.gap) {
            const x = this.audioOnly && !this.altAudio ? he.AUDIO : he.VIDEO, y = (x === he.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
            y && this.afterBufferFlushed(y, x, z.MAIN);
        }
        f = this.getNextFragmentLoopLoading(f, u, o, z.MAIN, d);
    } f && (f.initSegment && !f.initSegment.data && !this.bitrateTest && (f = f.initSegment), this.loadFragment(f, a, h)); }
    loadFragment(e, t, s) { const n = this.fragmentTracker.getState(e); n === Pe.NOT_LOADED || n === Pe.PARTIAL ? be(e) ? this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : super.loadFragment(e, t, s) : this._loadInitSegment(e, t) : this.clearTrackerIfNeeded(e); }
    getBufferedFrag(e) { return this.fragmentTracker.getBufferedFrag(e, z.MAIN); }
    followingBufferedFrag(e) { return e ? this.getBufferedFrag(e.end + .5) : null; }
    immediateLevelSwitch() { this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY); }
    nextLevelSwitch() { const { levels: e, media: t } = this; if (t != null && t.readyState) {
        let s;
        const n = this.getAppendedFrag(t.currentTime);
        n && n.start > 1 && this.flushMainBuffer(0, n.start - 1);
        const r = this.getLevelDetails();
        if (r != null && r.live) {
            const o = this.getMainFwdBufferInfo();
            if (!o || o.len < r.targetduration * 2)
                return;
        }
        if (!t.paused && e) {
            const o = this.hls.nextLoadLevel, l = e[o], u = this.fragLastKbps;
            u && this.fragCurrent ? s = this.fragCurrent.duration * l.maxBitrate / (1e3 * u) + 1 : s = 0;
        }
        else
            s = 0;
        const a = this.getBufferedFrag(t.currentTime + s);
        if (a) {
            const o = this.followingBufferedFrag(a);
            if (o) {
                this.abortCurrentFrag();
                const l = o.maxStartPTS ? o.maxStartPTS : o.start, u = o.duration, c = Math.max(a.end, l + Math.min(Math.max(u - this.config.maxFragLookUpTolerance, u * (this.couldBacktrack ? .5 : .125)), u * (this.couldBacktrack ? .75 : .25)));
                this.flushMainBuffer(c, Number.POSITIVE_INFINITY);
            }
        }
    } }
    abortCurrentFrag() { const e = this.fragCurrent; switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
        case N.KEY_LOADING:
        case N.FRAG_LOADING:
        case N.FRAG_LOADING_WAITING_RETRY:
        case N.PARSING:
        case N.PARSED:
            this.state = N.IDLE;
            break;
    } this.nextLoadPosition = this.getLoadPosition(); }
    flushMainBuffer(e, t) { super.flushMainBuffer(e, t, this.altAudio === 2 ? "video" : null); }
    onMediaAttached(e, t) { super.onMediaAttached(e, t); const s = t.media; Xe(s, "playing", this.onMediaPlaying), Xe(s, "seeked", this.onMediaSeeked); }
    onMediaDetaching(e, t) { const { media: s } = this; s && (nt(s, "playing", this.onMediaPlaying), nt(s, "seeked", this.onMediaSeeked)), this.videoBuffer = null, this.fragPlaying = null, super.onMediaDetaching(e, t), !t.transferMedia && (this._hasEnoughToStart = !1); }
    onManifestLoading() { super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(S.BUFFER_RESET, void 0), this.couldBacktrack = !1, this.fragLastKbps = 0, this.fragPlaying = this.backtrackFragment = null, this.altAudio = 0, this.audioOnly = !1; }
    onManifestParsed(e, t) { let s = !1, n = !1; for (let r = 0; r < t.levels.length; r++) {
        const a = t.levels[r].audioCodec;
        a && (s = s || a.indexOf("mp4a.40.2") !== -1, n = n || a.indexOf("mp4a.40.5") !== -1);
    } this.audioCodecSwitch = s && n && !IA(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1; }
    onLevelLoading(e, t) { const { levels: s } = this; if (!s || this.state !== N.IDLE)
        return; const n = t.levelInfo; (!n.details || n.details.live && (this.levelLastLoaded !== n || n.details.expired) || this.waitForCdnTuneIn(n.details)) && (this.state = N.WAITING_LEVEL); }
    onLevelLoaded(e, t) { var s; const { levels: n, startFragRequested: r } = this, a = t.level, o = t.details, l = o.totalduration; if (!n) {
        this.warn(`Levels were reset while loading level ${a}`);
        return;
    } this.log(`Level ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn ? `[part-${o.lastPartSn}-${o.lastPartIndex}]` : ""}, cc [${o.startCC}, ${o.endCC}] duration:${l}`); const u = t.levelInfo, c = this.fragCurrent; c && (this.state === N.FRAG_LOADING || this.state === N.FRAG_LOADING_WAITING_RETRY) && c.level !== t.level && c.loader && this.abortCurrentFrag(); let d = 0; if (o.live || (s = u.details) != null && s.live) {
        var h;
        if (this.checkLiveUpdate(o), o.deltaUpdateFailed)
            return;
        d = this.alignPlaylists(o, u.details, (h = this.levelLastLoaded) == null ? void 0 : h.details);
    } if (u.details = o, this.levelLastLoaded = u, r || this.setStartPosition(o, d), this.hls.trigger(S.LEVEL_UPDATED, { details: o, level: a }), this.state === N.WAITING_LEVEL) {
        if (this.waitForCdnTuneIn(o))
            return;
        this.state = N.IDLE;
    } r && o.live && this.synchronizeToLiveEdge(o), this.tick(); }
    synchronizeToLiveEdge(e) { const { config: t, media: s } = this; if (!s)
        return; const n = this.hls.liveSyncPosition, r = this.getLoadPosition(), a = e.fragmentStart, o = e.edge, l = r >= a - t.maxFragLookUpTolerance && r <= o; if (n !== null && s.duration > n && (r < n || !l)) {
        const c = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
        if ((!l && s.readyState < 4 || r < o - c) && (this._hasEnoughToStart || (this.nextLoadPosition = n), s.readyState))
            if (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${n.toFixed(3)}`), this.config.liveSyncMode === "buffered") {
                var u;
                const d = Z.bufferInfo(s, n, 0);
                if (!((u = d.buffered) != null && u.length)) {
                    s.currentTime = n;
                    return;
                }
                if (d.start <= r) {
                    s.currentTime = n;
                    return;
                }
                const { nextStart: f } = Z.bufferedInfo(d.buffered, r, 0);
                f && (s.currentTime = f);
            }
            else
                s.currentTime = n;
    } }
    _handleFragmentLoadProgress(e) { var t; const s = e.frag, { part: n, payload: r } = e, { levels: a } = this; if (!a) {
        this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
        return;
    } const o = a[s.level]; if (!o) {
        this.warn(`Level ${s.level} not found on progress`);
        return;
    } const l = o.details; if (!l) {
        this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
        return;
    } const u = o.videoCodec, c = l.PTSKnown || !l.live, d = (t = s.initSegment) == null ? void 0 : t.data, h = this._getAudioCodec(o), f = this.transmuxer = this.transmuxer || new Dp(this.hls, z.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), m = n ? n.index : -1, p = m !== -1, x = new Qc(s.level, s.sn, s.stats.chunkCount, r.byteLength, m, p), y = this.initPTS[s.cc]; f.push(r, d, h, u, s, n, l.totalduration, c, x, y); }
    onAudioTrackSwitching(e, t) { const s = this.hls, n = this.altAudio !== 0; if (Za(t.url, s))
        this.altAudio = 1;
    else {
        if (this.mediaBuffer !== this.media) {
            this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
            const a = this.fragCurrent;
            a && (this.log("Switching to main audio track, cancel main fragment load"), a.abortRequests(), this.fragmentTracker.removeFragment(a)), this.resetTransmuxer(), this.resetLoadingState();
        }
        else
            this.audioOnly && this.resetTransmuxer();
        if (n) {
            this.altAudio = 0, this.fragmentTracker.removeAllFragments(), s.once(S.BUFFER_FLUSHED, () => { this.hls && this.hls.trigger(S.AUDIO_TRACK_SWITCHED, t); }), s.trigger(S.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: null });
            return;
        }
        s.trigger(S.AUDIO_TRACK_SWITCHED, t);
    } }
    onAudioTrackSwitched(e, t) { const s = Za(t.url, this.hls); if (s) {
        const n = this.videoBuffer;
        n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n);
    } this.altAudio = s ? 2 : 0, this.tick(); }
    onBufferCreated(e, t) { const s = t.tracks; let n, r, a = !1; for (const o in s) {
        const l = s[o];
        if (l.id === "main") {
            if (r = o, n = l, o === "video") {
                const u = s[o];
                u && (this.videoBuffer = u.buffer);
            }
        }
        else
            a = !0;
    } a && n ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = n.buffer) : this.mediaBuffer = this.media; }
    onFragBuffered(e, t) { const { frag: s, part: n } = t, r = s.type === z.MAIN; if (r) {
        if (this.fragContextChanged(s)) {
            this.warn(`Fragment ${s.sn}${n ? " p: " + n.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === N.PARSED && (this.state = N.IDLE);
            return;
        }
        const o = n ? n.stats : s.stats;
        this.fragLastKbps = Math.round(8 * o.total / (o.buffering.end - o.loading.first)), be(s) && (this.fragPrevious = s), this.fragBufferedComplete(s, n);
    } const a = this.media; a && (!this._hasEnoughToStart && Z.getBuffered(a).length && (this._hasEnoughToStart = !0, this.seekToStartPos()), r && this.tick()); }
    get hasEnoughToStart() { return this._hasEnoughToStart; }
    onError(e, t) { var s; if (t.fatal) {
        this.state = N.ERROR;
        return;
    } switch (t.details) {
        case k.FRAG_GAP:
        case k.FRAG_PARSING_ERROR:
        case k.FRAG_DECRYPT_ERROR:
        case k.FRAG_LOAD_ERROR:
        case k.FRAG_LOAD_TIMEOUT:
        case k.KEY_LOAD_ERROR:
        case k.KEY_LOAD_TIMEOUT:
            this.onFragmentOrKeyLoadError(z.MAIN, t);
            break;
        case k.LEVEL_LOAD_ERROR:
        case k.LEVEL_LOAD_TIMEOUT:
        case k.LEVEL_PARSING_ERROR:
            !t.levelRetry && this.state === N.WAITING_LEVEL && ((s = t.context) == null ? void 0 : s.type) === se.LEVEL && (this.state = N.IDLE);
            break;
        case k.BUFFER_ADD_CODEC_ERROR:
        case k.BUFFER_APPEND_ERROR:
            if (t.parent !== "main")
                return;
            this.reduceLengthAndFlushBuffer(t) && this.resetLoadingState();
            break;
        case k.BUFFER_FULL_ERROR:
            if (t.parent !== "main")
                return;
            this.reduceLengthAndFlushBuffer(t) && (!this.config.interstitialsController && this.config.assetPlayerId ? this._hasEnoughToStart = !0 : this.flushMainBuffer(0, Number.POSITIVE_INFINITY));
            break;
        case k.INTERNAL_EXCEPTION:
            this.recoverWorkerError(t);
            break;
    } }
    onFragLoadEmergencyAborted() { this.state = N.IDLE, this._hasEnoughToStart || (this.startFragRequested = !1, this.nextLoadPosition = this.lastCurrentTime), this.tickImmediate(); }
    onBufferFlushed(e, { type: t }) { if (t !== he.AUDIO || !this.altAudio) {
        const s = (t === he.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        s && (this.afterBufferFlushed(s, t, z.MAIN), this.tick());
    } }
    onLevelsUpdated(e, t) { this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level, this.level === -1 && this.resetWhenMissingContext(this.fragCurrent)), this.levels = t.levels; }
    swapAudioCodec() { this.audioCodecSwap = !this.audioCodecSwap; }
    seekToStartPos() { const { media: e } = this; if (!e)
        return; const t = e.currentTime; let s = this.startPosition; if (s >= 0 && t < s) {
        if (e.seeking) {
            this.log(`could not seek to ${s}, already seeking at ${t}`);
            return;
        }
        const n = this.timelineOffset;
        n && s && (s += n);
        const r = this.getLevelDetails(), a = Z.getBuffered(e), o = a.length ? a.start(0) : 0, l = o - s, u = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
        (this.config.startOnSegmentBoundary || l > 0 && (l < u || this.loadingParts && l < 2 * ((r == null ? void 0 : r.partTarget) || 0))) && (this.log(`adjusting start position by ${l} to match buffer start`), s += l, this.startPosition = s), t < s && (this.log(`seek to target start position ${s} from current time ${t} buffer start ${o}`), e.currentTime = s);
    } }
    _getAudioCodec(e) { let t = this.config.defaultAudioCodec || e.audioCodec; return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t; }
    _loadBitrateTestFrag(e, t) { e.bitrateTest = !0, this._doFragLoad(e, t).then(s => { const { hls: n } = this, r = s == null ? void 0 : s.frag; if (!r || this.fragContextChanged(r))
        return; t.fragmentError = 0, this.state = N.IDLE, this.startFragRequested = !1, this.bitrateTest = !1; const a = r.stats; a.parsing.start = a.parsing.end = a.buffering.start = a.buffering.end = self.performance.now(), n.trigger(S.FRAG_LOADED, s), r.bitrateTest = !1; }).catch(s => { this.state === N.STOPPED || this.state === N.ERROR || (this.warn(s), this.resetFragmentLoading(e)); }); }
    _handleTransmuxComplete(e) { const t = this.playlistType, { hls: s } = this, { remuxResult: n, chunkMeta: r } = e, a = this.getCurrentContext(r); if (!a) {
        this.resetWhenMissingContext(r);
        return;
    } const { frag: o, part: l, level: u } = a, { video: c, text: d, id3: h, initSegment: f } = n, { details: m } = u, p = this.altAudio ? void 0 : n.audio; if (this.fragContextChanged(o)) {
        this.fragmentTracker.removeFragment(o);
        return;
    } if (this.state = N.PARSING, f) {
        const x = f.tracks;
        if (x) {
            const T = o.initSegment || o;
            if (this.unhandledEncryptionError(f, o))
                return;
            this._bufferInitSegment(u, x, T, r), s.trigger(S.FRAG_PARSING_INIT_SEGMENT, { frag: T, id: t, tracks: x });
        }
        const y = f.initPTS, v = f.timescale, E = this.initPTS[o.cc];
        if (G(y) && (!E || E.baseTime !== y || E.timescale !== v)) {
            const T = f.trackId;
            this.initPTS[o.cc] = { baseTime: y, timescale: v, trackId: T }, s.trigger(S.INIT_PTS_FOUND, { frag: o, id: t, initPTS: y, timescale: v, trackId: T });
        }
    } if (c && m) {
        p && c.type === "audiovideo" && this.logMuxedErr(o);
        const x = m.fragments[o.sn - 1 - m.startSN], y = o.sn === m.startSN, v = !x || o.cc > x.cc;
        if (n.independent !== !1) {
            const { startPTS: E, endPTS: T, startDTS: L, endDTS: w } = c;
            if (l)
                l.elementaryStreams[c.type] = { startPTS: E, endPTS: T, startDTS: L, endDTS: w };
            else if (c.firstKeyFrame && c.independent && r.id === 1 && !v && (this.couldBacktrack = !0), c.dropped && c.independent) {
                const I = this.getMainFwdBufferInfo(), R = (I ? I.end : this.getLoadPosition()) + this.config.maxBufferHole, _ = c.firstKeyFramePTS ? c.firstKeyFramePTS : E;
                if (!y && R < _ - this.config.maxBufferHole && !v) {
                    this.backtrack(o);
                    return;
                }
                else
                    v && (o.gap = !0);
                o.setElementaryStreamInfo(c.type, o.start, T, o.start, w, !0);
            }
            else
                y && E - (m.appliedTimelineOffset || 0) > Ta && (o.gap = !0);
            o.setElementaryStreamInfo(c.type, E, T, L, w), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(c, o, l, r, y || v);
        }
        else if (y || v)
            o.gap = !0;
        else {
            this.backtrack(o);
            return;
        }
    } if (p) {
        const { startPTS: x, endPTS: y, startDTS: v, endDTS: E } = p;
        l && (l.elementaryStreams[he.AUDIO] = { startPTS: x, endPTS: y, startDTS: v, endDTS: E }), o.setElementaryStreamInfo(he.AUDIO, x, y, v, E), this.bufferFragmentData(p, o, l, r);
    } if (m && h != null && h.samples.length) {
        const x = { id: t, frag: o, details: m, samples: h.samples };
        s.trigger(S.FRAG_PARSING_METADATA, x);
    } if (m && d) {
        const x = { id: t, frag: o, details: m, samples: d.samples };
        s.trigger(S.FRAG_PARSING_USERDATA, x);
    } }
    logMuxedErr(e) { this.warn(`${be(e) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e.url}`); }
    _bufferInitSegment(e, t, s, n) { if (this.state !== N.PARSING)
        return; this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && (delete t.audio, t.audiovideo && this.logMuxedErr(s)); const { audio: r, video: a, audiovideo: o } = t; if (r) {
        const u = e.audioCodec;
        let c = ga(r.codec, u);
        c === "mp4a" && (c = "mp4a.40.5");
        const d = navigator.userAgent.toLowerCase();
        if (this.audioCodecSwitch) {
            c && (c.indexOf("mp4a.40.5") !== -1 ? c = "mp4a.40.2" : c = "mp4a.40.5");
            const h = r.metadata;
            h && "channelCount" in h && (h.channelCount || 1) !== 1 && d.indexOf("firefox") === -1 && (c = "mp4a.40.5");
        }
        c && c.indexOf("mp4a.40.5") !== -1 && d.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (c = "mp4a.40.2", this.log(`Android: force audio codec to ${c}`)), u && u !== c && this.log(`Swapping manifest audio codec "${u}" for "${c}"`), r.levelCodec = c, r.id = z.MAIN, this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${c || ""}/${u || ""}/${r.codec}]`), delete t.audiovideo;
    } if (a) {
        a.levelCodec = e.videoCodec, a.id = z.MAIN;
        const u = a.codec;
        if ((u == null ? void 0 : u.length) === 4)
            switch (u) {
                case "hvc1":
                case "hev1":
                    a.codec = "hvc1.1.6.L120.90";
                    break;
                case "av01":
                    a.codec = "av01.0.04M.08";
                    break;
                case "avc1":
                    a.codec = "avc1.42e01e";
                    break;
            }
        this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${u}]${a.codec !== u ? " parsed-corrected=" + a.codec : ""}${a.supplemental ? " supplemental=" + a.supplemental : ""}`), delete t.audiovideo;
    } o && (this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), delete t.video, delete t.audio); const l = Object.keys(t); if (l.length) {
        if (this.hls.trigger(S.BUFFER_CODECS, t), !this.hls)
            return;
        l.forEach(u => { const d = t[u].initSegment; d != null && d.byteLength && this.hls.trigger(S.BUFFER_APPENDING, { type: u, data: d, frag: s, part: null, chunkMeta: n, parent: s.type }); });
    } this.tickImmediate(); }
    getMainFwdBufferInfo() { const e = this.mediaBuffer && this.altAudio === 2 ? this.mediaBuffer : this.media; return this.getFwdBufferInfo(e, z.MAIN); }
    get maxBufferLength() { const { levels: e, level: t } = this, s = e == null ? void 0 : e[t]; return s ? this.getMaxBufferLength(s.maxBitrate) : this.config.maxBufferLength; }
    backtrack(e) { this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = N.IDLE; }
    checkFragmentChanged() { const e = this.media; let t = null; if (e && e.readyState > 1 && e.seeking === !1) {
        const s = e.currentTime;
        if (Z.isBuffered(e, s) ? t = this.getAppendedFrag(s) : Z.isBuffered(e, s + .1) && (t = this.getAppendedFrag(s + .1)), t) {
            this.backtrackFragment = null;
            const n = this.fragPlaying, r = t.level;
            (!n || t.sn !== n.sn || n.level !== r) && (this.fragPlaying = t, this.hls.trigger(S.FRAG_CHANGED, { frag: t }), (!n || n.level !== r) && this.hls.trigger(S.LEVEL_SWITCHED, { level: r }));
        }
    } }
    get nextLevel() { const e = this.nextBufferedFrag; return e ? e.level : -1; }
    get currentFrag() { var e; if (this.fragPlaying)
        return this.fragPlaying; const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime; return G(t) ? this.getAppendedFrag(t) : null; }
    get currentProgramDateTime() { var e; const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime; if (G(t)) {
        const s = this.getLevelDetails(), n = this.currentFrag || (s ? ms(null, s.fragments, t) : null);
        if (n) {
            const r = n.programDateTime;
            if (r !== null) {
                const a = r + (t - n.start) * 1e3;
                return new Date(a);
            }
        }
    } return null; }
    get currentLevel() { const e = this.currentFrag; return e ? e.level : -1; }
    get nextBufferedFrag() { const e = this.currentFrag; return e ? this.followingBufferedFrag(e) : null; }
    get forceStartLoad() { return this._forceStartLoad; }
}
class wA extends _t {
    constructor(e, t) { super("key-loader", t), this.config = void 0, this.keyIdToKeyInfo = {}, this.emeController = null, this.config = e; }
    abort(e) { for (const s in this.keyIdToKeyInfo) {
        const n = this.keyIdToKeyInfo[s].loader;
        if (n) {
            var t;
            if (e && e !== ((t = n.context) == null ? void 0 : t.frag.type))
                return;
            n.abort();
        }
    } }
    detach() { for (const e in this.keyIdToKeyInfo) {
        const t = this.keyIdToKeyInfo[e];
        (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyIdToKeyInfo[e];
    } }
    destroy() { this.detach(); for (const e in this.keyIdToKeyInfo) {
        const t = this.keyIdToKeyInfo[e].loader;
        t && t.destroy();
    } this.keyIdToKeyInfo = {}; }
    createKeyLoadError(e, t = k.KEY_LOAD_ERROR, s, n, r) { return new oi({ type: q.NETWORK_ERROR, details: t, fatal: !1, frag: e, response: r, error: s, networkDetails: n }); }
    loadClear(e, t, s) { if (this.emeController && this.config.emeEnabled && !this.emeController.getSelectedKeySystemFormats().length) {
        if (t.length)
            for (let n = 0, r = t.length; n < r; n++) {
                const a = t[n];
                if (e.cc <= a.cc && (!be(e) || !be(a) || e.sn < a.sn) || !s && n == r - 1)
                    return this.emeController.selectKeySystemFormat(a).then(o => { if (!this.emeController)
                        return; a.setKeyFormat(o); const l = ya(o); if (l)
                        return this.emeController.getKeySystemAccess([l]); });
            }
        if (this.config.requireKeySystemAccessOnStart) {
            const n = Rn(this.config);
            if (n.length)
                return this.emeController.getKeySystemAccess(n);
        }
    } return null; }
    load(e) { return !e.decryptdata && e.encrypted && this.emeController && this.config.emeEnabled ? this.emeController.selectKeySystemFormat(e).then(t => this.loadInternal(e, t)) : this.loadInternal(e); }
    loadInternal(e, t) { var s, n; t && e.setKeyFormat(t); const r = e.decryptdata; if (!r) {
        const u = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : `Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController && this.config.emeEnabled})`);
        return Promise.reject(this.createKeyLoadError(e, k.KEY_LOAD_ERROR, u));
    } const a = r.uri; if (!a)
        return Promise.reject(this.createKeyLoadError(e, k.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${a}"`))); const o = wl(r); let l = this.keyIdToKeyInfo[o]; if ((s = l) != null && s.decryptdata.key)
        return r.key = l.decryptdata.key, Promise.resolve({ frag: e, keyInfo: l }); if (this.emeController && (n = l) != null && n.keyLoadPromise)
        switch (this.emeController.getKeyStatus(l.decryptdata)) {
            case "usable":
            case "usable-in-future": return l.keyLoadPromise.then(c => { const { keyInfo: d } = c; return r.key = d.decryptdata.key, { frag: e, keyInfo: d }; });
        } switch (this.log(`${this.keyIdToKeyInfo[o] ? "Rel" : "L"}oading${r.keyId ? " keyId: " + je(r.keyId) : ""} URI: ${r.uri} from ${e.type} ${e.level}`), l = this.keyIdToKeyInfo[o] = { decryptdata: r, keyLoadPromise: null, loader: null, mediaKeySessionContext: null }, r.method) {
        case "SAMPLE-AES":
        case "SAMPLE-AES-CENC":
        case "SAMPLE-AES-CTR": return r.keyFormat === "identity" ? this.loadKeyHTTP(l, e) : this.loadKeyEME(l, e);
        case "AES-128":
        case "AES-256":
        case "AES-256-CTR": return this.loadKeyHTTP(l, e);
        default: return Promise.reject(this.createKeyLoadError(e, k.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)));
    } }
    loadKeyEME(e, t) { const s = { frag: t, keyInfo: e }; if (this.emeController && this.config.emeEnabled) {
        var n;
        if (!e.decryptdata.keyId && (n = t.initSegment) != null && n.data) {
            const a = zS(t.initSegment.data);
            if (a.length) {
                let o = a[0];
                o.some(l => l !== 0) ? (this.log(`Using keyId found in init segment ${je(o)}`), $i.setKeyIdForUri(e.decryptdata.uri, o)) : (o = $i.addKeyIdForUri(e.decryptdata.uri), this.log(`Generating keyId to patch media ${je(o)}`)), e.decryptdata.keyId = o;
            }
        }
        if (!e.decryptdata.keyId && !be(t))
            return Promise.resolve(s);
        const r = this.emeController.loadKey(s);
        return (e.keyLoadPromise = r.then(a => (e.mediaKeySessionContext = a, s))).catch(a => { throw e.keyLoadPromise = null, "data" in a && (a.data.frag = t), a; });
    } return Promise.resolve(s); }
    loadKeyHTTP(e, t) { const s = this.config, n = s.loader, r = new n(s); return t.keyLoader = e.loader = r, e.keyLoadPromise = new Promise((a, o) => { const l = { keyInfo: e, frag: t, responseType: "arraybuffer", url: e.decryptdata.uri }, u = s.keyLoadPolicy.default, c = { loadPolicy: u, timeout: u.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, d = { onSuccess: (h, f, m, p) => { const { frag: x, keyInfo: y } = m, v = wl(y.decryptdata); if (!x.decryptdata || y !== this.keyIdToKeyInfo[v])
            return o(this.createKeyLoadError(x, k.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), p)); y.decryptdata.key = x.decryptdata.key = new Uint8Array(h.data), x.keyLoader = null, y.loader = null, a({ frag: x, keyInfo: y }); }, onError: (h, f, m, p) => { this.resetLoader(f), o(this.createKeyLoadError(t, k.KEY_LOAD_ERROR, new Error(`HTTP Error ${h.code} loading key ${h.text}`), m, oe({ url: l.url, data: void 0 }, h))); }, onTimeout: (h, f, m) => { this.resetLoader(f), o(this.createKeyLoadError(t, k.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), m)); }, onAbort: (h, f, m) => { this.resetLoader(f), o(this.createKeyLoadError(t, k.INTERNAL_ABORTED, new Error("key loading aborted"), m)); } }; r.load(l, c, d); }); }
    resetLoader(e) { const { frag: t, keyInfo: s, url: n } = e, r = s.loader; t.keyLoader === r && (t.keyLoader = null, s.loader = null); const a = wl(s.decryptdata) || n; delete this.keyIdToKeyInfo[a], r && r.destroy(); }
}
function wl(i) { if (i.keyFormat !== Ge.FAIRPLAY) {
    const e = i.keyId;
    if (e)
        return je(e);
} return i.uri; }
function Qf(i) { const { type: e } = i; switch (e) {
    case se.AUDIO_TRACK: return z.AUDIO;
    case se.SUBTITLE_TRACK: return z.SUBTITLE;
    default: return z.MAIN;
} }
function _l(i, e) { let t = i.url; return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t; }
class _A {
    constructor(e) { this.hls = void 0, this.loaders = Object.create(null), this.variableList = null, this.onManifestLoaded = this.checkAutostartLoad, this.hls = e, this.registerListeners(); }
    startLoad(e) { }
    stopLoad() { this.destroyInternalLoaders(); }
    registerListeners() { const { hls: e } = this; e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.LEVEL_LOADING, this.onLevelLoading, this), e.on(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this); }
    unregisterListeners() { const { hls: e } = this; e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.LEVEL_LOADING, this.onLevelLoading, this), e.off(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this); }
    createInternalLoader(e) { const t = this.hls.config, s = t.pLoader, n = t.loader, r = s || n, a = new r(t); return this.loaders[e.type] = a, a; }
    getInternalLoader(e) { return this.loaders[e.type]; }
    resetInternalLoader(e) { this.loaders[e] && delete this.loaders[e]; }
    destroyInternalLoaders() { for (const e in this.loaders) {
        const t = this.loaders[e];
        t && t.destroy(), this.resetInternalLoader(e);
    } }
    destroy() { this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders(); }
    onManifestLoading(e, t) { const { url: s } = t; this.variableList = null, this.load({ id: null, level: 0, responseType: "text", type: se.MANIFEST, url: s, deliveryDirectives: null, levelOrTrack: null }); }
    onLevelLoading(e, t) { const { id: s, level: n, pathwayId: r, url: a, deliveryDirectives: o, levelInfo: l } = t; this.load({ id: s, level: n, pathwayId: r, responseType: "text", type: se.LEVEL, url: a, deliveryDirectives: o, levelOrTrack: l }); }
    onAudioTrackLoading(e, t) { const { id: s, groupId: n, url: r, deliveryDirectives: a, track: o } = t; this.load({ id: s, groupId: n, level: null, responseType: "text", type: se.AUDIO_TRACK, url: r, deliveryDirectives: a, levelOrTrack: o }); }
    onSubtitleTrackLoading(e, t) { const { id: s, groupId: n, url: r, deliveryDirectives: a, track: o } = t; this.load({ id: s, groupId: n, level: null, responseType: "text", type: se.SUBTITLE_TRACK, url: r, deliveryDirectives: a, levelOrTrack: o }); }
    onLevelsUpdated(e, t) { const s = this.loaders[se.LEVEL]; if (s) {
        const n = s.context;
        n && !t.levels.some(r => r === n.levelOrTrack) && (s.abort(), delete this.loaders[se.LEVEL]);
    } }
    load(e) { var t; const s = this.hls.config; let n = this.getInternalLoader(e); if (n) {
        const u = this.hls.logger, c = n.context;
        if (c && c.levelOrTrack === e.levelOrTrack && (c.url === e.url || c.deliveryDirectives && !e.deliveryDirectives)) {
            c.url === e.url ? u.log(`[playlist-loader]: ignore ${e.url} ongoing request`) : u.log(`[playlist-loader]: ignore ${e.url} in favor of ${c.url}`);
            return;
        }
        u.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), n.abort();
    } let r; if (e.type === se.MANIFEST ? r = s.manifestLoadPolicy.default : r = ce({}, s.playlistLoadPolicy.default, { timeoutRetry: null, errorRetry: null }), n = this.createInternalLoader(e), G((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
        let u;
        if (e.type === se.LEVEL && e.level !== null ? u = this.hls.levels[e.level].details : e.type === se.AUDIO_TRACK && e.id !== null ? u = this.hls.audioTracks[e.id].details : e.type === se.SUBTITLE_TRACK && e.id !== null && (u = this.hls.subtitleTracks[e.id].details), u) {
            const c = u.partTarget, d = u.targetduration;
            if (c && d) {
                const h = Math.max(c * 3, d * .8) * 1e3;
                r = ce({}, r, { maxTimeToFirstByteMs: Math.min(h, r.maxTimeToFirstByteMs), maxLoadTimeMs: Math.min(h, r.maxTimeToFirstByteMs) });
            }
        }
    } const a = r.errorRetry || r.timeoutRetry || {}, o = { loadPolicy: r, timeout: r.maxLoadTimeMs, maxRetry: a.maxNumRetry || 0, retryDelay: a.retryDelayMs || 0, maxRetryDelay: a.maxRetryDelayMs || 0 }, l = { onSuccess: (u, c, d, h) => { const f = this.getInternalLoader(d); this.resetInternalLoader(d.type); const m = u.data; c.parsing.start = performance.now(), Zt.isMediaPlaylist(m) || d.type !== se.MANIFEST ? this.handleTrackOrLevelPlaylist(u, c, d, h || null, f) : this.handleMasterPlaylist(u, c, d, h); }, onError: (u, c, d, h) => { this.handleNetworkError(c, d, !1, u, h); }, onTimeout: (u, c, d) => { this.handleNetworkError(c, d, !0, void 0, u); } }; n.load(e, o, l); }
    checkAutostartLoad() { if (!this.hls)
        return; const { config: { autoStartLoad: e, startPosition: t }, forceStartLoad: s } = this.hls; (e || s) && (this.hls.logger.log(`${e ? "auto" : "force"} startLoad with configured startPosition ${t}`), this.hls.startLoad(t)); }
    handleMasterPlaylist(e, t, s, n) { const r = this.hls, a = e.data, o = _l(e, s), l = Zt.parseMasterPlaylist(a, o); if (l.playlistParsingError) {
        t.parsing.end = performance.now(), this.handleManifestParsingError(e, s, l.playlistParsingError, n, t);
        return;
    } const { contentSteering: u, levels: c, sessionData: d, sessionKeys: h, startTimeOffset: f, variableList: m } = l; this.variableList = m, c.forEach(v => { const { unknownCodecs: E } = v; if (E) {
        const { preferManagedMediaSource: T } = this.hls.config;
        let { audioCodec: L, videoCodec: w } = v;
        for (let I = E.length; I--;) {
            const R = E[I];
            rr(R, "audio", T) ? (v.audioCodec = L = L ? `${L},${R}` : R, sn.audio[L.substring(0, 4)] = 2, E.splice(I, 1)) : rr(R, "video", T) && (v.videoCodec = w = w ? `${w},${R}` : R, sn.video[w.substring(0, 4)] = 2, E.splice(I, 1));
        }
    } }); const { AUDIO: p = [], SUBTITLES: x, "CLOSED-CAPTIONS": y } = Zt.parseMasterPlaylistMedia(a, o, l); p.length && !p.some(E => !E.url) && c[0].audioCodec && !c[0].attrs.AUDIO && (this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), p.unshift({ type: "main", name: "main", groupId: "main", default: !1, autoselect: !1, forced: !1, id: -1, attrs: new ve({}), bitrate: 0, url: "" })), r.trigger(S.MANIFEST_LOADED, { levels: c, audioTracks: p, subtitles: x, captions: y, contentSteering: u, url: o, stats: t, networkDetails: n, sessionData: d, sessionKeys: h, startTimeOffset: f, variableList: m }); }
    handleTrackOrLevelPlaylist(e, t, s, n, r) { const a = this.hls, { id: o, level: l, type: u } = s, c = _l(e, s), d = G(l) ? l : G(o) ? o : 0, h = Qf(s), f = Zt.parseLevelPlaylist(e.data, c, d, h, 0, this.variableList); if (u === se.MANIFEST) {
        const m = { attrs: new ve({}), bitrate: 0, details: f, name: "", url: c };
        f.requestScheduled = t.loading.start + op(f, 0), a.trigger(S.MANIFEST_LOADED, { levels: [m], audioTracks: [], url: c, stats: t, networkDetails: n, sessionData: null, sessionKeys: null, contentSteering: null, startTimeOffset: null, variableList: null });
    } t.parsing.end = performance.now(), s.levelDetails = f, this.handlePlaylistLoaded(f, e, t, s, n, r); }
    handleManifestParsingError(e, t, s, n, r) { this.hls.trigger(S.ERROR, { type: q.NETWORK_ERROR, details: k.MANIFEST_PARSING_ERROR, fatal: t.type === se.MANIFEST, url: e.url, err: s, error: s, reason: s.message, response: e, context: t, networkDetails: n, stats: r }); }
    handleNetworkError(e, t, s = !1, n, r) { let a = `A network ${s ? "timeout" : "error" + (n ? " (status " + n.code + ")" : "")} occurred while loading ${e.type}`; e.type === se.LEVEL ? a += `: ${e.level} id: ${e.id}` : (e.type === se.AUDIO_TRACK || e.type === se.SUBTITLE_TRACK) && (a += ` id: ${e.id} group-id: "${e.groupId}"`); const o = new Error(a); this.hls.logger.warn(`[playlist-loader]: ${a}`); let l = k.UNKNOWN, u = !1; const c = this.getInternalLoader(e); switch (e.type) {
        case se.MANIFEST:
            l = s ? k.MANIFEST_LOAD_TIMEOUT : k.MANIFEST_LOAD_ERROR, u = !0;
            break;
        case se.LEVEL:
            l = s ? k.LEVEL_LOAD_TIMEOUT : k.LEVEL_LOAD_ERROR, u = !1;
            break;
        case se.AUDIO_TRACK:
            l = s ? k.AUDIO_TRACK_LOAD_TIMEOUT : k.AUDIO_TRACK_LOAD_ERROR, u = !1;
            break;
        case se.SUBTITLE_TRACK:
            l = s ? k.SUBTITLE_TRACK_LOAD_TIMEOUT : k.SUBTITLE_LOAD_ERROR, u = !1;
            break;
    } c && this.resetInternalLoader(e.type); const d = { type: q.NETWORK_ERROR, details: l, fatal: u, url: e.url, loader: c, context: e, error: o, networkDetails: t, stats: r }; if (n) {
        const h = (t == null ? void 0 : t.url) || e.url;
        d.response = oe({ url: h, data: void 0 }, n);
    } this.hls.trigger(S.ERROR, d); }
    handlePlaylistLoaded(e, t, s, n, r, a) { const o = this.hls, { type: l, level: u, levelOrTrack: c, id: d, groupId: h, deliveryDirectives: f } = n, m = _l(t, n), p = Qf(n); let x = typeof n.level == "number" && p === z.MAIN ? u : void 0; const y = e.playlistParsingError; if (y) {
        if (this.hls.logger.warn(`${y} ${e.url}`), !o.config.ignorePlaylistParsingErrors) {
            o.trigger(S.ERROR, { type: q.NETWORK_ERROR, details: k.LEVEL_PARSING_ERROR, fatal: !1, url: m, error: y, reason: y.message, response: t, context: n, level: x, parent: p, networkDetails: r, stats: s });
            return;
        }
        e.playlistParsingError = null;
    } if (!e.fragments.length) {
        const v = e.playlistParsingError = new Error("No Segments found in Playlist");
        o.trigger(S.ERROR, { type: q.NETWORK_ERROR, details: k.LEVEL_EMPTY_ERROR, fatal: !1, url: m, error: v, reason: v.message, response: t, context: n, level: x, parent: p, networkDetails: r, stats: s });
        return;
    } switch (e.live && a && (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), l) {
        case se.MANIFEST:
        case se.LEVEL:
            if (x) {
                if (!c)
                    x = 0;
                else if (c !== o.levels[x]) {
                    const v = o.levels.indexOf(c);
                    v > -1 && (x = v);
                }
            }
            o.trigger(S.LEVEL_LOADED, { details: e, levelInfo: c || o.levels[0], level: x || 0, id: d || 0, stats: s, networkDetails: r, deliveryDirectives: f, withoutMultiVariant: l === se.MANIFEST });
            break;
        case se.AUDIO_TRACK:
            o.trigger(S.AUDIO_TRACK_LOADED, { details: e, track: c, id: d || 0, groupId: h || "", stats: s, networkDetails: r, deliveryDirectives: f });
            break;
        case se.SUBTITLE_TRACK:
            o.trigger(S.SUBTITLE_TRACK_LOADED, { details: e, track: c, id: d || 0, groupId: h || "", stats: s, networkDetails: r, deliveryDirectives: f });
            break;
    } }
}
class Qt {
    static get version() { return lr; }
    static isMSESupported() { return ay(); }
    static isSupported() { return LA(); }
    static getMediaSource() { return Vi(); }
    static get Events() { return S; }
    static get MetadataSchema() { return ht; }
    static get ErrorTypes() { return q; }
    static get ErrorDetails() { return k; }
    static get DefaultConfig() { return Qt.defaultConfig ? Qt.defaultConfig : dA; }
    static set DefaultConfig(e) { Qt.defaultConfig = e; }
    constructor(e = {}) { this.config = void 0, this.userConfig = void 0, this.logger = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new ed, this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioStreamController = void 0, this.subtititleStreamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.interstitialsController = void 0, this.gapController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this._url = null, this._sessionId = void 0, this.triggeringException = void 0, this.started = !1; const t = this.logger = NS(e.debug || !1, "Hls instance", e.assetPlayerId), s = this.config = fA(Qt.DefaultConfig, e, t); this.userConfig = e, s.progressive && mA(s, t); const { abrController: n, bufferController: r, capLevelController: a, errorController: o, fpsController: l } = s, u = new o(this), c = this.abrController = new n(this), d = new bT(this), h = s.interstitialsController, f = h ? this.interstitialsController = new h(this, Qt) : null, m = this.bufferController = new r(this, d), p = this.capLevelController = new a(this), x = new l(this), y = new _A(this), v = s.contentSteeringController, E = v ? new v(this) : null, T = this.levelController = new TA(this, E), L = new EA(this), w = new wA(this.config, this.logger), I = this.streamController = new RA(this, d, w), R = this.gapController = new vA(this, d); p.setStreamController(I), x.setStreamController(I); const _ = [y, T, I]; f && _.splice(1, 0, f), E && _.splice(1, 0, E), this.networkControllers = _; const A = [c, m, R, p, x, L, d]; this.audioTrackController = this.createController(s.audioTrackController, _); const D = s.audioStreamController; D && _.push(this.audioStreamController = new D(this, d, w)), this.subtitleTrackController = this.createController(s.subtitleTrackController, _); const B = s.subtitleStreamController; B && _.push(this.subtititleStreamController = new B(this, d, w)), this.createController(s.timelineController, A), w.emeController = this.emeController = this.createController(s.emeController, A), this.cmcdController = this.createController(s.cmcdController, A), this.latencyController = this.createController(SA, A), this.coreComponents = A, _.push(u); const V = u.onErrorOut; typeof V == "function" && this.on(S.ERROR, V, u), this.on(S.MANIFEST_LOADED, y.onManifestLoaded, y); }
    createController(e, t) { if (e) {
        const s = new e(this);
        return t && t.push(s), s;
    } return null; }
    on(e, t, s = this) { this._emitter.on(e, t, s); }
    once(e, t, s = this) { this._emitter.once(e, t, s); }
    removeAllListeners(e) { this._emitter.removeAllListeners(e); }
    off(e, t, s = this, n) { this._emitter.off(e, t, s, n); }
    listeners(e) { return this._emitter.listeners(e); }
    emit(e, t, s) { return this._emitter.emit(e, t, s); }
    trigger(e, t) { if (this.config.debug)
        return this.emit(e, e, t); try {
        return this.emit(e, e, t);
    }
    catch (s) {
        if (this.logger.error("An internal error happened while handling event " + e + '. Error message: "' + s.message + '". Here is a stacktrace:', s), !this.triggeringException) {
            this.triggeringException = !0;
            const n = e === S.ERROR;
            this.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.INTERNAL_EXCEPTION, fatal: n, event: e, error: s }), this.triggeringException = !1;
        }
    } return !1; }
    listenerCount(e) { return this._emitter.listenerCount(e); }
    destroy() { this.logger.log("destroy"), this.trigger(S.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this._url = null, this.networkControllers.forEach(t => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach(t => t.destroy()), this.coreComponents.length = 0; const e = this.config; e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null; }
    attachMedia(e) { if (!e || "media" in e && !e.media) {
        const r = new Error(`attachMedia failed: invalid argument (${e})`);
        this.trigger(S.ERROR, { type: q.OTHER_ERROR, details: k.ATTACH_MEDIA_ERROR, fatal: !0, error: r });
        return;
    } this.logger.log("attachMedia"), this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia()); const t = "media" in e, s = t ? e.media : e, n = t ? e : { media: s }; this._media = s, this.trigger(S.MEDIA_ATTACHING, n); }
    detachMedia() { this.logger.log("detachMedia"), this.trigger(S.MEDIA_DETACHING, {}), this._media = null; }
    transferMedia() { this._media = null; const e = this.bufferController.transferMedia(); return this.trigger(S.MEDIA_DETACHING, { transferMedia: e }), e; }
    loadSource(e) { this.stopLoad(); const t = this.media, s = this._url, n = this._url = Vc.buildAbsoluteURL(self.location.href, e, { alwaysNormalize: !0 }); this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.logger.log(`loadSource:${n}`), t && s && (s !== n || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(S.MANIFEST_LOADING, { url: e }); }
    get url() { return this._url; }
    get hasEnoughToStart() { return this.streamController.hasEnoughToStart; }
    get startPosition() { return this.streamController.startPositionValue; }
    startLoad(e = -1, t) { this.logger.log(`startLoad(${e + (t ? ", <skip seek to start>" : "")})`), this.started = !0, this.resumeBuffering(); for (let s = 0; s < this.networkControllers.length && (this.networkControllers[s].startLoad(e, t), !(!this.started || !this.networkControllers)); s++)
        ; }
    stopLoad() { this.logger.log("stopLoad"), this.started = !1; for (let e = 0; e < this.networkControllers.length && (this.networkControllers[e].stopLoad(), !(this.started || !this.networkControllers)); e++)
        ; }
    get loadingEnabled() { return this.started; }
    get bufferingEnabled() { return this.streamController.bufferingEnabled; }
    resumeBuffering() { this.bufferingEnabled || (this.logger.log("resume buffering"), this.networkControllers.forEach(e => { e.resumeBuffering && e.resumeBuffering(); })); }
    pauseBuffering() { this.bufferingEnabled && (this.logger.log("pause buffering"), this.networkControllers.forEach(e => { e.pauseBuffering && e.pauseBuffering(); })); }
    get inFlightFragments() { const e = { [z.MAIN]: this.streamController.inFlightFrag }; return this.audioStreamController && (e[z.AUDIO] = this.audioStreamController.inFlightFrag), this.subtititleStreamController && (e[z.SUBTITLE] = this.subtititleStreamController.inFlightFrag), e; }
    swapAudioCodec() { this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec(); }
    recoverMediaError() { this.logger.log("recoverMediaError"); const e = this._media, t = e == null ? void 0 : e.currentTime; this.detachMedia(), e && (this.attachMedia(e), t && this.startLoad(t)); }
    removeLevel(e) { this.levelController.removeLevel(e); }
    get sessionId() { let e = this._sessionId; return e || (e = this._sessionId = vI()), e; }
    get levels() { const e = this.levelController.levels; return e || []; }
    get latestLevelDetails() { return this.streamController.getLevelDetails() || null; }
    get loadLevelObj() { return this.levelController.loadLevelObj; }
    get currentLevel() { return this.streamController.currentLevel; }
    set currentLevel(e) { this.logger.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch(); }
    get nextLevel() { return this.streamController.nextLevel; }
    set nextLevel(e) { this.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch(); }
    get loadLevel() { return this.levelController.level; }
    set loadLevel(e) { this.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel = e; }
    get nextLoadLevel() { return this.levelController.nextLoadLevel; }
    set nextLoadLevel(e) { this.levelController.nextLoadLevel = e; }
    get firstLevel() { return Math.max(this.levelController.firstLevel, this.minAutoLevel); }
    set firstLevel(e) { this.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel = e; }
    get startLevel() { const e = this.levelController.startLevel; return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e; }
    set startLevel(e) { this.logger.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e; }
    get capLevelToPlayerSize() { return this.config.capLevelToPlayerSize; }
    set capLevelToPlayerSize(e) { const t = !!e; t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t); }
    get autoLevelCapping() { return this._autoLevelCapping; }
    get bandwidthEstimate() { const { bwEstimator: e } = this.abrController; return e ? e.getEstimate() : NaN; }
    set bandwidthEstimate(e) { this.abrController.resetEstimator(e); }
    get abrEwmaDefaultEstimate() { const { bwEstimator: e } = this.abrController; return e ? e.defaultEstimate : NaN; }
    get ttfbEstimate() { const { bwEstimator: e } = this.abrController; return e ? e.getEstimateTTFB() : NaN; }
    set autoLevelCapping(e) { this._autoLevelCapping !== e && (this.logger.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated()); }
    get maxHdcpLevel() { return this._maxHdcpLevel; }
    set maxHdcpLevel(e) { fT(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated()); }
    get autoLevelEnabled() { return this.levelController.manualLevel === -1; }
    get manualLevel() { return this.levelController.manualLevel; }
    get minAutoLevel() { const { levels: e, config: { minAutoBitrate: t } } = this; if (!e)
        return 0; const s = e.length; for (let n = 0; n < s; n++)
        if (e[n].maxBitrate >= t)
            return n; return 0; }
    get maxAutoLevel() { const { levels: e, autoLevelCapping: t, maxHdcpLevel: s } = this; let n; if (t === -1 && e != null && e.length ? n = e.length - 1 : n = t, s)
        for (let r = n; r--;) {
            const a = e[r].attrs["HDCP-LEVEL"];
            if (a && a <= s)
                return r;
        } return n; }
    get firstAutoLevel() { return this.abrController.firstAutoLevel; }
    get nextAutoLevel() { return this.abrController.nextAutoLevel; }
    set nextAutoLevel(e) { this.abrController.nextAutoLevel = e; }
    get playingDate() { return this.streamController.currentProgramDateTime; }
    get mainForwardBufferInfo() { return this.streamController.getMainFwdBufferInfo(); }
    get maxBufferLength() { return this.streamController.maxBufferLength; }
    setAudioOption(e) { var t; return ((t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e)) || null; }
    setSubtitleOption(e) { var t; return ((t = this.subtitleTrackController) == null ? void 0 : t.setSubtitleOption(e)) || null; }
    get allAudioTracks() { const e = this.audioTrackController; return e ? e.allAudioTracks : []; }
    get audioTracks() { const e = this.audioTrackController; return e ? e.audioTracks : []; }
    get audioTrack() { const e = this.audioTrackController; return e ? e.audioTrack : -1; }
    set audioTrack(e) { const t = this.audioTrackController; t && (t.audioTrack = e); }
    get allSubtitleTracks() { const e = this.subtitleTrackController; return e ? e.allSubtitleTracks : []; }
    get subtitleTracks() { const e = this.subtitleTrackController; return e ? e.subtitleTracks : []; }
    get subtitleTrack() { const e = this.subtitleTrackController; return e ? e.subtitleTrack : -1; }
    get media() { return this._media; }
    set subtitleTrack(e) { const t = this.subtitleTrackController; t && (t.subtitleTrack = e); }
    get subtitleDisplay() { const e = this.subtitleTrackController; return e ? e.subtitleDisplay : !1; }
    set subtitleDisplay(e) { const t = this.subtitleTrackController; t && (t.subtitleDisplay = e); }
    get lowLatencyMode() { return this.config.lowLatencyMode; }
    set lowLatencyMode(e) { this.config.lowLatencyMode = e; }
    get liveSyncPosition() { return this.latencyController.liveSyncPosition; }
    get latency() { return this.latencyController.latency; }
    get maxLatency() { return this.latencyController.maxLatency; }
    get targetLatency() { return this.latencyController.targetLatency; }
    set targetLatency(e) { this.latencyController.targetLatency = e; }
    get drift() { return this.latencyController.drift; }
    get forceStartLoad() { return this.streamController.forceStartLoad; }
    get pathways() { return this.levelController.pathways; }
    get pathwayPriority() { return this.levelController.pathwayPriority; }
    set pathwayPriority(e) { this.levelController.pathwayPriority = e; }
    get bufferedToEnd() { var e; return !!((e = this.bufferController) != null && e.bufferedToEnd); }
    get interstitialsManager() { var e; return ((e = this.interstitialsController) == null ? void 0 : e.interstitialsManager) || null; }
    getMediaDecodingInfo(e, t = this.allAudioTracks) { const s = zg(t); return Kg(e, s, navigator.mediaCapabilities); }
}
Qt.defaultConfig = void 0;
if (typeof window !== "undefined") {
    window.Hls = Qt;
}

