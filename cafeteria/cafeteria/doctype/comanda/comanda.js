// Copyright (c) 2025, Sebastian Morales and contributors
// For license information, please see license.txt

frappe.ui.form.on('Comanda', {
    refresh: function(frm) {
        frm.add_custom_button('Test', function() {
            frappe.msgprint(__('Botón Test presionado'));
        });
    }
});