this.manifest = {
    "name": "My Extension",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("Firebase"),
            "group": i18n.get("Configuration"),
            "name": "apiKey",
            "type": "text",
            "label": i18n.get("apiKey"),
            "text": i18n.get("x-characters")
        },
        {
            "tab": i18n.get("Firebase"),
            "group": i18n.get("Configuration"),
            "name": "storageBucket",
            "type": "text",
            "label": i18n.get("storageBucket"),
            "text": i18n.get("x-characters")
        }
    ],
    "alignment": [
        [
            "apiKey",
            "storageBucket"
        ]
    ]
};
