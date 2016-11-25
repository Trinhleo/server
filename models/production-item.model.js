'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Vegetablecat Schema
 */
var ProductionItemSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true,
        unique: true
    },
    description: {
        type: String,
        default: ''
    },
    created: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deleteDate: {
        type: Date
    },
    isEdited: {
        type: Boolean,
        default: false
    },
    editDate: {
        type: Date
    },
    imgUrl: {
        type: String,
        default: '/img/production-item/no-image.svg'
    }
});

mongoose.model('ProductionItem', ProductionItemSchema);
