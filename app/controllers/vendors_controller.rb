class VendorsController < ApplicationController

    def index
        render json: Vendor.all
    end

    def show
        vendor = Vendor.find(params[:id])
        render json: vendor
    end

    def create
        vendor = Vendor.create(vendor_params)
        render json: vendor
    end
    
    def destroy
        Vendor.destroy(params[:id])
        render json: Vendor.all
    end

    def update
        vendor  = Vendor.find(params[:id])
        vendor.update_attributes(vendor_params)
        render json: vendor
    end

    private

    def vendor_params
        params.require(:vendor).permit(:user_id, :name, :category, :address, :city, :state, :zip, :description, :phone, :email)
    end
end