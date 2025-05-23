# Default Setup

The RAMP instance provides APIs to set up fixtures and events, allowing a high degree of customization. However, there is also a default setup that will provide stock fixtures and events. The default setup will result in a functional viewer that only requires a configuration file.

## Default Fixtures

See [Fixture Overview](fixture-overview).

## Default Events

All events are specific to a RAMP instance. An event on one instance says nothing about a different instance.

### Core Events

These events will always be present, regardless of what fixtures are active. Event names here include the `GlobalEvents` enum value first. Italics in the payload indicate a property of a general payload object.

TODO if we have API docs that expose the payload interfaces, link to those definitions. Otherwise we'll need to put the interface specs here

| Event Name                                         | Payload                                                        | Event Announces                                  |
| -------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------ |
| APPBAR_BUTTON_CLICK<br>'appbar/click'              | _id_: button component/panel id                                | A button in the appbar was clicked               |
| COMPONENT<br>'ramp/component'                      | _id_: component id                                             | A vue component registered                       |
| CONFIG_CHANGE<br>'config/change'                   | RampConfig object                                              | The active config was changed                    |
| FILTER_CHANGE<br>'filter/change'                   | FilterEventParam object                                        | A filter has changed                             |
| FIXTURE_ADDED<br>'fixture/added'                   | FixtureInstance object                                         | A fixture has been added                         |
| FIXTURE_REMOVED<br>'fixture/removed'               | FixtureInstance object                                         | A fixture has been removed                       |
| LANG_CHANGE<br>'lang/change'                       | _oldLang_: old language, _newLang_: new language               | The language was changed                         |
| LAYER_DRAWSTATECHANGE<br>'layer/drawstatechange'   | _state_: new value, _layer_: LayerInstance object              | The layer draw state changed                     |
| LAYER_INITIATIONSTATECHANGE<br>'layer/initiationStatechange' | _state_: new value, _layer_: LayerInstance object    | The layer layer state changed                    |
| LAYER_LAYERSTATECHANGE<br>'layer/layerstatechange' | _state_: new value, _layer_: LayerInstance object, _userCancel_: boolean   | The layer load state changed         |
| LAYER_OPACITYCHANGE<br>'layer/opacitychange'       | _opacity_: new value, _layer_: LayerInstance object            | The layer opacity changed                        |
| LAYER_REGISTERED<br>'layer/registered'             | LayerInstance object                                           | The layer was registered with the instance       |
| LAYER_RELOAD_END<br>'layer/reloadend'              | LayerInstance object                                           | The layer finished reloading                     |
| LAYER_RELOAD_START<br>'layer/reloadstart'          | LayerInstance object                                           | The layer started reloading                      |
| LAYER_REMOVE<br>'layer/remove'                     | LayerInstance object                                           | The layer was removed from the map               |
| LAYER_VISIBILITYCHANGE<br>'layer/visibilitychange' | _visibility_: new value, _layer_: LayerInstance object         | The layer visibility changed                     |
| MAP_BASEMAPCHANGE<br>'map/basemapchanged'          | _basemapId_: string, _schemaChanged_: boolean                  | The basemap was changed                          |
| MAP_BLUR<br>'map/blur'                             | KeyboardEvent object                                           | The map lost focus                               |
| MAP_CLICK<br>'map/click'                           | MapClick object                                                | The map was clicked                              |
| MAP_CREATED<br>'map/created'                       | none                                                           | The map was created                              |
| MAP_DESTROYED<br>'map/destroyed'                   | none                                                           | The map was destroyed                            |
| MAP_DOUBLECLICK<br>'map/doubleclick'               | MapClick object                                                | The map was double clicked                       |
| MAP_EXTENTCHANGE<br>'map/extentchanged'            | RAMP Extent object                                             | The map extent changed                           |
| MAP_FOCUS<br>'map/focus'                           | KeyboardEvent object                                           | The map gained focus                             |
| MAP_GRAPHICHIT<br>'map/graphichit'                 | _layer_: LayerInstance object, _graphicHit_: object, _attributes_: object, _icon_: string, _screenPoint_: object            | A graphic was found where the mouse/crosshair is |
| MAP_IDENTIFY<br>'map/identify'                     | MapIdentifyResult object                                       | A map identify was requested                     |
| MAP_KEYDOWN<br>'map/keydown'                       | KeyboardEvent object                                           | A key was pressed                                |
| MAP_KEYUP<br>'map/keyup'                           | KeyboardEvent object                                           | A key was released                               |
| MAP_MOUSEDOWN<br>'map/mousedown'                   | PointerEvent object                                            | A mouse button was depressed
| MAP_MOUSELEAVE<br>'map/mouseleave'                 | PointerEvent object                                            | The mouse left the map                           |
| MAP_MOUSEMOVE<br>'map/mousemove'                   | MapMove object                                                 | The mouse moved over the map                     |
| MAP_MOUSEMOVE_END<br>'map/mousemoveend'            | MapMove object                                                 | The mouse started moving over the map            |
| MAP_MOUSEMOVE_START<br>'map/mousemovestart'        | MapMove object                                                 | The mouse stopped moving over the map            |
| MAP_REFRESH_END<br>'map/refreshend'                | none                                                           | The map view started refreshing                  |
| MAP_REFRESH_START<br>'map/refreshstart'            | none                                                           | The map view finished refreshing                 |
| MAP_REORDER<br>'map/reorder'                       | _newIndex_: z-index, _layer_: LayerInstance object             | A layer was reordered |
| MAP_RESIZED<br>'map/resized'                       | _height_: new height, _width_: new width                       | The map view changed size                        |
| MAP_SCALECHANGE<br>'map/scalechanged'              | scale (denominator) number                                     | The map scale changed                            |
| MAP_START<br>'map/start'                           | none                                                           | The map startup was requested                    |
| PANEL_CLOSED<br>'panel/closed'                     | PanelInstance object                                           | A panel was closed                               |
| PANEL_MINIMIZED<br>'panel/closed'                  | PanelInstance object                                           | A panel was minimized                            |
| PANEL_OPENED<br>'panel/opened'                     | PanelInstance object                                           | A panel was opened                               |
| RAMP_MOBILEVIEW_CHANGE<br>'ramp/mobileviewchange'  | mobileMode boolean                                             | The screen changes to/from mobile resolution     |
| RAMP_RELOAD<br>'ramp/reload'                       | none                                                           | The instance was explicitly reloaded             |
| USER_LAYER_ADDED<br>'user/layeradded'              | LayerInstance object                                           | A layer was added during the session             |

### Core Fixture Events

These events will be present if the associated core fixtures are running

| Event Name                           | Payload                                                 | Event Announces                                                |
| ------------------------------------ | ------------------------------------------------------- | -------------------------------------------------------------- |
| DETAILS_TOGGLE<br>'details/toggle'   | { data: any, uid: string, format: string }, boolean (optional)         | A feature's details panel toggle was requested with optional force open/close       |
| GRID_TOGGLE<br>'grid/toggle'         | _layer_: LayerInstance, _open_: boolean (optional)        | Grid panel toggle was requested with optional force open/close |
| HELP_TOGGLE<br>'help/toggle'         | boolean (optional)                                      | Help panel toggle was requested with optional force open/close |
| METADATA_TOGGLE<br>'metadata/toggle' | { type: string, layerName: string, url: string, _layer_: LayerInstance }, open: boolean (optional)        | Metadata panel toggle was requested with optional force open/close                                 |
| REORDER_TOGGLE<br>'reorder/toggle'   | boolean (optional)                                      | Layer reorder panel toggle was requested with optional force open/close |
| SETTINGS_TOGGLE<br>'settings/toggle' | _layer_: LayerInstance, _open_: boolean (optional)        | Settings panel toggle was requested for a layer with optional force open/close |
| WIZARD_TOGGLE<br>'wizard/open'       | boolean (optional)                                      | Wizard panel toggle was requested with optional force open/close |

## Default Events Handlers

Along with the default fixtures, there are default event handlers that are applied to make them react to each other and to the RAMP core. See the examples section below and the [Events API page](../api-guides/events.md) for details on how to work with event handlers.

### Map Handlers

- `ramp_map_click_runs_identify` causes the identify process to start when the map is clicked
- `ramp_map_created_initializes_fixtures` calls the `initialized()` method for fixtures when the map is created
- `ramp_map_identify_opens_identify_results` causes the identify results panel to open, displaying the results
- `ramp_map_keydown_updates_key_handler` causes a key press to be processed on the map
- `ramp_map_keyup_updates_key_handler` causes a key release to be processed on the map
- `ramp_map_blur_updates_key_handler` causes keyboard navigation to stop when the map loses focus

### Map Component Handlers

Updates the map attribution in the map-caption by retrieving it from the current basemap config

- `ramp_map_basemap_updates_map_attribs` when the basemap changes
- `ramp_map_created_updates_map_attribs` when the map is created

Updates the scalebar in the map-caption

- `ramp_map_resize_updates_scalebar` when the map resizes
- `ramp_map_scale_updates_scalebar` when the map scale changes

Updates the co-ordinates in the map-caption

- `ramp_map_keydown_updates_coords` when panning using a keyboard
- `ramp_map_mouse_updates_coords` when moving the mouse

Creates or updates the feature maptip

- `ramp_map_extent_updates_maptip` check for graphics when map extent changes
- `ramp_map_graphichit_creates_maptip` create maptip content when a new feature is hit
- `ramp_map_mouse_updates_maptip` check for graphics when mouse moves
- `ramp_map_mouseleave_removes_maptip` remove the maptip when the mouse leaves the map

Changes to the basemap causing tile layers to no longer be visible
- `ramp_map_basemap_checks_proj` will notify the user if there is a projection mismatch

### Layer Handlers

Changes to layers causing changes to the legend

- `ramp_layer_error_updates_legend` legend will reflect error state
- `ramp_layer_register_binds_legend` will connect a legend item to layer when it is registered (created)
- `ramp_layer_reload_end_binds_legend` will connect a legend item to layer when layer finishes a reload
- `ramp_layer_reload_start_updates_legend` legend will reflect loading state when layer reload starts
- `ramp_layer_remove_updates_legend` clears bound items from legend when layer is removed
- `ramp_layer_useradd_updates_legend` adds a legend entry when layers are added via user controls

Changes to layers causing changes in other fixtures

- `ramp_layer_remove_updates_details` clear details info for layer that has been removed
- `ramp_layer_remove_checks_grid` close and remove grid if all its layers have been removed

### Panel Handlers

Reacting to panels opening and closing

- `ramp_panel_close_updates_appbar` causes the appbar to remove a temporary button when the respective panel is closed
- `ramp_panel_open_updates_appbar` causes the appbar to add a temporary button when a panel without a fixed button is opened

Handling panel toggle event requests (open/close type actions)

- `ramp_toggle_details` feature details panel
- `ramp_toggle_grid` grid panel
- `ramp_toggle_help` help panel
- `ramp_toggle_metadata` metadata panel
- `ramp_toggle_reorder` layer reorder panel
- `ramp_toggle_settings` layer settings panel
- `ramp_toggle_wizard` import wizard panel

## Examples

### Default Setup

Creating a default instance of RAMP. No special action is required.

```js
var rInstance = RAMP.createInstance(domElement, configs);
```

Create a default instance the long-winded way.

```js
var options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: false
};
var rInstance = RAMP.createInstance(domElement, configs, options);
rInstance.fixtures.addDefaultFixtures();
rInstance.event.addDefaultEvents();
```

### Replacing Default Fixtures

Replacing a default fixture with a custom fixture of the same name and interface. Note that we can just call `addDefaultFixtures()` without any special parameters; when it attempts to load the default `help` fixture, it will see the already loaded fixture and use that.

```js
var options = {
    loadDefaultFixtures: false
};
var rInstance = RAMP.createInstance(domElement, configs, options);
rInstance.fixtures.add('help', CustomHelpFixtureClass);
rInstance.fixtures.addDefaultFixtures();
```

Note that if the default fixture exposes any methods on its API, a replacement fixture must also implement the method signature. Otherwise runtime errors will likely occur, or some adjustments on the default event handlers will be required to remove any calls to the methods (in which case it is likely easier to just give the fixture a unique name and remove the default fixture).

### Subsets of the Default Setup

Adding a subset of default fixtures. This map does very little! Note we could also suppress and then selectively add the necessary default event handlers. This would be slightly more efficient (we would not have handlers reacting and then realizing there is nothing to do), but also requires one to figure out what event handlers are still needed.

```js
var options = {
    loadDefaultFixtures: false
};
var rInstance = RAMP.createInstance(domElement, configs, options);
rInstance.fixtures.add('help', CustomHelpFixtureClass);
rInstance.fixtures.addDefaultFixtures(['appbar', 'mapnav']);
```

### Specify Starting Fixtures

Provide a set of fixtures in the config to be loaded by the RAMP instance. The value of `loadDefaultFixtures` is ignored and the specified fixtures will be loaded.

```js
var configs = {
    startingFixtures: ['help', 'appbar', 'mapnav'],
    configs: {
        en: {...},
        fr: {...},
        ...
    }
};
var options = {
    loadDefaultFixtures: true // ignored
};
var rInstance = RAMP.createInstance(domElement, configs, options);
```
