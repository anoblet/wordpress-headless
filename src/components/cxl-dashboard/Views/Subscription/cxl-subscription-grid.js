import "@vaadin/vaadin-button";
import "@vaadin/vaadin-dialog";
import "@vaadin/vaadin-form-layout";
import { customElement, html } from "lit-element";
import { GridElement } from "../../BaseElements/GridElement";
import { SubscriptionCollection } from "../../Models/SubscriptionCollection";

@customElement("cxl-subscription-grid")
export class CXLSubscriptionGridElement extends GridElement {
    _collectionType = SubscriptionCollection;

    render() {
        return html`
            <vaadin-grid .items=${this.items}>
                <vaadin-grid-column
                    header="#"
                    path="id"
                    auto-width
                    flex-grow="0"
                ></vaadin-grid-column>
                <vaadin-grid-column
                    header="Product Name"
                    path="productName"
                ></vaadin-grid-column>
                <vaadin-grid-column
                    header="Start Date"
                    path="startDate"
                    auto-width
                    flex-grow="0"
                ></vaadin-grid-column>
                <vaadin-grid-column
                    header="End Date"
                    path="endDate"
                    auto-width
                    flex-grow="0"
                ></vaadin-grid-column>
                <vaadin-grid-column
                    header="Total"
                    path="totalFormatted"
                    auto-width
                    flex-grow="0"
                ></vaadin-grid-column>
                <vaadin-grid-column
                    header="Status"
                    path="status"
                    auto-width
                    flex-grow="0"
                ></vaadin-grid-column>
                <vaadin-grid-column
                    .renderer=${this._boundActionColumnRenderer}
                    auto-width
                    flex-grow="0"
                ></vaadin-grid-column>
            </vaadin-grid>
        `;
    }
}
