<template>
  <div id="library" class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <input v-model="filterKey" type="text" class="form-control" id="search-text" placeholder="Filter..." autofocus="" autocomplete="off">

      <div class="results container">
        <div class="row media result" v-for="tune of filterTunes">
          <div class="media-body"  data-toggle="modal" data-target="#tune-modal" @click="showDetails(tune)">
            <h4 class="media-heading">{{ tune.title }}</h4>
            <strong>Artist:</strong> {{ tune.artist }}
            <br>
            <strong>Author:</strong> {{ tune.author }}
          </div>
          <div class="playable media-right">
            <span v-on:click="play(tune, $event)" class="fa fa-play-circle fa-5x"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2"></div>

    <div class="modal fade" id="tune-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{{ currentTune.title }}</h4>
          </div>
          <div class="modal-body">
            <h4>Instructions:</h4>
            <p>Add the following line to <code>/etc/default/grub</code>:</p>
            <pre>GRUB_INIT_TUNE="{{ currentTune.data }}"</pre>
            <p>Execute <code>sudo update-grub</code>.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-small" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import synth from '../synth'

var { tunes } = require('!json!./tunes.json');

export default {
  name: 'library',
  components: {
  },
  data () {
    return {
      currentTune: {},
      filterKey: '',
      tunes: tunes
    }
  },
  computed: {
    filterTunes: function () {
      let filterKey = this.filterKey;
      if (filterKey.length === 0) {
        return this.tunes;
      }

      let filterRegExp = new RegExp(filterKey, 'i');
      return this.tunes.filter(function (tune) {
        return tune.title.search(filterRegExp) !== -1 || tune.tags.search(filterRegExp) !== -1;
      });
    }
  },
  methods: {
    play: function (tune, event) {
      synth.play(tune.data);
      event.preventDefault();
    },
    showDetails: function (tune) {
      this.currentTune = tune;
    }
  }
}
</script>

<style scoped>
pre {
  background-color: #DDD;
  border-radius: 0.25rem;
  padding: 0.5rem;
  white-space: pre-wrap;
}
.result {
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  box-shadow: 0 0 1px #777;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.playable {
  cursor: pointer;
}
#library {
  padding-bottom: 80px;
}
</style>
